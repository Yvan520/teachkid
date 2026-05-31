export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:pt-32"
    >
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 bg-mint/40 blur-3xl animate-blob" />
        <div className="absolute right-0 top-40 h-80 w-80 bg-grape/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 bg-sun/40 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      </div>

      {/* floating emojis */}
      <Floaty className="left-[6%] top-28 text-5xl animate-float-slow">🎈</Floaty>
      <Floaty className="right-[8%] top-44 text-4xl animate-float-mid">⭐</Floaty>
      <Floaty className="left-[12%] bottom-24 text-4xl animate-bob">🧩</Floaty>
      <Floaty className="right-[14%] bottom-32 text-5xl animate-float-slow">🚀</Floaty>
      <Floaty className="left-1/2 top-24 text-3xl animate-float-mid">☁️</Floaty>

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 font-display text-sm font-bold text-coral shadow-sm backdrop-blur">
            🌟 專為0–10歲小朋友而設嘅科學成長樂園
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-[#3f3550] sm:text-6xl lg:text-7xl">
            將小朋友嘅世界
            <br />
            <span className="text-shimmer">變成一個樂園</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-[#6b5d78] lg:mx-0">
幾多歲玩咩、學咩、留意咩、食咩先高——
我哋陪你睇得明晒。
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#stages"
              className="group rounded-full bg-gradient-to-r from-coral to-peach px-8 py-4 font-display text-lg font-bold text-white shadow-xl shadow-coral/30 transition hover:scale-105"
            >
              開始探索 <span className="inline-block transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#philosophy"
              className="rounded-full bg-white/80 px-8 py-4 font-display text-lg font-bold text-[#5a4d68] shadow-md backdrop-blur transition hover:scale-105 hover:text-coral"
            >
              ▷ 我哋嘅理念
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-7 lg:justify-start">
            <Stat num="6 大" label="教育理念" />
            <Divider />
            <Stat num="3 階" label="成長階段" />
            <Divider />
            <Stat num="100%" label="安全守護" />
          </div>
        </div>

        {/* hero image */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 translate-x-3 translate-y-4 rounded-[3rem] bg-gradient-to-br from-grape/30 to-sun/30 blur-2xl" />
          <div className="overflow-hidden rounded-[2.5rem] border-4 border-white/70 shadow-2xl shadow-grape/20">
            <img
              src="images/hero.webp"
              alt="小朋友開心學習探索"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur animate-bob">
            <span className="text-2xl">💞</span>
            <div className="text-left leading-tight">
              <p className="font-display text-sm font-extrabold text-[#3f3550]">愛與自由</p>
              <p className="text-xs text-[#8a7d98]">陪住每一步成長</p>
            </div>
          </div>
        </div>
      </div>

      {/* wave divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 60 C 240 120 480 0 720 40 C 960 80 1200 20 1440 60 L1440 120 L0 120 Z"
            fill="#ffffff"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}

function Floaty({ className, children }: { className: string; children: React.ReactNode }) {
  return <span className={`pointer-events-none absolute select-none ${className}`}>{children}</span>;
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <p className="font-display text-2xl font-extrabold text-coral">{num}</p>
      <p className="text-sm text-[#8a7d98]">{label}</p>
    </div>
  );
}

function Divider() {
  return <span className="h-8 w-px bg-[#e3d5d0]" />;
}
