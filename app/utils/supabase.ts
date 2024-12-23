import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://opobwxatfdvrmefcosqz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wb2J3eGF0ZmR2cm1lZmNvc3F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5MzUyNjMsImV4cCI6MjA1MDUxMTI2M30.1F3OdBPQ39zQhQ32RfU3lJmV1_IyA5GgLFGNK_pf2uM';

export const supabase = createClient(supabaseUrl, supabaseKey);