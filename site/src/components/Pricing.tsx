const plans = [
  {
    name: "Starter",
    price: "$5,000",
    best: "Landing pages, business websites, and simple web apps with limited scope.",
    delivery: "2 weeks",
    revisions: "1 round",
    includes: [
      "Up to 5 pages / core screens",
      "Frontend design + development (React or plain HTML/CSS)",
      "Basic contact or lead capture form",
      "Mobile-responsive layout",
      "Deployment setup (Vercel, Netlify, or similar)",
    ],
    notIncluded: "Backend/database, auth systems, third-party API integrations",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$6,999",
    best: "Full-stack web apps with user auth, a database, and a small set of core features.",
    delivery: "3–4 weeks",
    revisions: "2 rounds",
    includes: [
      "Everything in Starter",
      "Backend API development (Node.js / Next.js API routes)",
      "Database design and setup (PostgreSQL / Supabase)",
      "User authentication (email/password, OAuth)",
      "Up to 3 third-party integrations (e.g. Stripe, email, maps)",
      "Admin panel or basic dashboard",
    ],
    notIncluded: "Multi-tenant architecture, complex role systems, mobile apps",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$7,500",
    best: "SaaS platforms, client portals, and multi-role applications that need production-level architecture.",
    delivery: "4–5 weeks",
    revisions: "3 rounds",
    includes: [
      "Everything in Growth",
      "Multi-role access control (admin, staff, client, etc.)",
      "Multi-tenant or multi-location data architecture",
      "Stripe subscription or one-time payment integration",
      "Notification system (email or in-app)",
      "CI/CD pipeline setup",
      "Basic analytics or reporting dashboard",
    ],
    notIncluded: null,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$10,000",
    best: "Complex, high-traffic, or mission-critical platforms requiring custom architecture, deep integrations, or long-term scalability planning.",
    delivery: "Flexible",
    revisions: "Unlimited",
    includes: [
      "Everything in Pro",
      "Custom system architecture and technical planning session",
      "Advanced third-party integrations (ERP, logistics APIs, CRMs, etc.)",
      "Performance optimization and load testing",
      "Full documentation (API docs, deployment runbook, codebase overview)",
      "Security review (auth hardening, input validation, OWASP checklist)",
      "30 days of post-launch support",
    ],
    notIncluded: null,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-[#22c55e] text-xs font-mono tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Straightforward packages
          </h2>
        </div>
        <p className="text-[#71717a] mb-16 max-w-xl">
          All packages include a dedicated point of contact, milestone-based
          delivery, and full source code ownership on handoff. No recurring
          agency fees unless you opt into a retainer.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-[#22c55e] bg-[#0d1f0d]"
                  : "border-[#27272a] bg-[#111113]"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 bg-[#22c55e] text-black text-xs font-bold px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-4xl font-bold mt-2">{plan.price}</p>
                <div className="flex gap-4 mt-3 text-xs text-[#71717a]">
                  <span>⏱ {plan.delivery}</span>
                  <span>↺ {plan.revisions} of revisions</span>
                </div>
              </div>

              <p className="text-[#71717a] text-sm mb-6 border-b border-[#27272a] pb-6">
                <strong className="text-[#a1a1aa]">Best for:</strong>{" "}
                {plan.best}
              </p>

              <ul className="space-y-2.5 flex-1">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#22c55e] flex-shrink-0 text-sm">
                      ✓
                    </span>
                    <span className="text-[#a1a1aa] text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {plan.notIncluded && (
                <p className="mt-6 text-xs text-[#52525b] border-t border-[#27272a] pt-4">
                  <strong>Not included:</strong> {plan.notIncluded}
                </p>
              )}

              <a
                href="#contact"
                className={`mt-8 block text-center py-3 px-4 rounded-md font-semibold text-sm transition-colors duration-150 ${
                  plan.highlight
                    ? "bg-[#22c55e] text-black hover:bg-[#16a34a]"
                    : "border border-[#27272a] text-white hover:border-[#52525b]"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[#71717a] text-sm mt-12">
          Need something in between? All packages are negotiable based on scope.{" "}
          <a href="#contact" className="text-[#22c55e] hover:underline">
            Reach out
          </a>{" "}
          and we&apos;ll scope it properly before any commitment.
        </p>
      </div>
    </section>
  );
}
