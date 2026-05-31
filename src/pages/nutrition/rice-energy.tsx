import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function RiceEnergy() {
  return (
    <PhilosophyLayout
      meta={{
        title: "飯麵 & 能量 — 每日活動嘅燃料",
        desc: "碳水化合物係小朋友每日跑跳玩嘅主要能量來源。點樣選擇優質澱粉質、全穀物嘅好處、均衡餐盤建議。",
        slug: "rice-energy",
      }}
    >
      <h1>🍚 飯麵 & 能量</h1>
      <p className="lead">
        碳水化合物係小朋友身體同大腦最直接嘅燃料。
        活躍嘅小朋友每日需要足夠嘅優質澱粉質嚟支持佢哋嘅跑跳玩同學習。
      </p>

      {/* 點解重要 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sun/10 to-peach/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🤔</span> 點解碳水化合物咁重要？
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { emoji: "🧠", title: "大腦燃料", desc: "大腦主要用葡萄糖做能源——唔夠碳水會影響專注力" },
            { emoji: "🏃", title: "身體能量", desc: "跑跳玩一個下午就消耗好多——需要澱粉質補充" },
            { emoji: "💪", title: "肌肉儲備", desc: "碳水化合物可以儲存喺肌肉備用——後備能源庫" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/80 p-5 text-center backdrop-blur"
            >
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="mt-2 font-display text-base font-extrabold text-[#3f3550]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#5a4d68]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 優質 vs 要避免 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🥇</span> 優質碳水化合物來源
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold text-green-600">
              <span>✅</span> 推薦（升糖慢、營養高）
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { emoji: "🍚", text: "白飯/糙米飯——香港人主要主食，易消化" },
                { emoji: "🍞", text: "全麥麵包——比白麵包多纖維同維他命B" },
                { emoji: "🫘", text: "麥皮/燕麥——早餐之選，飽肚穩定血糖" },
                { emoji: "🍠", text: "蕃薯——高纖維維他命A，街市$5–8/磅" },
                { emoji: "🥔", text: "薯仔/南瓜——連皮食營養更高" },
                { emoji: "🍝", text: "意粉/烏冬——小朋友普遍鍾意食" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2 text-sm text-[#5a4d68]">
                  <span>{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold text-coral">
              <span>⚠️</span> 要留意
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { emoji: "🍞", text: "白麵包、白方包——營養價值低，偶爾食OK" },
                { emoji: "🍪", text: "蛋糕、曲奇、甜餅乾——糖多營養少" },
                { emoji: "🍜", text: "即食麵——高鈉冇營養，盡量避免" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2 text-sm text-[#5a4d68]">
                  <span>{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 均衡餐盤 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-mint/10 to-sky/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span> 均衡餐盤比例（3歲以上）
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {[
            { label: "蔬菜水果", pct: "½", color: "bg-green-200", text: "text-green-800" },
            { label: "碳水化合物", pct: "¼", color: "bg-yellow-200", text: "text-yellow-800" },
            { label: "蛋白質", pct: "¼", color: "bg-red-200", text: "text-red-800" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex h-28 w-28 flex-col items-center justify-center rounded-full ${item.color} ${item.text} shadow-sm`}
            >
              <span className="font-display text-3xl font-extrabold">{item.pct}</span>
              <span className="mt-1 text-center text-xs font-bold leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 貼士 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">💡</span> 香港實戰貼士
        </h2>
        <div className="mt-6 space-y-3">
          {[
            { emoji: "🌅", title: "早餐最緊要", body: "麥皮/多士/通粉——食飽先返學，專注力更好" },
            { emoji: "🍱", title: "帶飯慳錢", body: "前一晚煮多啲飯，留起做第二日lunch box" },
            { emoji: "🌾", title: "轉全穀物", body: "白飯溝少少紅米/糙米，逐步適應" },
            { emoji: "🍌", title: "健康小食", body: "香蕉、蕃薯、麥餅——比薯片餅乾健康" },
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
          每餐都要有優質澱粉質——飯/麵/薯仔——先夠能量跑跳玩學。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
