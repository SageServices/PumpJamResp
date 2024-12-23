import { motion } from "framer-motion";

const stats = [
  { label: "Total Supply Goal", value: "250M USD Locked" },
  { label: "Holders Goal", value: "17.9M" },
  { label: "Market Cap", value: "$13.3B" },
];

export default function TokenInfo() {
  return (
    <motion.section 
      className="py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="bg-gradient-to-br from-blue-400/50 to-orange-400/50 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            <h3 className="text-white text-lg mb-2">{stat.label}</h3>
            <p className="text-white text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}