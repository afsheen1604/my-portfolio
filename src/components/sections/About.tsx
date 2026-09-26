import aboutPic from "../../assets/images/about-pic.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-4xl mx-auto grid md:grid-cols-[200px_1fr] gap-8 items-start"
    >
      <img
        src={aboutPic}
        alt="About photo"
        className="w-full rounded-lg object-cover"
      />
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">About</h2>
        <p className="text-slate-400">
          {/* TODO: [NEEDS INPUT] — about copy */}
        </p>
      </div>
    </section>
  );
}
