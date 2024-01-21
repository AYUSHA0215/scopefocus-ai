import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
    "https://yuttttbncoivawdnqrht.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dHR0dGJuY29pdmF3ZG5xcmh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2MTU3MTIsImV4cCI6MjAyMTE5MTcxMn0.s-WPiqW8-896-N8yIEP5cGMGcMHSn7Z-Zb3bsTm7ohk"
);
export default supabase;