import { growFoods } from "../data";
import { SectionTag } from "./Philosophy";

export default function Nutrition() {
  return (
    <section id="nutrition" className="relative bg-white px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute inset-0 -z-10 -translate-x-4 translate-y-4 rounded-[2.5rem] bg-gradient-to-br from-sun/40 to-mint/40 blur-xl" />
            <img
              src="images/nutrition.webp"
              alt="幫到長高嘅營養食物"
              className="rounded-[2.5rem] border-4 border-white shadow-2xl shadow-sun/30"
            />
            <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg animate-bob">
              <span className="text-2xl">📏</span>
              <div className="leading-tight">
                <p className="font-display text-sm font-extrabold text-[#3f3550]">瞓夠 + 食啱 + 多郁動</p>
                <p className="text-xs text-[#8a7d98]">長高三件法寶</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionTag>長高嘅小秘密</SectionTag>
            <h2 className="reveal mt-4 font-display text-4xl font-extrabold leading-tight text-[#3f3550] sm:text-5xl">
              食啱食物，<span className="text-coral">標高冇難度</span> 🌻
            </h2>
            <p className="reveal mt-5 max-w-md text-lg leading-relaxed text-[#6b5d78]">
              成長黃金期，飯枱就係最好嘅營養師。呢幾類食物，係小朋友長高嘅好拍檔。
            </p>

            <div className="reveal mt-8 grid gap-3 sm:grid-cols-2">
              {growFoods.map((f, i) => (
                <div
                  key={f.name}
                  className="reveal group flex items-start gap-3 rounded-2xl bg-cream p-4 ring-1 ring-black/5 transition hover:-translate-y-1 hover:bg-peach/10 hover:shadow-lg"
                  data-delay={`${i * 70}ms`}
                >
                  <span className="text-3xl transition group-hover:scale-125">{f.emoji}</span>
                  <div>
                    <p className="font-display font-extrabold text-[#3f3550]">{f.name}</p>
                    <p className="text-sm leading-snug text-[#75687f]">{f.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
