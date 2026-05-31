import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function MilkCalcium() {
  return (
    <PhilosophyLayout
      meta={{
        title: "奶製品 & 鈣質 — 骨骼發育最強營養",
        desc: "鈣質對小朋友骨骼同牙齒發育嘅重要性、每日需要量、高鈣食物清單。香港常見食物鈣含量一覽。",
        slug: "milk-calcium",
      }}
    >
      <h1>🥛 奶製品 & 鈣質</h1>
      <p className="lead">
        鈣質係小朋友骨骼同牙齒發育嘅關鍵營養素。
        香港衛生署建議 1–9 歲每日需要 500–800mg 鈣質，足夠嘅鈣質攝取直接影響最終身高。
      </p>

      {/* 每日需要量 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sky/10 to-mint/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📊</span> 每日鈣質需要量
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { age: "1–3 歲", mg: "500 mg", color: "bg-[#ffd07a]/20" },
            { age: "4–6 歲", mg: "600 mg", color: "bg-[#95e1c8]/20" },
            { age: "7–9 歲", mg: "800 mg", color: "bg-[#b8a4f0]/20" },
            { age: "10–18 歲", mg: "1000–1300 mg", color: "bg-coral/10" },
          ].map((item) => (
            <div
              key={item.age}
              className={`rounded-2xl ${item.color} p-5 text-center shadow-sm`}
            >
              <p className="font-display text-lg font-extrabold text-[#3f3550]">{item.age}</p>
              <p className="mt-1 font-display text-2xl font-bold text-coral">{item.mg}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 高鈣食物排行榜 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🥇</span> 高鈣食物排行榜
        </h2>
        <div className="mt-6 space-y-3">
          {[
            { rank: "1", emoji: "🥛", name: "牛奶/配方奶", detail: "1 杯（240ml）≈ 300mg 鈣——最簡單直接嘅來源" },
            { rank: "2", emoji: "🧀", name: "芝士", detail: "1 片芝士 ≈ 200mg 鈣——小朋友普遍鍾意" },
            { rank: "3", emoji: "🫘", name: "板豆腐", detail: "半磚 ≈ 300mg 鈣（要用石膏做嗰種先高鈣）" },
            { rank: "4", emoji: "🥬", name: "深綠色蔬菜", detail: "西蘭花、白菜仔、芥蘭——1碗煮菜約 100mg 鈣" },
            { rank: "5", emoji: "🐟", name: "連骨食嘅魚", detail: "沙甸魚、銀魚仔、白飯魚——鈣質喺魚骨入面" },
            { rank: "6", emoji: "🥜", name: "芝麻/芝麻醬", detail: "1 湯匙芝麻醬 ≈ 130mg 鈣——搽麵包好好食" },
          ].map((food) => (
            <div
              key={food.name}
              className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky to-mint font-display text-sm font-extrabold text-white shadow">
                {food.rank}
              </span>
              <span className="text-3xl">{food.emoji}</span>
              <div>
                <p className="font-display font-extrabold text-[#3f3550]">{food.name}</p>
                <p className="text-sm text-[#5a4d68]">{food.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 一日餐單 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sky/10 to-mint/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span> 高鈣一日餐單建議
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { meal: "早餐", food: "1杯牛奶 + 芝士三文治" },
            { meal: "午餐", food: "西蘭花炒牛肉 + 飯" },
            { meal: "下午茶", food: "乳酪一杯" },
            { meal: "晚餐", food: "豆腐魚腩湯 + 炒白菜仔" },
          ].map((item) => (
            <div key={item.meal} className="rounded-2xl bg-white/80 p-4 text-center backdrop-blur">
              <p className="font-display text-sm font-bold text-coral">{item.meal}</p>
              <p className="mt-1 text-sm text-[#5a4d68]">{item.food}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 貼士 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">💡</span> 補充貼士
        </h2>
        <div className="mt-6 space-y-3">
          {[
            { emoji: "☀️", title: "維他命D助攻", body: "鈣要有維他命D先吸收得好——每日曬太陽15分鐘就夠" },
            { emoji: "🥤", title: "少飲汽水", body: "可樂/汽水令鈣流失——唔好俾小朋友當水飲" },
            { emoji: "🐟", title: "香港街市貼士", body: "$10銀魚仔煮湯粉麵——平靚正高鈣" },
            { emoji: "🥛", title: "奶類敏感", body: "乳糖不耐可以試乳酪、硬芝士、加鈣豆漿" },
            { emoji: "💊", title: "補充劑", body: "最好由食物攝取，唔夠先諗supplement，先問醫生" },
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
          每日 1–2 杯奶 + 深綠色菜 + 豆腐，配合曬太陽，就已經打好骨骼基礎。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
