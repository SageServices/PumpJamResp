import { StatCard } from "./StatCard";

const stats = [
  { label: "Total Supply Goal", value: "250M USD Locked" },
  { label: "Holders Goal", value: "17.9M" },
  { label: "Market Cap Goal", value: "$13.3B" },
];

export default function TokenInfo() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}