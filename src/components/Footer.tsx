import { useState, type FormEvent } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden px-4 pb-10 pt-20">
      {/* CTA */}
      <div className="mx-auto max-w-5xl">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coral via-peach to-grape p-10 text-center shadow-2xl sm:p-14">
          <span className="pointer-events-none absolute -left-6 top-6 text-6xl opacity-30 animate-float-slow">🎈</span>
          <span className="pointer-events-none absolute right-8 bottom-6 text-6xl opacity-30 animate-bob">🚀</span>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">
            今日就幫小朋友打開成長嘅窗門
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            免費加入童趣星球，用陪伴送俾小朋友最好嘅禮物。
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="輸入你嘅 Email"
              required
              aria-label="Email 地址"
              className="w-full max-w-xs rounded-full border-0 px-6 py-4 text-[#4a3f55] shadow-inner outline-none ring-2 ring-white/60 focus:ring-white sm:w-72"
            />
            <button
              type="submit"
              disabled={submitted}
              className="w-full rounded-full bg-white px-8 py-4 font-display font-extrabold text-coral shadow-lg transition hover:scale-105 disabled:opacity-60 sm:w-auto"
            >
              {submitted ? "✅ 已訂閱" : "免費加入 ✨"}
            </button>
          </form>
        </div>
      </div>

      {/* links */}
      <div className="mx-auto mt-14 max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-coral to-grape text-xl">
                🪐
              </span>
              <span className="font-display text-xl font-extrabold text-[#4a3f55]">
                童趣<span className="text-coral">星球</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-[#8a7d98]">
              專為0–10歲小朋友而設嘅科學成長樂園，內容為王、體驗為后、安全為基、理念為魂。
            </p>
          </div>
          <FootCol title="探索" links={[{ label: "教育理念", href: "#philosophy" }, { label: "成長階段", href: "#stages" }, { label: "長高營養", href: "#nutrition" }]} />
          <FootCol title="支援" links={[{ label: "常見問題", href: "#" }, { label: "聯絡我哋", href: "#" }, { label: "家長社群", href: "#" }, { label: "專家團隊", href: "#" }]} />
          <FootCol title="守護" links={[{ label: "私隱政策", href: "#" }, { label: "兒童數據保護", href: "#" }, { label: "服務條款", href: "#" }, { label: "資安說明", href: "#" }]} />
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#eaddd5] pt-6 text-sm text-[#9a8da6] sm:flex-row">
          <p>© 2026 童趣星球 ｜ 用心陪住每個成長時刻</p>
          <div className="flex gap-3 text-xl">
            <a href="#" aria-label="LINE 社群" className="transition hover:scale-125">💬</a>
            <a href="#" aria-label="Facebook 專頁" className="transition hover:scale-125">📘</a>
            <a href="#" aria-label="Instagram" className="transition hover:scale-125">📷</a>
            <a href="#" aria-label="YouTube 頻道" className="transition hover:scale-125">▶️</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-display font-extrabold text-[#3f3550]">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-[#8a7d98]">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition hover:text-coral">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
