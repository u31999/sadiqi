// src/utils/auth.js
import { supabase } from '../supabaseClient';


//SignOut function
export const signOut = async (redirect = true) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error.message);
    return false;
  }
  if (redirect) {
    window.location.href = '/'; // or use navigate() if needed
  }
  return true;
};
