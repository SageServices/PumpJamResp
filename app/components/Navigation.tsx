import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-white/10 backdrop-blur-sm"
    >
      <h1 className="font-display text-3xl text-white">$PumpJam</h1>
      <a 
        href="https://x.com/PUMPJAMSTATION"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-blue-400 to-orange-400 px-6 py-2 rounded-full font-bold text-white hover:opacity-90 transition-all hover:scale-105"
      >
        Follow On X
      </a>
    </motion.nav>
  );
}