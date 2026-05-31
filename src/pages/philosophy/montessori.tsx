import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function Montessori() {
  return (
    <PhilosophyLayout
      meta={{
        title: "蒙特梭利教育法 — 俾小朋友自己話事嘅學習環境",
        desc: "蒙特梭利教學法嘅核心概念：預備好嘅環境、敏感期、日常生活訓練。香港蒙特梭利學校選擇、家居應用指南。",
        slug: "montessori",
      }}
    >
      <h1>🌱 蒙特梭利教育法</h1>
      <p className="lead">
        蒙特梭利（Maria Montessori）係意大利第一位女醫生，佢透過觀察兒童嘅行為，
        發現小朋友有「吸收性心智」——佢哋會自然吸收環境入面嘅一切。
        呢套教學法已經有超過 100 年歷史，全球超過 60,000 間學校採用。
      </p>

      {/* 三大核心概念 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-mint/10 to-sky/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🎯</span> 三大核心概念
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {[
            {
              emoji: "🏠", title: "預備好嘅環境",
              desc: "矮枱矮凳、開放式櫃、適合小手嘅工具——等小朋友可以自主取用、自行操作、自己收拾",
              items: ["秩序感：教具得一份，用完放原位", "自由度：揀自己想做嘅工作", "真實感：用真玻璃杯、真刀、真水"],
              color: "from-mint/20 to-mint/5",
            },
            {
              emoji: "⏰", title: "敏感期",
              desc: "小朋友喺特定年齡段對某啲學習特別敏感——把握黃金期，學習事半功倍",
              items: ["0–3歲：語言敏感期、秩序敏感期", "2–4歲：細節敏感期", "3–6歲：感官、社交、書寫敏感期"],
              color: "from-sky/20 to-sky/5",
            },
            {
              emoji: "🍳", title: "日常生活訓練",
              desc: "倒水、摺毛巾、切香蕉、擦枱——唔係家務，係幫小朋友建立專注力同小肌肉",
              items: ["建立專注力同順序感", "發展小肌肉——寫字嘅基礎", "培養責任感同自信心"],
              color: "from-sun/20 to-sun/5",
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

      {/* 敏感期時間線 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📅</span> 敏感期時間線
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { age: "0–3 歲", periods: ["語言敏感期", "秩序敏感期"], color: "bg-[#ff8a7a]/10", dot: "bg-[#ff8a7a]" },
            { age: "2–4 歲", periods: ["細節敏感期", "動作協調期"], color: "bg-[#ffb07a]/10", dot: "bg-[#ffb07a]" },
            { age: "3–6 歲", periods: ["感官精煉期", "社交敏感期", "書寫敏感期"], color: "bg-[#95e1c8]/10", dot: "bg-[#95e1c8]" },
            { age: "4–6 歲", periods: ["數字敏感期", "音樂敏感期"], color: "bg-[#b8a4f0]/10", dot: "bg-[#b8a4f0]" },
          ].map((stage) => (
            <div key={stage.age} className={`rounded-2xl ${stage.color} p-5 shadow-sm`}>
              <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${stage.dot}`} />
                <p className="font-display text-lg font-extrabold text-[#3f3550]">{stage.age}</p>
              </div>
              <ul className="mt-3 space-y-2">
                {stage.periods.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-[#5a4d68]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3f3550]/30" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 家居應用 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-mint/10 to-sky/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🏠</span> 香港家長點樣應用蒙特梭利？
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {[
            {
              emoji: "🚪", title: "玄關改造",
              items: ["放一張矮凳，等佢自己坐低著鞋", "掛鉤喺佢高度——自己掛書包外套"],
            },
            {
              emoji: "📚", title: "閱讀角落",
              items: ["開放式矮書架，書封面向外展示", "每次輪換十幾本，唔好一次過晒"],
            },
            {
              emoji: "🍳", title: "廚房參與",
              items: ["矮櫃放佢自己嘅杯碗", "俾佢幫手洗菜、搽麵包、切香蕉（安全刀）"],
            },
            {
              emoji: "🌱", title: "自理小任務",
              items: ["一盆細植物——俾佢淋水同抹葉", "玩具每次放6–8樣，用圖示貼紙標記位置"],
            },
          ].map((area) => (
            <div
              key={area.title}
              className="rounded-2xl bg-white/80 p-5 backdrop-blur shadow-sm"
            >
              <span className="text-3xl">{area.emoji}</span>
              <h3 className="mt-2 font-display text-lg font-extrabold text-[#3f3550]">{area.title}</h3>
              <ul className="mt-3 space-y-2">
                {area.items.map((item) => (
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

      {/* 學校資訊 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🏫</span> 香港蒙特梭利學校選擇
        </h2>
        <div className="mt-6 space-y-3">
          {[
            { emoji: "🌍", title: "國際蒙特梭利學校", body: "如 IMS、Woodland——全英語環境，跟 AMI 標準" },
            { emoji: "🏫", title: "本地蒙特梭利幼稚園", body: "部分參加幼稚園教育計劃嘅學校引入蒙特梭利教具" },
            { emoji: "✅", title: "點樣揀真正嘅蒙特梭利學校？", body: "要有 AMI/AMS 認證老師，教室要有完整嘅蒙特梭利教具" },
            { emoji: "💰", title: "費用參考", body: "國際蒙特梭利約 $8,000–$15,000/月；本地班約 $3,000–$6,000/月" },
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

      {/* 迷思 */}
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-coral/5 to-sun/5 p-6 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">❓</span> 蒙特梭利迷思
        </h2>
        <div className="mt-5 space-y-4">
          {[
            { q: "蒙特梭利係唔係乜都由得小朋友？", a: "唔係。蒙特梭利係「有規則嘅自由」，小朋友可以自由揀，但喺界限之內" },
            { q: "蒙特梭利小朋友會唔會唔識同人相處？", a: "唔會。混齡教室係最好嘅社交訓練" },
            { q: "係唔係一定要返蒙特梭利學校先得？", a: "唔係。喺屋企應用蒙特梭利原則已經好有幫助" },
          ].map((faq) => (
            <div key={faq.q} className="rounded-2xl bg-white/80 p-4 backdrop-blur">
              <p className="font-display font-bold text-[#3f3550]">❓ {faq.q}</p>
              <p className="mt-1 text-sm text-[#5a4d68]">💬 {faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-mint/10 to-sky/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          蒙特梭利嘅精髓唔係教具，而係「相信小朋友有能力自己做到」。
          喺香港呢個乜都幫佢諗好嘅社會，蒙特梭利嘅「等一等，睇佢自己試」係好珍貴嘅禮物。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
