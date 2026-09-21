import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
      {skills.length === 0 && (
        <p className="text-slate-500">
          TODO: [NEEDS INPUT] — no skills data yet
        </p>
      )}
      <div className="space-y-6">
        {skills.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-white font-semibold mb-2">{cat.category}</h3>
            <p className="text-slate-400">{cat.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
