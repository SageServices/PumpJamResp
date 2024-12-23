import { motion } from "framer-motion";
import { LockIcon } from "./LockIcon";

interface StatCardProps {
  label: string;
  value: string;
  index: number;
}

export function StatCard({ label, value, index }: StatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="relative bg-gradient-to-br from-blue-400/50 to-orange-400/50 backdrop-blur-sm p-8 rounded-2xl border border-white/20 overflow-hidden"
    >
      <div className="relative z-10">
        <h3 className="text-white text-lg mb-2">{label}</h3>
        <p className="text-white text-3xl font-bold animate-blink">{value}</p>
      </div>
      <LockIcon className="absolute -right-4 -bottom-4 text-white/10 w-24 h-24" />
    </motion.div>
  );
}