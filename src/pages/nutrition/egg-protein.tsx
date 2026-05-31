import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function EggProtein() {
  return (
    <PhilosophyLayout
      meta={{
        title: "雞蛋 & 蛋白質 — 肌肉生長必備",
        desc: "蛋白質對小朋友肌肉發育同細胞生長嘅重要性。每日蛋白質需要量、優質蛋白質來源、最慳錢嘅高蛋白食物。",
        slug: "egg-protein",
      }}
    >
      <h1>🥚 雞蛋 & 蛋白質</h1>
      <p className="lead">
        蛋白質係建造同修復身體組織嘅基本材料——肌肉、骨骼、皮膚、頭髮都需要蛋白質。
        對生長發育期嘅小朋友嚟講，每日充足嘅蛋白質攝取好重要。
      </p>

      {/* 每日需要量 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sun/10 to-peach/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📊</span> 每日蛋白質需要量
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { age: "1–3 歲", g: "20g", note: "≈ 3 隻蛋" },
            { age: "4–6 歲", g: "25g", note: "≈ 1 杯奶 + 1 份肉" },
            { age: "7–10 歲", g: "30g", note: "≈ 1 份魚 + 1 份豆腐" },
            { age: "青春期", g: "↑ 更多", note: "生長高𡶶需要量最高" },
          ].map((item) => (
            <div key={item.age} className="rounded-2xl bg-white/80 p-5 text-center backdrop-blur">
              <p className="font-display text-lg font-extrabold text-[#3f3550]">{item.age}</p>
              <p className="mt-1 font-display text-2xl font-bold text-coral">{item.g}</p>
              <p className="mt-1 text-xs text-[#8a7d98]">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 高蛋白食物 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🥇</span> 高蛋白食物營養資料
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🥚", name: "雞蛋", detail: "1 隻 ≈ 6–7g 蛋白質——最完美嘅蛋白質來源" },
            { emoji: "🥛", name: "牛奶", detail: "1 杯 ≈ 8g 蛋白質——鈣質蛋白質同步補充" },
            { emoji: "🐟", name: "魚肉", detail: "1 份（100g）≈ 20g 蛋白質" },
            { emoji: "🐔", name: "雞肉/豬肉", detail: "1 份 ≈ 20g 蛋白質" },
            { emoji: "🫘", name: "豆腐/豆類", detail: "半磚豆腐 ≈ 10g 蛋白質" },
            { emoji: "🥜", name: "堅果", detail: "每日適量——補充蛋白質同好脂肪" },
          ].map((food) => (
            <div
              key={food.name}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl">{food.emoji}</span>
              <div>
                <p className="font-display font-extrabold text-[#3f3550]">{food.name}</p>
                <p className="mt-1 text-sm text-[#5a4d68]">{food.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 慳錢攻略 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sun/10 to-peach/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">💰</span> 最慳錢嘅蛋白質來源
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🥚", name: "雞蛋", price: "$1.5–2/隻", note: "CP值最高" },
            { emoji: "🫘", name: "豆腐", price: "$5–8/磚", note: "街市買最平" },
            { emoji: "🥛", name: "豆漿", price: "$8–12/盒", note: "加鈣豆漿仲補鈣" },
            { emoji: "🐟", name: "急凍魚柳", price: "$20–30/塊", note: "比新鮮魚平好多" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-2xl bg-white/80 p-4 backdrop-blur"
            >
              <span className="text-3xl">{item.emoji}</span>
              <div className="flex-1">
                <p className="font-display font-extrabold text-[#3f3550]">{item.name}</p>
                <p className="text-sm text-[#5a4d68]">{item.price}</p>
              </div>
              <span className="rounded-full bg-coral/10 px-3 py-1 font-display text-xs font-bold text-coral">
                {item.note}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 餐單 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span> 簡單高蛋白餐單
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { meal: "🥣 早餐", food: "烚蛋1隻 + 牛奶1杯" },
            { meal: "🍝 午餐", food: "番茄炒蛋 + 飯" },
            { meal: "🫗 下午茶", food: "豆腐花（少甜）" },
            { meal: "🥩 晚餐", food: "蒸肉餅 + 炒菜" },
          ].map((item) => (
            <div key={item.meal} className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5">
              <p className="font-display text-sm font-bold text-coral">{item.meal}</p>
              <p className="mt-1 text-sm text-[#5a4d68]">{item.food}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          每日 1–2 個蛋 + 肉/魚/豆腐其中一樣 + 1 杯奶——已經滿足一日蛋白質需要。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
