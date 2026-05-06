-- TABLE 1: profiles
CREATE TABLE profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username text NOT NULL,
  email text NOT NULL,
  language_preference text DEFAULT 'en',
  created_at timestamp DEFAULT now()
);

-- TABLE 2: scan_history
CREATE TABLE scan_history (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  plant_name text,
  scientific_name text,
  scan_date timestamp DEFAULT now(),
  result_json jsonb,
  image_url text
);

-- ROW LEVEL SECURITY:
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE scan_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users read own history" ON scan_history FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users insert own history" ON scan_history FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users delete own history" ON scan_history FOR DELETE USING (auth.uid() = user_id);

-- TRIGGER — auto create profile on signup:
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, email, username)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'username');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
