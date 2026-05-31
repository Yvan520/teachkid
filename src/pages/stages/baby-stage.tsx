import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function BabyStage() {
  return (
    <PhilosophyLayout
      meta={{
        title: "0–3 歲感官萌芽期 — 湊B實戰指南",
        desc: "0–3歲BB嘅發展里程碑、適合嘅遊戲、注意事項。由睡眠到五感刺激，香港媽媽最需要嘅初生至學步期湊B攻略。",
        slug: "baby-stage",
      }}
    >
      <h1>🍼 0–3 歲感官萌芽期</h1>
      <p className="lead">
        呢個階段係BB發展最快嘅時期——由躺喺度到行得走得，由喊到講到單字句子。
        作為家長，你嘅角色係<strong>安全基地</strong>同<strong>感官導遊</strong>。
      </p>

      {/* 里程碑 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#ffe5d9]/40 to-[#ffd6e8]/40 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🥇</span> 發展里程碑
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              age: "0–6 個月",
              items: ["抬頭轉身扶坐", "捉握搖鈴", "對聲音有反應", "對人笑、認得媽媽"],
              color: "from-[#ff8a7a]/10 to-[#ff8a7a]/5",
              border: "border-l-[#ff8a7a]",
            },
            {
              age: "6–12 個月",
              items: ["坐穩、爬行、扶站", "拇指食指捏細物", "理解簡單指令", "分離焦慮出現"],
              color: "from-[#ffb07a]/10 to-[#ffb07a]/5",
              border: "border-l-[#ffb07a]",
            },
            {
              age: "1–2 歲",
              items: ["自己行、扶住上樓梯", "亂畫、疊積木", "10–50 個詞彙", "平行玩（各自玩）"],
              color: "from-[#ffd07a]/10 to-[#ffd07a]/5",
              border: "border-l-[#ffd07a]",
            },
            {
              age: "2–3 歲",
              items: ["跑、跳、踩三輪車", "用匙羹、打開容器", "講短句、問「點解」", "開始有分享概念"],
              color: "from-[#7ad4a0]/10 to-[#7ad4a0]/5",
              border: "border-l-[#7ad4a0]",
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
                    <span className="mt-0.5 text-[#ff8a7a]">✦</span>
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
              icon: "🖐️",
              title: "觸感刺激",
              items: ["唔同質感布書、觸感波", "感官袋（入面裝米/沙/水）", "冰塊溫度刺激（大人睇住）"],
            },
            {
              icon: "🏃",
              title: "大肌肉發展",
              items: ["Tummy Time 每日幾分鐘", "Cushion障礙賽爬行路線", "公園滑梯韆鞦——免費健身室"],
            },
            {
              icon: "🗣️",
              title: "語言刺激",
              items: ["換片沖涼時描述你做緊嘅嘢", "睇繪本——指住圖畫講", "唱廣東話童謠（月光光）"],
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
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 學咩 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-mint/10 to-sky/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📚</span> 呢個階段「學」緊咩？
        </h2>
        <p className="mt-3 text-[#5a4d68]">
          0–3 歲嘅「學習」唔係認字計數，而係透過日常生活建立：
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            { emoji: "🤗", title: "安全感與信任", desc: "你回應佢嘅喊聲，就係教緊佢「世界係安全嘅」" },
            { emoji: "🎵", title: "語言種子", desc: "聽兒歌、睇繪本、同佢講嘢——語言嘅根就係咁種落" },
            { emoji: "😊", title: "情緒認知", desc: "幫佢講出名稱「你喊因為肚餓」，慢慢佢就識表達" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/80 p-5 text-center backdrop-blur">
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="mt-2 font-display text-base font-extrabold text-[#3f3550]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#5a4d68]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 留意咩 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">💡</span> 留意咩？（香港媽媽必睇）
        </h2>
        <div className="mt-6 space-y-3">
          {[
            { emoji: "😴", title: "夠瞓係金", body: "0–1歲每日12–16小時，1–2歲11–14小時——睡眠直接影響大腦發育" },
            { emoji: "📺", title: "螢幕時間", body: "WHO建議1歲以下零螢幕，2歲以下盡量避免——呢個係硬指標" },
            { emoji: "🏥", title: "健康院檢查", body: "衞生署母嬰健康院免費生長監測同疫苗接種，記得跟時間表" },
            { emoji: "🤱", title: "安全感建立", body: "佢喊你回應，唔會縱壞佢——安全依附關係係一切嘅基礎" },
            { emoji: "📏", title: "唔好同人比較", body: "每個BB發展速度唔同，13個月先行唔代表有問題" },
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
          0–3 歲最緊要嘅三樣嘢：<strong>安全感、感官刺激、足夠睡眠。</strong>
          香港生活節奏快，但BB需要嘅好簡單——你嘅陪伴同關注就係最好嘅教育。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
