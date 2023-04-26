import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mbprsxveoiebgwdnchbq.supabase.co';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, localStorage.getItem('key'));
};
