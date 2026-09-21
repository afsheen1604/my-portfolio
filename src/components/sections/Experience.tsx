import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experience.map((item) => (
          <div
            key={item.company + item.role}
            className="border-l-2 border-slate-700 pl-4"
          >
            <h3 className="text-lg font-semibold text-white">{item.role}</h3>
            <p className="text-slate-400">
              {item.company} · {item.startDate} – {item.endDate}
            </p>
            <ul className="mt-2 list-disc list-inside text-slate-400">
              {item.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
