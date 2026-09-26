export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
      <div className="flex flex-col items-center gap-2 text-slate-400">
        <a
          href="mailto:shaiknidaafsheen@gmail.com"
          className="hover:text-white transition-colors"
        >
          shaiknidaafsheen@gmail.com
        </a>
        <span>+91 9296109205</span>
        {/* TODO: [NEEDS INPUT] — real LinkedIn and GitHub profile URLs */}
      </div>
    </section>
  );
}
