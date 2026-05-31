import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function FruitVitamin() {
  return (
    <PhilosophyLayout
      meta={{
        title: "水果 & 維他命 — 免疫力守護者",
        desc: "水果提供維他命C、維他命A、抗氧化物——增強免疫力、預防疾病。點樣量化、每日需要幾多、最抵食嘅生果推介。",
        slug: "fruit-vitamin",
      }}
    >
      <h1>🍎 水果 & 維他命</h1>
      <p className="lead">
        水果係維他命C、維他命A、抗氧化物同纖維嘅優質來源。
        每日適量水果可以幫小朋友增強免疫力、預防傷風感冒、促進傷口癒合同皮膚健康。
      </p>

      {/* 每日需要量 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sun/10 to-peach/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📊</span> 每日水果需要量
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { age: "1–3 歲", amount: "½份", note: "½個蘋果/½條蕉" },
            { age: "4–6 歲", amount: "1 份", note: "1個橙/1條蕉" },
            { age: "7–10 歲", amount: "1–2 份", note: "逐步增加" },
            { age: "備註", amount: "1份≈拳頭咁大", note: true },
          ].map((item) => (
            <div
              key={item.age}
              className={`rounded-2xl p-5 text-center ${item.note ? "bg-coral/5" : "bg-white/80"} backdrop-blur`}
            >
              <p className="font-display text-lg font-extrabold text-[#3f3550]">{item.age}</p>
              <p className="mt-1 font-display text-2xl font-bold text-coral">{item.amount}</p>
              {item.note && !item.note !== undefined && (
                <p className="mt-1 text-xs text-[#8a7d98]">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 維他命C大比拼 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🥇</span> 維他命C大比拼
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🍊", name: "橙/柑", detail: "1個 ≈ 70mg C——一個已夠一日所需", c: "70mg", rank: "🥉" },
            { emoji: "🥝", name: "奇異果", detail: "1個 ≈ 90mg C——比橙更高", c: "90mg", rank: "🥈" },
            { emoji: "🍓", name: "士多啤梨", detail: "5–6粒 ≈ 60mg C", c: "60mg", rank: "" },
            { emoji: "🫐", name: "藍莓", detail: "抗氧化最強，但偏貴", c: "—", rank: "" },
            { emoji: "🍈", name: "木瓜", detail: "維他命C超高，HK街市好平", c: "↑↑", rank: "🥇" },
            { emoji: "🍐", name: "番石榴", detail: "維他命C含量係橙嘅4倍", c: "↑↑↑", rank: "🏆" },
          ].map((fruit) => (
            <div
              key={fruit.name}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl">{fruit.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-display font-extrabold text-[#3f3550]">{fruit.name}</p>
                  {fruit.rank && <span>{fruit.rank}</span>}
                </div>
                <p className="text-sm text-[#5a4d68]">{fruit.detail}</p>
              </div>
              <span className="rounded-full bg-mint/20 px-3 py-1 font-display text-sm font-bold text-green-700">
                {fruit.c}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 抵食生果 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sun/10 to-peach/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">💰</span> 最抵食嘅生果推介
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🍌", name: "香蕉", price: "$3–5/條", note: "全年有、飽肚、即食方便" },
            { emoji: "🍊", name: "橙", price: "$5–8/個", note: "可以放好耐，一次買一箱" },
            { emoji: "🍎", name: "蘋果", price: "$4–6/個", note: "耐放、小朋友普遍鍾意" },
            { emoji: "🍉", name: "西瓜（夏天）", price: "$30–50/個", note: "CP值超高，一大籃" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-2xl bg-white/80 p-4 backdrop-blur"
            >
              <span className="text-3xl">{item.emoji}</span>
              <div className="flex-1">
                <p className="font-display font-extrabold text-[#3f3550]">{item.name}</p>
                <p className="text-sm text-[#5a4d68]">{item.note}</p>
              </div>
              <span className="rounded-full bg-coral/10 px-3 py-1 font-display text-xs font-bold text-coral">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 食水果嘅學問 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">💡</span> 食水果嘅學問
        </h2>
        <div className="mt-6 space-y-3">
          {[
            { emoji: "🍎", title: "原個食好過榨汁", body: "榨汁會流失纖維，糖份太集中——原個水果先係最好" },
            { emoji: "🍬", title: "當小食/甜品", body: "用水果代替餅乾糖果——天然糖份加纖維" },
            { emoji: "🧊", title: "凍食更吸引", body: "雪凍嘅提子、西瓜——夏天消暑又健康" },
            { emoji: "🍇", title: "果乾留意糖份", body: "提子乾、西梅乾——濃縮糖份高，適量就OK" },
            { emoji: "🌱", title: "有機vs非有機", body: "預算有限嘅話，非有機都得——有食好過冇食" },
          ].map((tip) => (
            <div
              key={tip.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <span className="text-3xl">{tip.emoji}</span>
              <div>
                <p className="font-display font-extrabold text-[#3f3550]">{tip.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#5a4d68]">{tip.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          每日1–2份水果——原個食、當小食、揀時令——滿足維他命C需要最簡單。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
