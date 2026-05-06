import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://xxvzudwtlzwvuwletybc.supabase.co";
const supabaseKey = "sb_publishable_fIRuLlRSErsI4jcWOvHC7w_h-Mg06Tn";

export const supabase = createClient(supabaseUrl, supabaseKey);

