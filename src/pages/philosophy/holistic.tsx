import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function Holistic() {
  return (
    <PhilosophyLayout
      meta={{
        title: "全面發展教育 — 五育並重，唔止讀書",
        desc: "德智體群美五育並重：點樣培養一個健康、自信、識生活又識學習嘅小朋友？香港家長實戰指南。",
        slug: "holistic",
      }}
    >
      <h1>🌈 全面發展教育（五育並重）</h1>
      <p className="lead">
        香港教育成日被批評「太側重學術」。全面發展教育嘅理念係：
        <strong>一個小朋友嘅成長，唔止係成績表上嘅分數</strong>。
        德、智、體、群、美五育並進，先係真正嘅教育。
      </p>

      {/* 五育 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🎯</span> 五育解說
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              emoji: "🫂", title: "德——品德教育",
              items: ["做錯事同佢道歉——學誠實", "俾佢負責家務——擺碗筷、餵魚、淋花", "問「你覺得佢咩感受？」——同理心訓練", "搭巴士讓座、同姐姐講唔該——生活實踐"],
              color: "from-[#95e1c8]/20 to-[#95e1c8]/5",
            },
            {
              emoji: "🧠", title: "智——智育發展",
              items: ["每日親子共讀15分鐘——好過閱讀理解班", "鼓勵問「點解」——唔好話「唔好問咁多」", "遇到問題先問「你覺得可以點做？」", "3歲好鍾意睇書真係贏在起跑線"],
              color: "from-sky/20 to-sky/5",
            },
            {
              emoji: "🏃", title: "體——體育運動",
              items: ["每日戶外至少1小時——跑跳攀爬", "踩單車、游水、跳繩——對寫字有幫助", "泥膠、剪紙、穿珠——小肌肉訓練", "康文署體育班全日制半價、公園免費"],
              color: "from-[#ffb07a]/20 to-[#ffb07a]/5",
            },
            {
              emoji: "👥", title: "群——群育社交",
              items: ["一齊玩 board game——學輸贏同合作", "同朋友爭玩具——等佢試自己解決", "參加童軍/體育隊/合唱團——團隊歸屬感", "香港要刻意約 playdate——少鄰居小朋友"],
              color: "from-[#b8a4f0]/20 to-[#b8a4f0]/5",
            },
            {
              emoji: "🎨", title: "美——美感教育",
              items: ["去博物館（逢周三免費）- 睇畫展", "唔一定要學樂器——聽歌唱歌已經好好", "沙灘、行山、公園——大自然係最好嘅美學教室", "一齊布置屋企——美學即係生活"],
              color: "from-[#ffd07a]/20 to-[#ffd07a]/5",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl bg-gradient-to-br ${item.color} p-5 shadow-sm`}
            >
              <span className="text-3xl">{item.emoji}</span>
              <h3 className="mt-2 font-display text-lg font-extrabold text-[#3f3550]">{item.title}</h3>
              <ul className="mt-4 space-y-2 border-t border-white/60 pt-4">
                {item.items.map((li) => (
                  <li key={li} className="flex items-start gap-2 text-sm text-[#5a4d68]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 時間分配 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-grape/10 to-mint/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">⏱️</span> 香港家長五育分配建議（4–6歲）
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { emoji: "🎮", title: "自由遊戲", detail: "每日 2 小時", tag: "群+體+智", color: "bg-[#95e1c8]/20" },
            { emoji: "📖", title: "閱讀", detail: "每日 15–30 分鐘", tag: "智+德", color: "bg-sky/20" },
            { emoji: "🧹", title: "家務", detail: "每日 10 分鐘", tag: "德+群", color: "bg-[#ffb07a]/20" },
            { emoji: "🎵", title: "藝術/音樂", detail: "每週 2–3 次", tag: "美", color: "bg-[#b8a4f0]/20" },
            { emoji: "🏫", title: "興趣班", detail: "每週 1–2 堂", tag: "夠晒數", color: "bg-[#ffd07a]/20" },
          ].map((item) => (
            <div key={item.title} className={`rounded-2xl ${item.color} p-5 text-center shadow-sm`}>
              <span className="text-4xl">{item.emoji}</span>
              <p className="mt-2 font-display text-lg font-extrabold text-[#3f3550]">{item.title}</p>
              <p className="mt-1 font-display text-lg font-bold text-coral">{item.detail}</p>
              <span className="mt-2 inline-block rounded-full bg-white/60 px-3 py-0.5 font-display text-xs font-bold text-[#5a4d68]">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 香港常見問題 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">❓</span> 香港常見問題
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              q: "學術唔夠人哋叻點算？",
              a: "小學嘅學術差距半年就追上，但自信同興趣追唔返",
            },
            {
              q: "佢淨係想玩唔想做功課",
              a: "玩就係幼兒嘅學習方式，唔好分開佢哋",
            },
            {
              q: "人哋個仔學緊四樣嘢，我個仔學兩樣係咪輸咗？",
              a: "比較係痛苦嘅根源。每個小朋友唔同",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <p className="font-display font-bold text-[#3f3550]">❓ {faq.q}</p>
              <p className="mt-2 text-sm text-[#5a4d68]">💬 {faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-grape/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          全面發展最值錢嘅觀念：<strong>你唔需要一個「完美」嘅小朋友，你需要一個「完整」嘅小朋友。</strong>
          成績只係人生嘅一部份，品德、健康、社交、審美——呢啲先係陪佢行一世嘅嘢。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
