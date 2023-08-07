import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wuifvejpabdyjsghqxiq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1aWZ2ZWpwYWJkeWpzZ2hxeGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk5MzkyNjAsImV4cCI6MjAwNTUxNTI2MH0.IWWBEF2rLNC51scXqD4PHg07RfNFKzZMgIjcyMKJT7c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
