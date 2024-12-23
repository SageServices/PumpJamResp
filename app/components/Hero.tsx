import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 text-center relative">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 relative"
      >
        <img 
          src="https://cdn.freewebstore.com/origin/919667/universalupscaler_f678a4397fd442d1849ec21507959747_1734927126026.jpg"
          alt="PUMP Jam" 
          className="w-72 h-72 mx-auto rounded-full border-4 border-purple-600 shadow-2xl animate-bounce-slow"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse-slow" />
      </motion.div>

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

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center gap-6"
      >
        <a 
          href="#" 
          className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg"
        >
          Buy Now
        </a>
        <a 
          href="#" 
          className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-bold text-white hover:bg-white/20 transition-all"
        >
          Learn More
        </a>
      </motion.div>
    </section>
  );
}