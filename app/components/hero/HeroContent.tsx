import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <>
      <motion.h2 
        className="font-display text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Pump Up The Jam! 🚀
      </motion.h2>

      <motion.p 
        className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        The sweetest meme coin in crypto! Get ready to spread the jam! 🍇
      </motion.p>
    </>
  );
}