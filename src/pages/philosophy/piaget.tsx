import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function Piaget() {
  return (
    <PhilosophyLayout
      meta={{
        title: "皮亞傑認知發展理論 — 小朋友唔係細碼大人",
        desc: "皮亞傑認知發展四階段：感官動作期、前運思期、具體運思期、形式運思期。香港家長實戰應用指南。",
        slug: "piaget",
      }}
    >
      <h1>🪜 皮亞傑認知發展理論</h1>
      <p className="lead">
        讓·皮亞傑（Jean Piaget）係瑞士心理學家，佢發現小朋友嘅思維方式唔係「大人諗少咗嘢」，
        而係<strong>完全唔同層次嘅思考結構</strong>。佢嘅理論改變咗全世界對兒童認知嘅理解。
      </p>

      {/* 四大階段 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🪜</span> 四大認知發展階段
        </h2>
        <div className="mt-6 space-y-5">
          {[
            {
              age: "0–2 歲", title: "感官動作期",
              emoji: "👶",
              desc: "BB用感官同動作認識世界——睇、聽、摸、放入口、掉落地。最重要嘅里程碑係「物體恆存」",
              color: "from-[#ffe5d9]/40 to-[#ffd6e8]/40",
              border: "border-l-[#ff8a7a]",
              tips: {
                play: "躲貓貓、搖鈴、布書、觸感玩具",
                parent: "同佢玩「唔見咗又出現」嘅遊戲",
                avoid: "唔好因為佢掉嘢就話佢曳——佢係喺度做實驗",
              },
            },
            {
              age: "2–7 歲", title: "前運思期",
              emoji: "🎭",
              desc: "小朋友開始用符號思考——語言、模仿、角色扮演。但仲未懂「可逆性」（知道 2+3=5 但唔明 5-3=2）",
              color: "from-[#e9f7d9]/40 to-[#d9f0ff]/40",
              border: "border-l-[#95e1c8]",
              tips: {
                play: "煮飯仔、角色扮演、畫畫、泥膠",
                parent: "佢話「我有咁高」時，唔好急住拆穿——自我中心係正常",
                avoid: "催谷寫字/計數通常適得其反",
              },
            },
            {
              age: "7–11 歲", title: "具體運思期",
              emoji: "🧩",
              desc: "小朋友開始有邏輯思維，但需要具體事物支持。佢哋明「可逆性」同「守恆概念」",
              color: "from-[#e6e0ff]/40 to-[#ffeccf]/40",
              border: "border-l-[#b8a4f0]",
              tips: {
                play: "棋類、科學實驗、策略遊戲、LEGO",
                parent: "解釋用具體例子——「慳錢」不如「買少一樣玩具可以買本書」",
                avoid: "呢個階段適合奧數/公文式，因為邏輯腦開始發展",
              },
            },
            {
              age: "11 歲+", title: "形式運思期",
              emoji: "🧠",
              desc: "青少年開始可以抽象思考——推理假設情境、思考未來、質疑權威。同教育環境好有關係",
              color: "from-[#f0e0ff]/40 to-[#ffd6e8]/40",
              border: "border-l-[#c084fc]",
              tips: {
                play: "辯論、編程、哲學討論",
                parent: "鼓勵佢質疑，唔好因為駁嘴就罰",
                avoid: "思考能力緊要過服從",
              },
            },
          ].map((stage) => (
            <div
              key={stage.age}
              className={`rounded-3xl bg-gradient-to-br ${stage.color} p-6 shadow-sm ring-1 ring-black/5 ${stage.border} border-l-4`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{stage.emoji}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-display text-xl font-extrabold text-[#3f3550]">{stage.title}</h3>
                    <span className="rounded-full bg-white/70 px-3 py-0.5 font-display text-sm font-bold text-coral">
                      {stage.age}
                    </span>
                  </div>
                  <p className="mt-2 text-[#5a4d68]">{stage.desc}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/70 p-3 backdrop-blur">
                      <p className="font-display text-xs font-bold text-green-600">🧸 玩咩好</p>
                      <p className="mt-1 text-sm text-[#5a4d68]">{stage.tips.play}</p>
                    </div>
                    <div className="rounded-2xl bg-white/70 p-3 backdrop-blur">
                      <p className="font-display text-xs font-bold text-[#b8a4f0]">💡 家長貼士</p>
                      <p className="mt-1 text-sm text-[#5a4d68]">{stage.tips.parent}</p>
                    </div>
                    <div className="rounded-2xl bg-white/70 p-3 backdrop-blur">
                      <p className="font-display text-xs font-bold text-red-500">⚠️ 唔好做</p>
                      <p className="mt-1 text-sm text-[#5a4d68]">{stage.tips.avoid}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 香港家長啟示 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sun/10 to-peach/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">💡</span> 對香港家長嘅啟示
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {[
            {
              emoji: "🛑", title: "唔好越級打怪",
              body: "前運思期迫小朋友做具體運思期嘅嘢——背乘數表、寫複雜字——認知發展有時間表，急唔嚟",
            },
            {
              emoji: "🎯", title: "經驗先於教學",
              body: "同一個4歲講一百萬同十分別，不如俾佢數10粒糖再睇一大包——親身經驗先係最好嘅老師",
            },
            {
              emoji: "❓", title: "多問點解",
              body: "認知衝突——等佢發現自己嘅諗法有矛盾——自然會調整思考方式",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/80 p-5 text-center backdrop-blur shadow-sm"
            >
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="mt-2 font-display text-lg font-extrabold text-[#3f3550]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#5a4d68]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sun/10 to-peach/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          皮亞傑最值錢嘅觀念：<strong>小朋友唔係大人嘅迷你版，佢哋用完全唔同嘅方式諗嘢。</strong>
          與其催谷佢學大人嘅思考方式，不如俾時間佢行完每個階段。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
