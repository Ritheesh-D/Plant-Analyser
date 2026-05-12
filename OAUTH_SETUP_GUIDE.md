# Supabase OAuth Provider Setup

To resolve the "Unsupported provider" error, you must enable and configure the OAuth providers in your Supabase Dashboard.

### 1. General Steps
1. Log in to [Supabase Dashboard](https://supabase.com/dashboard).
2. Select your project: **Plant Analyser**.
3. Navigate to **Authentication** > **Providers**.

---

### 2. Enable Google Auth
1. Find **Google** in the list of providers and toggle it to **Enabled**.
2. Go to the [Google Cloud Console](https://console.cloud.google.com/).
3. Create a new project or select an existing one.
4. Go to **APIs & Services** > **Credentials**.
5. Click **Create Credentials** > **OAuth client ID**.
6. Select **Web application**.
7. In **Authorized redirect URIs**, add the callback URL provided by Supabase (found in the Google provider settings on Supabase).
8. Copy the **Client ID** and **Client Secret** and paste them into the Google provider fields in Supabase.
9. Click **Save**.

---

### 3. Enable GitHub Auth
1. Find **GitHub** in the list of providers and toggle it to **Enabled**.
2. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers).
3. Click **New OAuth App**.
4. Set **Homepage URL** to your app's URL (e.g., `http://localhost:5173`).
5. Set **Authorization callback URL** to the callback URL provided by Supabase GitHub provider settings.
6. Click **Register application**.
7. Generate a **Client Secret**.
8. Copy the **Client ID** and **Client Secret** and paste them into the GitHub provider fields in Supabase.
9. Click **Save**.

---

### 4. Code Optimization Note
I noticed that your `Signup.jsx` manually inserts into the `profiles` table, but your `supabase_setup.sql` already has a trigger (`handle_new_user`) that does this automatically. 

**Recommendation:** Remove the manual `.from('profiles').insert(...)` call in `client/src/pages/Signup.jsx` to avoid potential "Duplicate Key" errors or RLS conflicts. The trigger is a more robust way to handle profile creation.
