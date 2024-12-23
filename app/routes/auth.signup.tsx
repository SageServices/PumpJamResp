import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { signUpUser } from '~/services/auth.server';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.json();
  const { email, walletAddress } = formData;

  if (!email || !walletAddress) {
    return json({ success: false, message: 'Email and wallet address are required' });
  }

  const result = await signUpUser(email, walletAddress);
  return json(result);
};