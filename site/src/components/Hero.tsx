export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-[#22c55e] text-sm font-mono tracking-widest uppercase mb-6">
            Fast. Reliable. Built right.
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            We build products
            <br />
            that actually
            <br />
            <span className="text-[#22c55e]">ship.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#a1a1aa] max-w-xl leading-relaxed mb-10">
            QuickDev partners with startups, founders, and businesses to turn
            ideas into real, working products. We don&apos;t do mockups that sit
            in Figma forever.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-[#22c55e] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#16a34a] transition-colors duration-150"
            >
              Start a project
            </a>
            <a
              href="#projects"
              className="border border-[#27272a] text-white font-medium px-6 py-3 rounded-md hover:border-[#52525b] transition-colors duration-150"
            >
              See our work
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#27272a] pt-12">
          {[
            { stat: "Senior only", label: "No juniors. No bloat." },
            { stat: "Direct access", label: "You talk to the builder." },
            { stat: "Full source", label: "You own everything." },
            { stat: "On time", label: "We ship, every time." },
          ].map((item) => (
            <div key={item.stat}>
              <p className="text-white font-bold text-lg">{item.stat}</p>
              <p className="text-[#71717a] text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
