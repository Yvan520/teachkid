import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function KidStage() {
  return (
    <PhilosophyLayout
      meta={{
        title: "3–6 歲想像力爆發期 — 幼稚園階段實戰指南",
        desc: "3–6歲小朋友嘅發展重點、適合嘅遊戲同學習活動、香港幼稚園階段注意事項。角色扮演、親子共讀、社交規則。",
        slug: "kid-stage",
      }}
    >
      <h1>🎨 3–6 歲想像力爆發期</h1>
      <p className="lead">
        呢個階段嘅小朋友開始有豐富嘅想像力，角色扮演、畫畫、講故事——
        佢哋嘅大腦正以驚人速度發展，每日都有新嘢學。
      </p>

      {/* 里程碑 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#e9f7d9]/40 to-[#d9f0ff]/40 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🥇</span> 發展里程碑
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              age: "3–4 歲",
              items: ["單腳企、上落樓梯交替腳", "用剪刀、畫圓形", "講完整句子、問大量點解", "開始有 friend 概念"],
              color: "from-[#95e1c8]/10 to-[#95e1c8]/5",
              border: "border-l-[#95e1c8]",
            },
            {
              age: "4–5 歲",
              items: ["跳遠、接波、單腳跳", "寫簡單字、畫人樣", "講故仔、用連接詞", "合作玩、有規則意識"],
              color: "from-[#7ad4a0]/10 to-[#7ad4a0]/5",
              border: "border-l-[#7ad4a0]",
            },
            {
              age: "5–6 歲",
              items: ["跳繩、踩兩輪單車", "寫自己個名、畫詳細圖", "講抽象概念（聽日/尋日）", "理解輸贏、會安慰人"],
              color: "from-[#5bc0be]/10 to-[#5bc0be]/5",
              border: "border-l-[#5bc0be]",
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
                    <span className="mt-0.5 text-[#95e1c8]">✦</span>
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
              icon: "🎭", title: "角色扮演",
              items: ["煮飯仔、醫生遊戲——模擬真實生活", "服裝道具用舊衫帽袋就得", "對社交理解同語言發展極有幫助"],
            },
            {
              icon: "🧱", title: "建構遊戲",
              items: ["LEGO DUPLO、磁力片——發展空間感", "泥膠黏土——小肌肉訓練", "拼圖由12塊到48塊逐步加難度"],
            },
            {
              icon: "🌳", title: "戶外活動",
              items: ["公園跑跳攀爬——大量大肌肉活動", "踩單車/三輪車——平衡感訓練", "沙灘玩沙——最好嘅感官遊戲，免費"],
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
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#95e1c8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 學咩 — 卡片 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sun/10 to-peach/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📚</span> 學咩好？
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {[
            {
              emoji: "📖", title: "親子共讀",
              items: ["每日15分鐘——比任何興趣班有效", "互動式閱讀：問「你見到咩？」", "圖書館免費借書，每張證可借8本"],
            },
            {
              emoji: "🔢", title: "數學概念",
              items: ["用實物教：數蘋果、分糖", "形狀顏色：喺生活入面指認", "比較概念：大細、長短、多少"],
            },
            {
              emoji: "👕", title: "自理能力",
              items: ["自己著衫除衫拉拉鏈", "自己用筷子食飯——唔好怕污糟", "收拾玩具——用圖示標記"],
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
          <span className="text-2xl">💡</span> 留意咩？
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "❓", title: "保護好奇心", body: "佢問「點解」時反問「你覺得呢？」——唔好話「冇咁多點解」" },
            { emoji: "🫗", title: "容許犯錯", body: "倒瀉水、整污糟——呢啲係學習過程，唔係曳" },
            { emoji: "⏰", title: "規律作息", body: "定時食飯、瞓覺、玩——建立安全感" },
            { emoji: "🎯", title: "少啲興趣班", body: "呢個年紀最需要自由遊戲時間，唔係趕住學嘢" },
            { emoji: "📝", title: "考小前注意", body: "唔好因為K2/K3要考小學就開始谷——長遠反而有害" },
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

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-mint/10 to-sky/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          3–6 歲最重要嘅係<strong>玩</strong>——角色扮演、建構、户外跑跳就係最好嘅學習。
          唔好急住俾佢寫字計數，俾多啲時間同空間佢做夢。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
