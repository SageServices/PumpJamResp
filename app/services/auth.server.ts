import { supabase } from '~/utils/supabase';

export async function signUpUser(email: string, walletAddress: string) {
  try {
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('wallet_address')
      .eq('wallet_address', walletAddress)
      .single();

    if (existingUser) {
      throw new Error('Wallet address already registered');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password: walletAddress, // Using wallet address as password
      options: {
        data: {
          wallet_address: walletAddress,
        },
      },
    });

    if (error) throw error;

    // Create user profile
    const { error: profileError } = await supabase
      .from('users')
      .insert([
        {
          id: data.user?.id,
          wallet_address: walletAddress,
          email,
        }
      ]);

    if (profileError) throw profileError;

    return { success: true, message: 'Please check your email for verification link' };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function signInUser(email: string, walletAddress: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: walletAddress,
    });

    if (error) throw error;

    return { success: true, user: data.user };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}