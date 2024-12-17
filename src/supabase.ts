import { createClient } from "@supabase/supabase-js";

// Initialize Supabase Client
const REACT_APP_SUPABASE_URL="https://akgnytpaapoxksaocxzj.supabase.co";
const REACT_APP_SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZ255dHBhYXBveGtzYW9jeHpqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNDI0MDA1OSwiZXhwIjoyMDQ5ODE2MDU5fQ.ER7a63uv1RgiVxkGqBP_asHTZ8SZ4mWV-f5Wc6wYMjM";

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY);


export { supabase };
