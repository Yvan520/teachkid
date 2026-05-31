import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function Reggio() {
  return (
    <PhilosophyLayout
      meta={{
        title: "瑞吉歐教育方案 — 小朋友有一百種語言",
        desc: "瑞吉歐教育法：環境係第三位老師、兒童一百種語言、項目式學習。香港瑞吉歐學校選擇同家居實踐指南。",
        slug: "reggio",
      }}
    >
      <h1>🎨 瑞吉歐教育方案</h1>
      <p className="lead">
        瑞吉歐（Reggio Emilia）唔係一個人名，而係意大利北部一個城市。
        第二次世界大戰之後，當地家長用賣咗軍車嘅錢起學校，逐漸發展出一套以<strong>兒童為中心</strong>、
        <strong>項目為基礎</strong>嘅教育哲學。被《新聞周刊》評為「全球最好嘅學前教育」。
      </p>

      {/* 三大核心理念 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🎯</span> 三大核心理念
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {[
            {
              emoji: "👅", title: "一百種語言",
              desc: "小朋友表達自己嘅方式唔止語言——畫畫、唱歌、跳舞、搭建、泥膠、光影……每一種都係語言",
              items: ["唔好局限佢：畫畫同說話一樣重要", "提供多元材料——水彩、粉筆、黏土、樹枝", "記錄佢嘅作品——等佢知道表達有價值"],
              color: "from-peach/20 to-peach/5",
            },
            {
              emoji: "🏛️", title: "環境係第三位老師",
              desc: "老師係第一位，家長係第二位，環境就係第三位老師——設計、光線、顏色都影響學習",
              items: ["靚嘅環境：自然光、植物、真實藝術品", "透明空間：等小朋友睇到其他區域", "展示作品：掛喺佢嘅視線水平"],
              color: "from-sky/20 to-sky/5",
            },
            {
              emoji: "🔍", title: "項目式學習",
              desc: "冇固定課程，由小朋友嘅興趣出發進行深入項目研究——一個主題玩幾星期",
              items: ["跟住佢嘅興趣：鍾意恐龍就一齊探索", "深入唔係廣：好過一日轉十個題目", "過程重於結果：重點係探索過程"],
              color: "from-mint/20 to-mint/5",
            },
          ].map((col) => (
            <div
              key={col.title}
              className={`rounded-2xl bg-gradient-to-br ${col.color} p-5 shadow-sm`}
            >
              <span className="text-3xl">{col.emoji}</span>
              <h3 className="mt-2 font-display text-lg font-extrabold text-[#3f3550]">{col.title}</h3>
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

      {/* 比較表 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-peach/10 to-grape/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">⚖️</span> 瑞吉歐 vs 蒙特梭利
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {[
            {
              name: "蒙特梭利",
              items: ["結構性教具，小朋友自主操作", "老師係觀察者", "適合鍾意獨立工作、重複練習嘅小朋友"],
              color: "bg-mint/10",
              border: "border-mint",
            },
            {
              name: "瑞吉歐",
              items: ["冇固定教具，以項目為主", "老師係共同研究者", "適合鍾意合作探索、創作表達嘅小朋友"],
              color: "bg-peach/10",
              border: "border-peach",
            },
          ].map((sys) => (
            <div
              key={sys.name}
              className={`rounded-2xl ${sys.color} border-2 ${sys.border} p-5 shadow-sm`}
            >
              <p className="font-display text-lg font-extrabold text-[#3f3550]">{sys.name}</p>
              <ul className="mt-3 space-y-3">
                {sys.items.map((item) => (
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

      {/* 香港學校 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🏫</span> 香港有瑞吉歐學校嗎？
        </h2>
        <div className="mt-6 space-y-3">
          {[
            { emoji: "🔍", title: "純瑞吉歐幼稚園", body: "暫時冇官方認證嘅純瑞吉歐學校" },
            { emoji: "🏛️", title: "瑞吉歐-inspired 學校", body: "好多國際學校同私立幼稚園採用瑞吉歐元素" },
            { emoji: "🏠", title: "替代方案", body: "喺屋企實踐瑞吉歐原則——提供多元藝術材料、跟住小朋友興趣做項目" },
          ].map((info) => (
            <div
              key={info.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <span className="text-3xl">{info.emoji}</span>
              <div>
                <p className="font-display font-extrabold text-[#3f3550]">{info.title}</p>
                <p className="mt-1 text-sm text-[#5a4d68]">{info.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 家居實踐 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-peach/10 to-grape/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🏠</span> 香港家居實踐指南
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🎨", title: "創作角落", desc: "矮櫃放畫紙、水彩、膠水、安全剪刀——佢自己攞到" },
            { emoji: "🖼️", title: "作品牆", desc: "客廳整一面「畫廊」，定期更換佢嘅作品" },
            { emoji: "🔦", title: "光影探索", desc: "用電筒同玩具玩影子遊戲" },
            { emoji: "🌿", title: "自然蒐集", desc: "去公園執樹葉、石仔、花朵，返嚟分類同創作" },
            { emoji: "📸", title: "項目日誌", desc: "影相記錄探索過程，同佢一齊回顧" },
          ].map((tip) => (
            <div
              key={tip.title}
              className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 backdrop-blur"
            >
              <span className="text-3xl">{tip.emoji}</span>
              <div>
                <p className="font-display font-extrabold text-[#3f3550]">{tip.title}</p>
                <p className="mt-1 text-sm text-[#5a4d68]">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-peach/10 to-grape/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          瑞吉歐最動人嘅觀念：<strong>小朋友唔係一個要裝滿嘅杯，而係一把要點燃嘅火。</strong>
          佢哋有一百種語言，我哋嘅責任係提供一百種聆聽嘅方式。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
