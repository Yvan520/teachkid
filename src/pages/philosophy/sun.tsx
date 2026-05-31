import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function Sun() {
  return (
    <PhilosophyLayout
      meta={{
        title: "孫瑞雪「愛與自由」教育理念",
        desc: "孫瑞雪「愛與自由、規則與平等」教育理念。有規則嘅自由、有界限嘅愛——喺香港呢個高壓社會點樣俾到小朋友安全感同自信。",
        slug: "sun",
      }}
    >
      <h1>💞 孫瑞雪「愛與自由」教育理念</h1>
      <p className="lead">
        孫瑞雪係中國著名幼兒教育家，佢創立嘅「愛與自由、規則與平等」教育理念，
        影響咗中國大陸同香港好多家長。佢嘅核心思想係：
        <strong>俾足安全感，小朋友先敢做自己</strong>。
      </p>

      {/* 四大核心原則 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🎯</span> 四大核心原則
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {[
            {
              emoji: "💖", title: "愛",
              desc: "無條件接納——無論佢乖唔乖、考第幾、有冇獎，你都愛佢",
              items: ["唔好用愛做條件——「再唔聽話媽媽唔要你」殺傷力超大", "每日高質素陪伴——15分鐘專心玩，唔睇電話", "接納負面情緒——唔係話「唔准喊」，而係「我知道你好唔開心」"],
              color: "from-coral/20 to-sun/20",
            },
            {
              emoji: "🕊️", title: "自由",
              desc: "喺安全範圍內自主選擇——有限選擇，唔係冇限制",
              items: ["有限選擇：「紅色定藍色？」——唔係「你想著咩？」", "自由不等於放任——唔可以傷害人/自己/環境", "香港最難做到：節奏快，好難俾佢慢慢揀"],
              color: "from-sky/20 to-mint/20",
            },
            {
              emoji: "📏", title: "規則",
              desc: "規則係自由嘅基礎——冇規則嘅自由只係混亂",
              items: ["唔可以傷害別人", "唔可以傷害自己", "唔可以破壞環境", "邊個先攞到邊個先用；之後要輪流"],
              color: "from-sun/20 to-peach/20",
            },
            {
              emoji: "🤝", title: "平等",
              desc: "大人同小朋友係平等嘅——互相尊重，唔係「我大過你所以你聽我講」",
              items: ["蹲低同佢講嘢——視線水平表示尊重", "道歉——你鬧錯咗要同佢講對唔住", "聆聽——佢嘅意見值得被聽見"],
              color: "from-grape/20 to-sky/20",
            },
          ].map((col) => (
            <div
              key={col.title}
              className={`rounded-2xl bg-gradient-to-br ${col.color} p-5 shadow-sm`}
            >
              <span className="text-3xl">{col.emoji}</span>
              <h3 className="mt-2 font-display text-xl font-extrabold text-[#3f3550]">{col.title}</h3>
              <p className="mt-1 text-sm text-[#5a4d68]">{col.desc}</p>
              <ul className="mt-4 space-y-2 border-t border-white/60 pt-4">
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

      {/* 實戰場景 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-coral/10 to-sun/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📋</span> 香港家長實戰手冊
        </h2>

        <h3 className="mt-6 font-display text-lg font-extrabold text-[#3f3550]">😤 扭計發脾氣時</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "先冷靜自己", desc: "你唔冷靜，就冇辦法俾到安全感佢" },
            { step: "2", title: "反映感受", desc: "「你好嬲因為唔可以繼續玩」——等佢覺得被明白" },
            { step: "3", title: "設定界限", desc: "「你可以嬲，但唔可以掉嘢。我喺度陪你。」" },
            { step: "4", title: "等佢平靜", desc: "喊完之後佢自然會嚟搵你——到時先傾" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/80 p-4 backdrop-blur">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-coral text-sm font-bold text-white">
                {item.step}
              </span>
              <p className="mt-2 font-display font-bold text-[#3f3550]">{item.title}</p>
              <p className="mt-1 text-sm text-[#5a4d68]">{item.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-8 font-display text-lg font-extrabold text-[#3f3550]">📱 電子產品管教</h3>
        <div className="mt-4 space-y-3">
          {[
            { emoji: "🚫", title: "唔好用電子產品做獎勵或威脅", body: "呢個會放大佢對電子產品嘅渴望" },
            { emoji: "⏰", title: "設定清晰規則", body: "每日30分鐘，計時器響就收" },
            { emoji: "🔄", title: "自由入面嘅規則", body: "你可以揀睇咩，但時間到就要停——唔停聽日冇得睇" },
          ].map((tip) => (
            <div
              key={tip.title}
              className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 backdrop-blur"
            >
              <span className="text-2xl">{tip.emoji}</span>
              <div>
                <p className="font-display font-bold text-[#3f3550]">{tip.title}</p>
                <p className="mt-1 text-sm text-[#5a4d68]">{tip.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-8 font-display text-lg font-extrabold text-[#3f3550]">🏃 香港生活節奏快，點樣實踐？</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { emoji: "⏰", title: "早起身15分鐘", desc: "等佢可以自己揀衫著鞋，唔使趕" },
            { emoji: "📅", title: "每星期留半日空白", desc: "唔排任何興趣班，俾佢自由發揮" },
            { emoji: "📵", title: "晚飯時收電話", desc: "15分鐘專心同佢講今日發生咩事" },
          ].map((tip) => (
            <div
              key={tip.title}
              className="rounded-2xl bg-white/80 p-5 text-center backdrop-blur"
            >
              <span className="text-4xl">{tip.emoji}</span>
              <h4 className="mt-2 font-display font-bold text-[#3f3550]">{tip.title}</h4>
              <p className="mt-1 text-sm text-[#5a4d68]">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-coral/10 to-sun/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          孫瑞雪最核心嘅訊息：<strong>有規則嘅自由，有界限嘅愛。</strong>
          喺香港呢個乜都要快嘅城市，慢落嚟俾小朋友感受「無論點你都愛我」——呢個就係最好嘅教育。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
