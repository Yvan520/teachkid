import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function Vygotsky() {
  return (
    <PhilosophyLayout
      meta={{
        title: "維高斯基最近發展區理論 — 「陪住佢」嘅藝術",
        desc: "維高斯基最近發展區（ZPD）同鷹架理論。香港家長點樣喺唔同年齡幫小朋友「搭棚架」——唔係幫佢做，而係陪佢做到。",
        slug: "vygotsky",
      }}
    >
      <h1>🤝 維高斯基最近發展區理論</h1>
      <p className="lead">
        維高斯基（Lev Vygotsky）係俄羅斯心理學家，佢嘅理論喺近代教育界影響力最大。
        佢最出名嘅概念係<strong>「最近發展區」</strong>（Zone of Proximal Development, ZPD）
        同<strong>「鷹架理論」</strong>（Scaffolding）——簡單講就係：幫佢多少少，佢就做到。
      </p>

      {/* 三個圈圈 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sky/10 to-grape/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🎯</span> 咩係最近發展區？
        </h2>
        <p className="mt-3 text-[#5a4d68]">維高斯基將小朋友嘅能力分為三個圈圈：</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              emoji: "✅", title: "內圈：已經做到",
              desc: "自己搞掂，唔使幫",
              color: "from-[#95e1c8]/20 to-[#95e1c8]/5",
              border: "border-[#95e1c8]",
            },
            {
              emoji: "🔑", title: "中圈：最近發展區",
              desc: "有人幫就做到，自己做就做唔到——呢度就係教育嘅目標",
              color: "from-[#ffb07a]/20 to-[#ffb07a]/5",
              border: "border-[#ffb07a]",
              highlight: true,
            },
            {
              emoji: "❌", title: "外圈：暫時做唔到",
              desc: "點幫都做唔到，未準備好——跳級會搞到好大壓力",
              color: "from-[#ff8a7a]/10 to-[#ff8a7a]/5",
              border: "border-[#ff8a7a]",
            },
          ].map((ring) => (
            <div
              key={ring.title}
              className={`rounded-2xl bg-gradient-to-br ${ring.color} border-2 ${ring.border} p-6 text-center shadow-sm ${ring.highlight ? "scale-105" : ""}`}
            >
              <span className="text-4xl">{ring.emoji}</span>
              <h3 className="mt-3 font-display text-lg font-extrabold text-[#3f3550]">{ring.title}</h3>
              <p className="mt-2 text-sm text-[#5a4d68]">{ring.desc}</p>
              {ring.highlight && (
                <span className="mt-3 inline-block rounded-full bg-coral/10 px-4 py-1 font-display text-xs font-bold text-coral">
                  🎯 教學目標喺呢度
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 鷹架方法 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🏗️</span> 鷹架理論：點樣幫先啱？
        </h2>
        <p className="mt-3 text-[#5a4d68]">
          「鷹架」即係建築棚架——起樓時要棚架，起好就拆走。
          提供<strong>臨時嘅支援</strong>，等小朋友做到佢自己一個做唔到嘅嘢，然後慢慢撤走。
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold text-green-600">
              <span>✅</span> 有效鷹架方法
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { emoji: "👀", text: "示範——你做一次俾佢睇，然後等佢試" },
                { emoji: "💬", text: "提問——唔係俾答案，而係問「跟住你覺得應該點做？」" },
                { emoji: "✂️", text: "拆細——將大任務拆成細步驟，一步一步嚟" },
                { emoji: "💡", text: "提示——俾少少提示，唔係直接出手" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-[#5a4d68]">
                  <span>{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-red-50 p-6 shadow-sm ring-1 ring-red-200">
            <p className="flex items-center gap-2 font-display text-lg font-extrabold text-red-600">
              <span>❌</span> 錯誤鷹架（香港家長最常見）
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { emoji: "🫳", text: "直接幫佢做——同佢做功課、幫佢著鞋——剝削學習機會" },
                { emoji: "👀", text: "做埋俾佢睇就算——示範完唔俾佢試，口訣係「我哋一齊做」" },
                { emoji: "🏃", text: "過早撤走支援——話「你自己嚟啦」但佢仲未準備好" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-red-700">
                  <span>{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 語言係思考工具 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sky/10 to-grape/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🗣️</span> 語言係思考嘅工具
        </h2>
        <p className="mt-3 text-[#5a4d68]">
          維高斯基認為，小朋友透過<strong>同人對話</strong>學習思考。
          佢發現小朋友做嘢時會自己同自己講嘢（私語），呢個係思考嘅載具。
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { emoji: "🤫", title: "唔好叫佢收聲", desc: "一邊砌積木一邊自己講嘢，係正常嘅思考過程" },
            { emoji: "💭", title: "多啲對話", desc: "唔係指令（「執嘢」），而係開放式問題（「積木可以點收？」）" },
            { emoji: "👧", title: "同儕學習", desc: "同齡小朋友互相教，效果有時好過大人教" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/80 p-5 text-center backdrop-blur">
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="mt-2 font-display text-base font-extrabold text-[#3f3550]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#5a4d68]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 實戰應用時間線 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📋</span> 香港家長實戰應用
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              age: "👶 2–4 歲：學著鞋",
              steps: [
                "示範：你慢慢著一次俾佢睇，同時講解步驟",
                "一齊做：你攞住鞋，佢伸隻腳入去",
                "提示：佢自己試時你只係出手指指「魔術貼要貼返實喎」",
                "放手：佢搞得掂時，你只需要坐喺隔籬",
              ],
              color: "from-[#ffe5d9]/30 to-[#ffd6e8]/30",
            },
            {
              age: "🧒 4–6 歲：學寫自己個名",
              steps: [
                "拆細：先學第一個字，唔好一次過寫晒全名",
                "提示：用虛線字帖，等佢跟住寫",
                "工具：用沙盤或者白板筆，易擦易改，減少挫折感",
              ],
              color: "from-[#e9f7d9]/30 to-[#d9f0ff]/30",
            },
            {
              age: "🧑 6–10 歲：學做時間管理",
              steps: [
                "示範：你一齊同佢規劃今日嘅時間表",
                "提示：用計時器視覺化時間",
                "放手：等佢自己規劃，你只係 check 最後有冇做到",
              ],
              color: "from-[#e6e0ff]/30 to-[#ffeccf]/30",
            },
          ].map((ex) => (
            <div
              key={ex.age}
              className={`rounded-2xl bg-gradient-to-br ${ex.color} p-6 shadow-sm ring-1 ring-black/5`}
            >
              <p className="font-display text-lg font-extrabold text-[#3f3550]">{ex.age}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {ex.steps.map((step, i) => (
                  <div key={step} className="flex items-start gap-3 rounded-xl bg-white/70 p-3 backdrop-blur">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-coral text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#5a4d68]">{step.replace(/^[^：]+：/, "")}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-grape/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          維高斯基教識我哋：<strong>最好嘅教學唔係幫佢做，而係喺佢差少少就做到嘅時候扶一把。</strong>
          然後慢慢放手，等佢話「我得咗啦！」
        </p>
      </div>
    </PhilosophyLayout>
  );
}
