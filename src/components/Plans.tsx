import { plans } from "../data";
import { SectionTag } from "./Philosophy";

export default function Plans() {
  return (
    <section
      id="plans"
      className="relative overflow-hidden px-4 py-24"
      style={{
        background:
          "radial-gradient(900px 400px at 20% 10%, rgba(255,138,122,0.16), transparent), #fff9f0",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTag>可持續陪伴 · 安全為基</SectionTag>
          <h2 className="reveal mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[#3f3550] sm:text-5xl">
            揀一個方案，<span className="text-coral">一齊湊大小朋友</span>
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-lg text-[#6b5d78]">
            由免費開始到旗艦陪伴，跟住小朋友嘅成長一齊升級。
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col rounded-[2rem] p-7 transition hover:-translate-y-2 ${
                p.popular
                  ? "bg-white shadow-2xl ring-2 ring-coral md:-mt-4 md:mb-4"
                  : "bg-white/80 shadow-lg ring-1 ring-black/5"
              }`}
              data-delay={`${i * 100}ms`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-coral to-peach px-4 py-1 font-display text-sm font-extrabold text-white shadow-md">
                  🔥 最受歡迎
                </span>
              )}
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-3xl shadow-md`}
              >
                {p.emoji}
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-[#3f3550]">{p.name}</h3>
              <p className="text-sm text-[#8a7d98]">{p.tagline}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold text-coral">{p.price}</span>
                <span className="mb-1 text-[#8a7d98]">{p.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[#5a4d68]">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-mint/40 text-xs">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-7 rounded-full px-6 py-3.5 font-display font-bold transition hover:scale-105 ${
                  p.popular
                    ? "bg-gradient-to-r from-coral to-peach text-white shadow-lg shadow-coral/30"
                    : "bg-[#3f3550] text-white"
                }`}
              >
                {p.price === "免費" ? "免費開始" : "立即升級"}
              </button>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-[#8a7d98]">
          🔒 所有兒童成長數據皆採嚴格加密保管，隨時可下載或刪除。
        </p>
      </div>
    </section>
  );
}
