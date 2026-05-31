import { useState } from "react";
import { Link } from "react-router-dom";
import { stages } from "../data";
import { SectionTag } from "./Philosophy";

const tabs = [
  { key: "play", label: "玩咩", emoji: "🧸" },
  { key: "learn", label: "學咩", emoji: "📚" },
  { key: "watch", label: "留意咩", emoji: "💡" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function Stages() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<TabKey>("play");
  const stage = stages[active];
  const items = stage[tab];

  return (
    <section
      id="stages"
      className="relative overflow-hidden px-4 py-24"
      style={{
        background:
          "radial-gradient(1200px 500px at 80% 0%, rgba(184,164,240,0.18), transparent), #fff9f0",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTag>內容為王 · 體驗為后</SectionTag>
          <h2 className="reveal mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[#3f3550] sm:text-5xl">
            呢個年紀，該<span className="text-coral">玩</span>、該
            <span className="text-[#2bb88a]">學</span>、該
            <span className="text-[#8b6fe0]">留意</span>咩？
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-lg text-[#6b5d78]">
            㩒一下，搵到屬於你個寶貝嘅成長地圖 👇
          </p>
        </div>

        {/* stage selector */}
        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          {stages.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 rounded-2xl px-5 py-3 font-display font-bold transition ${
                active === i
                  ? "scale-105 text-white shadow-xl"
                  : "bg-white text-[#5a4d68] shadow-sm hover:scale-105"
              }`}
              style={active === i ? { backgroundColor: s.accent, boxShadow: `0 14px 30px -8px ${s.accent}` } : {}}
            >
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-left leading-tight">
                {s.age}
                <span className={`block text-xs font-medium ${active === i ? "text-white/85" : "text-[#9a8da6]"}`}>
                  {s.title}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* card */}
        <div
          key={stage.id}
          className={`relative mt-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${stage.color} p-6 shadow-xl ring-1 ring-white/60 sm:p-10`}
          style={{ animation: "pop-in .5s ease both" }}
        >
          <span className="pointer-events-none absolute -right-6 -top-6 select-none text-[10rem] opacity-20">
            {stage.emoji}
          </span>

          {/* tabs */}
          <div className="relative flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full px-5 py-2.5 font-display font-bold transition ${
                  tab === t.key
                    ? "bg-white text-[#3f3550] shadow-md"
                    : "bg-white/40 text-[#5a4d68] hover:bg-white/70"
                }`}
              >
                {t.emoji} {t.label}
              </button>
            ))}
          </div>

          {/* items */}
          <div key={tab} className="relative mt-8 grid gap-4 sm:grid-cols-3">
            {items.map((item, i) => (
              <div
                key={item}
                className="rounded-3xl bg-white/85 p-5 shadow-md backdrop-blur transition hover:-translate-y-1 hover:bg-white"
                style={{ animation: `pop-in .5s ease both`, animationDelay: `${i * 90}ms` }}
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-full font-display text-sm font-extrabold text-white"
                  style={{ backgroundColor: stage.accent }}
                >
                  {i + 1}
                </span>
                <p className="mt-3 leading-relaxed text-[#4a3f55]">{item}</p>
              </div>
            ))}
          </div>

          <Link
            to={`/stages/${stage.slug}`}
            className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 font-display text-sm font-bold text-[#3f3550] shadow-md transition hover:bg-white hover:gap-3"
          >
            詳細了解 {stage.age} {stage.title} →
          </Link>
        </div>
      </div>
    </section>
  );
}
