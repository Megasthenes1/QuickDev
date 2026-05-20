export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-bold text-lg tracking-tight">
          Quick<span className="text-[#22c55e]">Dev</span>
        </p>
        <p className="text-[#3f3f46] text-sm">We ship.</p>
        <p className="text-[#3f3f46] text-sm">
          <a
            href="mailto:axedtax@gmail.com"
            className="hover:text-[#71717a] transition-colors"
          >
            axedtax@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
