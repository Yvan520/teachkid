import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function JuniorStage() {
  return (
    <PhilosophyLayout
      meta={{
        title: "6–10 歲能力建構期 — 小學階段實戰指南",
        desc: "6–10歲小朋友嘅發展重點、團隊運動同興趣培養、學習習慣建立。香港小學生家長必睇——成績以外嘅成長指南。",
        slug: "junior-stage",
      }}
    >
      <h1>🚀 6–10 歲能力建構期</h1>
      <p className="lead">
        小學階段係小朋友從「遊戲中學習」過渡到「系統性學習」嘅關鍵期。
        佢哋嘅邏輯思維開始發展，可以理解規則、策略同抽象概念。
      </p>

      {/* 里程碑 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#e6e0ff]/40 to-[#ffeccf]/40 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🥇</span> 發展里程碑
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              age: "6–7 歲", color: "from-[#b8a4f0]/10 to-[#b8a4f0]/5", border: "border-l-[#b8a4f0]",
              items: ["跳繩、拋接球——平衡力大提升", "寫字更流暢、畫畫更精細", "開始明守恆概念、懂簡單加減", "友誼變重要、有 best friend"],
            },
            {
              age: "7–9 歲", color: "from-[#8b6fe0]/10 to-[#8b6fe0]/5", border: "border-l-[#8b6fe0]",
              items: ["懂因果關係、分類排序", "理解複雜情緒（尷尬、內疚）", "團隊合作、懂規則、會競爭", "朋輩影響力大增"],
            },
            {
              age: "9–10 歲", color: "from-[#6b4fc0]/10 to-[#6b4fc0]/5", border: "border-l-[#6b4fc0]",
              items: ["初步推理同計劃能力", "有自己嘅意見同立場", "發展正義感、公平概念", "可以簡單抽象思考"],
            },
          ].map((col) => (
            <div
              key={col.age}
              className={`rounded-2xl bg-gradient-to-br ${col.color} p-5 shadow-sm ${col.border} border-l-4`}
            >
              <p className="font-display text-lg font-extrabold text-[#3f3550]">{col.age}</p>
              <ul className="mt-3 space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5a4d68]">
                    <span className="mt-0.5 text-[#b8a4f0]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 玩咩 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🧸</span> 玩咩好？
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: "⚽", title: "團隊運動",
              items: ["足球籃球排球——學合作同策略", "游泳——康文署體育班全日制半價", "跑步田徑——培養耐力同目標感"],
            },
            {
              icon: "♟️", title: "策略遊戲",
              items: ["棋類——象棋、飛行棋、大富翁", "卡牌——UNO、橋牌", "棋類遊戲——要計劃同預測先贏到"],
            },
            {
              icon: "🔬", title: "創意活動",
              items: ["科學實驗套裝——滿足好奇心", "LEGO Technic——工程思維", "畫畫陶藝音樂——揀一樣真心鍾意嘅"],
            },
          ].map((col) => (
            <div
              key={col.title}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl">{col.icon}</span>
              <h3 className="mt-2 font-display text-lg font-extrabold text-[#3f3550]">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5a4d68]">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8a4f0]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 學習習慣 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-grape/10 to-mint/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📚</span> 學習習慣建立
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {[
            {
              emoji: "📖", title: "閱讀習慣",
              items: ["每日閱讀20分鐘——比補習更有效", "唔好限制題材——漫畫小說科普都得", "圖書館免費借書，兩星期去一次"],
            },
            {
              emoji: "⏱️", title: "時間管理",
              items: ["視覺化時間表——做完貼一個剔", "固定做功課時間——放學先抖30分鐘", "用計時器：「我哋睇20分鐘做到幾多」"],
            },
            {
              emoji: "🧠", title: "自主學習",
              items: ["唔好即刻俾答案——「你覺得可以點搵？」", "鼓勵佢自己規劃——星期六想學咩玩咩", "考試唔理想——一齊睇錯咩而唔係鬧"],
            },
          ].map((col) => (
            <div
              key={col.title}
              className="rounded-2xl bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <span className="text-3xl">{col.emoji}</span>
              <h3 className="mt-2 font-display text-lg font-extrabold text-[#3f3550]">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5a4d68]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 留意咩 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">💡</span> 留意咩？（香港家長必睇）
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🏆", title: "成績以外更重要", body: "自信、抗逆力、社交能力——呢啲比分數更影響人生" },
            { emoji: "💭", title: "鼓勵發問", body: "唔係要標準答案，而係思考過程——「你點樣諗到㗎？」" },
            { emoji: "🫳", title: "適度放手", body: "等佢自己執書包、記住帶功課——佢會學到責任" },
            { emoji: "🎯", title: "興趣班適量", body: "每星期2–3樣就夠，留時間俾佢發夢同放空" },
            { emoji: "🌞", title: "戶外時間", body: "每日至少1小時——放電對專注力有好大幫助" },
            { emoji: "🏛️", title: "善用政府資源", body: "康文署運動班、圖書館活動、博物館免費日" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <span className="text-3xl">{item.emoji}</span>
              <div>
                <p className="font-display font-extrabold text-[#3f3550]">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#5a4d68]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-grape/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          6–10 歲最關鍵嘅唔係成績，而係<strong>保護學習動機、建立良好習慣、發展社交能力</strong>。
          香港教育壓力大，但家長可以做嘅係——做佢嘅避風港，唔係第二個壓力來源。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
