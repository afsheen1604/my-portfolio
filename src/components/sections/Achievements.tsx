import { achievements } from "../../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Achievements</h2>
      {achievements.length === 0 && (
        <p className="text-slate-500">
          TODO: [NEEDS INPUT] — no achievements data yet
        </p>
      )}
      <ul className="space-y-3">
        {achievements.map((a) => (
          <li key={a.title} className="text-slate-400">
            <span className="text-white font-medium">{a.title}</span> —{" "}
            {a.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
