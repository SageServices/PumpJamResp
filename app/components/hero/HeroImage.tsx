import { motion } from "framer-motion";

export default function HeroImage() {
  return (
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
  );
}