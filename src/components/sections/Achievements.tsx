import { achievements } from "../../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-neon-blue via-neon-violet to-neon-pink bg-clip-text text-transparent">
        Achievements
      </h2>
      {achievements.length === 0 && (
        <p className="text-slate-500">
          TODO: [NEEDS INPUT] — no achievements data yet
        </p>
      )}
      <div className="space-y-4">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="bg-bg-soft/60 border border-neon-violet/20 rounded-xl p-5 hover:border-neon-blue/50 transition-colors"
          >
            <h3 className="text-white font-medium mb-1">{a.title}</h3>
            <p className="text-slate-400 text-sm">{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
