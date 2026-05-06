import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Supabase credentials missing! Ensure SUPABASE_URL and SUPABASE_SERVICE_KEY are in .env');
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
