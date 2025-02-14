// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ccjeuxtsbpdcfvnotbzz.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjamV1eHRzYnBkY2Z2bm90Ynp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxMjQ2MDAsImV4cCI6MjA1MzcwMDYwMH0.y7RGp9TdhXjHxRtigZQiJJpY0qqZ0TZb0mnIL9-fHDM'; // Replace with your public API key

export const supabase = createClient(supabaseUrl, supabaseKey);