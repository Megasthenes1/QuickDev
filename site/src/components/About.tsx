const values = [
  "Speed without cutting corners",
  "Clear communication, always",
  "Delivery over discussion",
  "Long-term codebases, not short-term hacks",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-[#27272a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#22c55e] text-xs font-mono tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Small team.
              <br />
              Big output.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-[#a1a1aa] text-lg leading-relaxed">
              QuickDev is a small, senior-only freelance studio. No juniors. No
              bloated teams. No project managers playing telephone between you
              and the person actually writing your code.
            </p>
            <p className="text-[#a1a1aa] text-lg leading-relaxed">
              You work directly with the developers building your product. We've
              built fleet management tools, investment partner portals,
              e-commerce pipelines, and internal dashboards — for clients
              ranging from early-stage startups to established firms.
            </p>

            <div className="pt-4">
              <p className="text-white font-semibold mb-4">What we value</p>
              <ul className="space-y-3">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <span className="text-[#22c55e] mt-1 flex-shrink-0">
                      &#10003;
                    </span>
                    <span className="text-[#a1a1aa]">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
