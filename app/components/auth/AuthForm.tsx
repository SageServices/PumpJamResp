import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useAuth } from '~/contexts/AuthContext';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const result = isSignUp 
        ? await signUp(email, walletAddress)
        : await signIn(email, walletAddress);

      if (!result.success) {
        setError(result.message || 'An error occurred');
        return;
      }

      if (isSignUp) {
        setMessage(result.message || 'Please check your email for verification link');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-xl"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-white/5 border border-white/10 text-white"
            required
            disabled={loading}
          />
        </div>

        <div>
          <label htmlFor="walletAddress" className="block text-white mb-2">
            Solana Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="w-full p-2 rounded bg-white/5 border border-white/10 text-white"
            required
            disabled={loading}
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        {message && (
          <p className="text-green-400 text-sm">{message}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
        </button>

        <p className="text-white text-center mt-4">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-400 hover:underline"
            disabled={loading}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </form>
    </motion.div>
  );
}