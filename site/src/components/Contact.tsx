"use client";

import { useState } from "react";

const inputClass =
  "w-full bg-[#111113] border border-[#27272a] rounded-md px-4 py-3 text-white placeholder-[#3f3f46] focus:outline-none focus:border-[#22c55e] transition-colors text-sm";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    timeline: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", project: "", timeline: "", details: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-32 px-6 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#22c55e] text-xs font-mono tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Ready to build
              <br />
              something?
            </h2>
            <p className="text-[#a1a1aa] text-lg mb-8">Let&apos;s talk.</p>

            <div className="space-y-4 mb-10">
              <div>
                <p className="text-[#52525b] text-xs uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href="mailto:axedtax@gmail.com"
                  className="text-white hover:text-[#22c55e] transition-colors font-medium"
                >
                  axedtax@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[#52525b] text-xs uppercase tracking-widest mb-1">
                  Response time
                </p>
                <p className="text-[#a1a1aa]">Within 24 hours on business days</p>
              </div>
            </div>

            <div className="border border-[#27272a] rounded-xl p-6 bg-[#111113]">
              <p className="text-white font-semibold mb-3 text-sm">
                When you reach out, include:
              </p>
              <ol className="space-y-2">
                {[
                  "What you're building",
                  "Your rough timeline",
                  "Any tech constraints or preferences",
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-[#22c55e] font-mono">{i + 1}.</span>
                    <span className="text-[#a1a1aa]">{item}</span>
                  </li>
                ))}
              </ol>
              <p className="text-[#52525b] text-xs mt-4">
                We&apos;ll reply with questions, a rough scope, and whether
                we&apos;re the right fit.
              </p>
            </div>
          </div>

          <div>
            {status === "success" ? (
              <div className="border border-[#22c55e]/30 bg-[#0d1f0d] rounded-xl p-10 text-center">
                <p className="text-[#22c55e] text-3xl mb-4">✓</p>
                <h3 className="text-white font-bold text-xl mb-2">Message received</h3>
                <p className="text-[#a1a1aa] text-sm">
                  We&apos;ll get back to you within 24 hours on business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs text-[#52525b] hover:text-[#71717a] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#71717a] uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#71717a] uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#71717a] uppercase tracking-widest mb-2">
                    What are you building?
                  </label>
                  <input
                    type="text"
                    placeholder="SaaS platform, client portal, e-commerce site..."
                    value={form.project}
                    onChange={(e) => update("project", e.target.value)}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#71717a] uppercase tracking-widest mb-2">
                    Rough timeline
                  </label>
                  <select
                    value={form.timeline}
                    onChange={(e) => update("timeline", e.target.value)}
                    required
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Select a timeline</option>
                    <option>ASAP / 2 weeks</option>
                    <option>1 month</option>
                    <option>2–3 months</option>
                    <option>3+ months / flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#71717a] uppercase tracking-widest mb-2">
                    More details
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project, tech preferences, or anything else relevant..."
                    value={form.details}
                    onChange={(e) => update("details", e.target.value)}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="block w-full bg-[#22c55e] text-black font-semibold py-3 px-6 rounded-md text-center hover:bg-[#16a34a] transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : "Send message →"}
                </button>

                <p className="text-[#3f3f46] text-xs text-center">
                  Or email us directly at{" "}
                  <a
                    href="mailto:axedtax@gmail.com"
                    className="text-[#52525b] hover:text-[#71717a]"
                  >
                    axedtax@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
