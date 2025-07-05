import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vxfgidklfuzszfxwjros.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZmdpZGtsZnV6c3pmeHdqcm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3Mjg5NzQsImV4cCI6MjA2NzMwNDk3NH0.mAlASzSSH9JJysVkeYldRBf-DN9rPOvy_S_tncPkdAI';

export const supabase = createClient(supabaseUrl, supabaseKey);
