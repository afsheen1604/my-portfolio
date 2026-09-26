import { experience } from "../../data/experience";
import experience1 from "../../assets/images/experience1.jpg";
import experience2 from "../../assets/images/experience2.jpg";

const images = [experience1, experience2];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experience.map((item, index) => (
          <div
            key={item.company + item.role}
            className="flex gap-4 border-l-2 border-slate-700 pl-4"
          >
            {images[index] && (
              <img
                src={images[index]}
                alt={item.company}
                className="w-16 h-16 rounded object-cover flex-shrink-0"
              />
            )}
            <div>
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
          </div>
        ))}
      </div>
    </section>
  );
}
