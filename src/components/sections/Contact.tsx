import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_9kcdwia";
const EMAILJS_TEMPLATE_ID = "template_y6iynrd";
const EMAILJS_PUBLIC_KEY = "Ro-VGv3h8dQmIY6gR";

const contactMethods = [
  {
    label: "snida.afsheen@gmail.com",
    href: "mailto:snida.afsheen@gmail.com",
    bg: "bg-neon-pink/15",
    iconColor: "text-neon-pink",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M4 6h16v12H4z" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "+91 9296109205",
    href: "tel:+919296109205",
    bg: "bg-neon-blue/10",
    iconColor: "text-neon-blue",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "GitHub Profile",
    href: "https://github.com/afsheen1604",
    bg: "bg-neon-violet/15",
    iconColor: "text-neon-violet",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/nida-afsheen-shaik/",
    bg: "bg-neon-blue/10",
    iconColor: "text-neon-blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "LeetCode Profile",
    href: "https://leetcode.com/u/afsheen1604/",
    bg: "bg-neon-violet/15",
    iconColor: "text-neon-violet",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.48 2.1a1.5 1.5 0 0 1 0 2.12L8.7 8.99l1.9 1.9a1.5 1.5 0 1 1-2.12 2.12l-3-3a1.5 1.5 0 0 1 0-2.12l6-6a1.5 1.5 0 0 1 2.12 0zm-2.6 13.86 3-3a1.5 1.5 0 1 1 2.12 2.12l-1.9 1.9 4.78 4.77a1.5 1.5 0 1 1-2.12 2.12l-6-6a1.5 1.5 0 0 1 0-2.12l.12-.12z" />
      </svg>
    ),
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name, email, message },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-neon-blue via-neon-violet to-neon-pink bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Ready to collaborate? Let's build something great together.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 bg-bg-soft/60 border border-neon-violet/20 rounded-xl px-5 py-4 hover:border-neon-blue/50 transition-colors"
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${method.bg} ${method.iconColor}`}
                >
                  {method.icon}
                </span>
                <span className="text-slate-200">{method.label}</span>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-bg-soft/60 border border-neon-violet/20 rounded-xl p-6 flex flex-col gap-4"
          >
            <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 text-neon-blue"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Send a Message
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-bg border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-neon-blue/60"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-bg border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-neon-blue/60"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="bg-bg border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-neon-blue/60 resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-violet text-white font-semibold rounded-lg py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4z" />
              </svg>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-green-400 text-sm text-center">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try emailing directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
