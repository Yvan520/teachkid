import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function VegFiber() {
  return (
    <PhilosophyLayout
      meta={{
        title: "蔬菜 & 纖維 — 腸道健康關鍵",
        desc: "蔬菜提供維他命、礦物質同膳食纖維，對小朋友腸道健康同免疫力好重要。點樣令小朋友肯食菜、每日需要幾多？",
        slug: "veg-fiber",
      }}
    >
      <h1>🥦 蔬菜 & 纖維</h1>
      <p className="lead">
        蔬菜係維他命、礦物質同膳食纖維嘅主要來源。對小朋友嚟講，蔬菜幫助：
        增強免疫力、促進腸道蠕動、預防便秘。
      </p>

      {/* 每日需要量 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-mint/10 to-sky/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">📊</span> 每日蔬菜需要量
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { age: "1–3 歲", amount: "約½碗熟菜" },
            { age: "4–6 歲", amount: "約½–1 碗熟菜" },
            { age: "7–10 歲", amount: "約1–1½ 碗熟菜" },
            { age: "備註", amount: "1碗 ≈ 一個飯碗", note: true },
          ].map((item) => (
            <div
              key={item.age}
              className={`rounded-2xl p-5 text-center ${item.note ? "bg-coral/5" : "bg-white/80"} backdrop-blur`}
            >
              <p className="font-display text-lg font-extrabold text-[#3f3550]">{item.age}</p>
              <p className="mt-1 font-display text-lg font-bold text-coral">{item.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 優質蔬菜 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🥇</span> 香港常見優質蔬菜
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🥬", name: "深綠色菜", items: ["菜心、白菜仔、芥蘭、西蘭花", "鈣+鐵+維他命C——營養密度最高"] },
            { emoji: "🥕", name: "橙黃色菜", items: ["紅蘿蔔、南瓜、蕃薯", "維他命A——對眼睛好"] },
            { emoji: "🍅", name: "番茄", items: ["茄紅素抗氧化", "煮過營養更易吸收"] },
            { emoji: "🫑", name: "燈籠椒", items: ["維他命C比橙更高", "生食/炒熟都好好食"] },
            { emoji: "🥒", name: "瓜類", items: ["翠玉瓜、節瓜", "水份高、容易消化"] },
            { emoji: "🌿", name: "香草", items: ["芫茜、蔥、九層塔", "加少少已經好香，令小朋友肯食菜"] },
          ].map((veg) => (
            <div
              key={veg.name}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl">{veg.emoji}</span>
              <div>
                <p className="font-display font-extrabold text-[#3f3550]">{veg.name}</p>
                {veg.items.map((item) => (
                  <p key={item} className="text-sm text-[#5a4d68]">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 點樣令小朋友肯食菜 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-mint/10 to-sky/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🧒</span> 點樣令小朋友肯食菜？
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🥘", title: "隱藏法", body: "菜切碎煮落意粉醬、咖喱、肉餅——味道遮咗但營養喺度" },
            { emoji: "🍚", title: "配搭法", body: "同佢鍾意食嘅嘢一齊煮——粟米炒肉粒加西芹" },
            { emoji: "👶", title: "愈早愈好", body: "BLW時就開始俾菜梗菜葉佢試——習慣由細建立" },
            { emoji: "🔄", title: "重複接觸", body: "可能要俾同一樣菜10–15次先肯食——唔好放棄" },
            { emoji: "🌱", title: "自己種", body: "窗台種車厘茄、生菜——自己種嘅佢會肯試" },
            { emoji: "🎨", title: "好玩擺盤", body: "用卡通 cutter 切形狀、整沙律彩虹——視覺吸引好重要" },
          ].map((tip) => (
            <div
              key={tip.title}
              className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 backdrop-blur"
            >
              <span className="text-3xl">{tip.emoji}</span>
              <div>
                <p className="font-display font-bold text-[#3f3550]">{tip.title}</p>
                <p className="mt-1 text-sm text-[#5a4d68]">{tip.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 慳錢買菜攻略 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">💰</span> 慳錢買菜攻略
        </h2>
        <div className="mt-6 space-y-3">
          {[
            { emoji: "🕐", title: "街市收市前", body: "約7–8pm去，菜檔平賣——$10有3–4斤" },
            { emoji: "📅", title: "當造蔬菜", body: "夏天瓜類（節瓜、勝瓜）平，冬天菜心最靚最甜" },
            { emoji: "🧊", title: "急凍蔬菜", body: "西蘭花、雜菜粒——平過新鮮，營養唔差好多" },
            { emoji: "🏪", title: "蔬菜批發市場", body: "長沙灣蔬菜批發市場，清晨去買超平" },
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
          每餐都要有菜——深綠色最好——配搭佢鍾意食嘅嘢，由細開始養成習慣。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
