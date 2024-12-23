import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex justify-center gap-6"
    >
      <a 
        href="https://raydium.io/swap"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-blue-400 to-orange-400 px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg"
      >
        Buy Now
      </a>
      <a 
        href="https://solscan.io/token/PUMPJAMjWKiAHnqMYAm3qJbAKQsAJJ4swxAJQFoSLGF"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-bold text-white hover:bg-white/20 transition-all hover:scale-105"
      >
        View on Solscan
      </a>
    </motion.div>
  );
}