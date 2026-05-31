import { SectionTag } from "./Philosophy";

const pillars = [
  { emoji: "📖", title: "內容為王", desc: "科學、權威、落到地嘅成長知識" },
  { emoji: "✨", title: "體驗為后", desc: "為小朋友設計嘅順暢互動體驗" },
  { emoji: "🛡️", title: "安全為基", desc: "兒童私隱同數據嘅嚴格守護" },
  { emoji: "💫", title: "理念為魂", desc: "令每個決定都有教育嘅溫度" },
];

const voices = [
  {
    text: "終於知道三歲個仔應該玩咩啦！每日親子時間都更有方向。",
    name: "怡君媽咪",
    role: "3 歲仔嘅家長",
    avatar: "👩",
  },
  {
    text: "分齡課程同營養食譜超實用，個女呢半年高咗 4 厘米！",
    name: "建宏爸爸",
    role: "7 歲女嘅家長",
    avatar: "🧔",
  },
  {
    text: "個網站個樣好得意，小朋友都鍾意一齊睇。係會令人想成日返嚟嘅網站。",
    name: "Amy 媽媽",
    role: "5 歲仔嘅家長",
    avatar: "👩‍🦰",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTag>四者兼備，贏得信任</SectionTag>
          <h2 className="reveal mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[#3f3550] sm:text-5xl">
            家長放心，小朋友開心
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="reveal rounded-3xl bg-cream p-6 text-center ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-lg"
              data-delay={`${i * 80}ms`}
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-3xl shadow-sm">
                {p.emoji}
              </div>
              <h3 className="mt-3 font-display text-lg font-extrabold text-[#3f3550]">{p.title}</h3>
              <p className="mt-1 text-sm text-[#75687f]">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {voices.map((v, i) => (
            <figure
              key={v.name}
              className="reveal flex flex-col rounded-3xl bg-gradient-to-br from-cream to-white p-6 shadow-md ring-1 ring-black/5"
              data-delay={`${i * 100}ms`}
            >
              <div className="text-2xl text-sun">★★★★★</div>
              <blockquote className="mt-3 flex-1 leading-relaxed text-[#5a4d68]">
                「{v.text}」
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-peach/30 text-2xl">
                  {v.avatar}
                </span>
                <div>
                  <p className="font-display font-extrabold text-[#3f3550]">{v.name}</p>
                  <p className="text-xs text-[#8a7d98]">{v.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
