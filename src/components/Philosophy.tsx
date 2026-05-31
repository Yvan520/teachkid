import { Link } from "react-router-dom";
import { philosophies } from "../data";

const slugMap: Record<string, string> = {
  "蒙特梭利": "montessori",
  "皮亞傑": "piaget",
  "維高斯基": "vygotsky",
  "瑞吉歐": "reggio",
  "孫瑞雪": "sun",
  "全面發展": "holistic",
};

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTag>教育理念係靈魂</SectionTag>
            <h2 className="reveal mt-4 font-display text-4xl font-extrabold leading-tight text-[#3f3550] sm:text-5xl">
              企喺巨人嘅膊頭上，
              <br />
              <span className="text-coral">睇通每個小朋友</span>
            </h2>
            <p className="reveal mt-5 max-w-lg text-lg leading-relaxed text-[#6b5d78]">
              我哋將六套經得起時間考驗嘅教育智慧，變成你每日都用得着嘅湊仔貼士。
              㩒入去睇詳細版 👇
            </p>

            <div className="reveal mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {philosophies.map((p, i) => (
                <Link
                  key={p.name}
                  to={`/philosophy/${slugMap[p.name]}`}
                  className="reveal group flex flex-col rounded-3xl bg-cream p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-xl"
                  data-delay={`${i * 80}ms`}
                >
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.color} text-2xl shadow-md transition group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {p.icon}
                  </div>
                  <h3 className="mt-3 font-display text-lg font-extrabold text-[#3f3550]">
                    {p.name}
                  </h3>
                  <p className="font-display text-xs font-bold text-coral">{p.tag}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#75687f]">{p.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 font-display text-xs font-bold text-coral transition group-hover:gap-2">
                    詳細了解 →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem] bg-gradient-to-br from-mint/40 to-grape/30 blur-xl" />
            <img
              src="images/philosophy.webp"
              alt="蒙特梭利學習環境"
              className="rounded-[2.5rem] border-4 border-white shadow-2xl shadow-mint/30"
            />
            <div className="absolute -right-3 -top-3 rotate-6 rounded-2xl bg-sun px-4 py-2 font-display font-extrabold text-[#5a4d2a] shadow-lg animate-bob">
              環境，就係最好嘅老師 🌿
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="reveal inline-flex items-center gap-2 rounded-full bg-peach/20 px-4 py-1.5 font-display text-sm font-bold text-coral">
      <span className="h-2 w-2 rounded-full bg-coral" />
      {children}
    </span>
  );
}
