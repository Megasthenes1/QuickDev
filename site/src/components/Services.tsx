const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end development of web applications — frontend, backend, database, auth, and deployment. React, Next.js, Node.js, PostgreSQL, Supabase, and more.",
  },
  {
    title: "SaaS & Platform Development",
    description:
      "Multi-tenant platforms, subscription flows, role-based access, billing integration (Stripe), and admin dashboards built to scale.",
  },
  {
    title: "Business Websites & Portals",
    description:
      "Professional client-facing websites and internal portals with CMS integration, contact systems, and custom functionality — not templates.",
  },
  {
    title: "API Design & Integration",
    description:
      "REST and GraphQL API design, third-party service integrations (payment gateways, maps, logistics APIs, CRMs), and backend architecture.",
  },
  {
    title: "UI/UX Design + Implementation",
    description:
      "Clean, functional design with direct handoff to working code. No Figma-to-nowhere pipelines.",
  },
  {
    title: "Database Design & Optimization",
    description:
      "Schema design, query optimization, RLS policies, migrations, and data modeling for production workloads.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#22c55e] text-xs font-mono tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What we build
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a]">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#09090b] p-8 hover:bg-[#111113] transition-colors duration-150"
            >
              <h3 className="text-white font-semibold text-lg mb-3">
                {s.title}
              </h3>
              <p className="text-[#71717a] text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
