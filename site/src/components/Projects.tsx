const projects = [
  {
    name: "LotFlow",
    tagline: "Vehicle Lot Management Platform",
    url: "https://lotflow.com/#",
    description:
      "A full-featured vehicle lot management application built for automotive dealers and fleet operators. LotFlow handles multi-lot inventory tracking, work order management, and real-time status updates across a vehicle's lifecycle — from intake to sale.",
    features: [
      "Multi-work-order support per vehicle",
      "Role-based access for staff and managers",
      "VIN barcode scanning integration",
      "Supabase backend with row-level security",
      "React/TypeScript frontend with Android WebView compatibility",
      "Real-time inventory dashboards",
    ],
  },
  {
    name: "Portman Partners",
    tagline: "Investment Partner Portal",
    url: "https://portman.partners/",
    description:
      "A professional web presence and client portal for an investment partnership firm. Built to convey credibility, surface the right information to the right audience, and support lead generation for high-value client relationships.",
    features: [
      "Clean, conversion-focused design",
      "Structured information architecture for investor audiences",
      "Contact and inquiry flows",
      "Fast, SEO-optimized static delivery",
      "Professional brand identity implementation",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#22c55e] text-xs font-mono tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Things we&apos;ve shipped
          </h2>
        </div>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="grid md:grid-cols-2 gap-12 border border-[#27272a] rounded-xl p-8 md:p-12 hover:border-[#3f3f46] transition-colors duration-200"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[#52525b] text-xs font-mono">
                      0{i + 1}
                    </span>
                    <h3 className="text-2xl font-bold mt-1">{p.name}</h3>
                    <p className="text-[#22c55e] text-sm mt-1">{p.tagline}</p>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#71717a] hover:text-white transition-colors text-sm border border-[#27272a] px-3 py-1.5 rounded-md hover:border-[#52525b]"
                  >
                    Visit ↗
                  </a>
                </div>
                <p className="text-[#a1a1aa] leading-relaxed mt-4">
                  {p.description}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#52525b] font-mono uppercase tracking-widest mb-4">
                  Key features
                </p>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-[#22c55e] flex-shrink-0 mt-0.5">
                        →
                      </span>
                      <span className="text-[#a1a1aa] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
