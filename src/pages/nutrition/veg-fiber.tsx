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
        增強免疫力（維他命A/C）、促進腸道蠕動（纖維）、預防便秘。
      </p>

      <h2>📊 每日蔬菜需要量</h2>
      <ul>
        <li>1–3 歲：約½碗熟菜</li>
        <li>4–6 歲：約½–1 碗熟菜</li>
        <li>7–10 歲：約 1–1½ 碗熟菜</li>
        <li>「一碗」≈ 一個飯碗嘅份量</li>
      </ul>

      <h2>🥇 香港常見嘅優質蔬菜</h2>
      <ul>
        <li>🥬 <strong>深綠色菜</strong>：菜心、白菜仔、芥蘭、西蘭花——鈣+鐵+維他命C</li>
        <li>🥕 <strong>橙黃色菜</strong>：紅蘿蔔、南瓜、蕃薯——維他命A（對眼睛好）</li>
        <li>🍅 <strong>番茄</strong>：茄紅素抗氧化——煮過營養更易吸收</li>
        <li>🫑 <strong>燈籠椒</strong>：維他命C比橙更高</li>
        <li>🥒 <strong>翠玉瓜、節瓜</strong>：水份高、容易消化</li>
      </ul>

      <h2>🧒 點樣令小朋友肯食菜？</h2>
      <ul>
        <li><strong>隱藏法</strong>：菜切碎煮落意粉醬、咖喱、肉餅</li>
        <li><strong>配搭法</strong>：同佢鍾意食嘅嘢一齊煮——粟米炒肉粒加西芹</li>
        <li><strong>愈早愈好</strong>：BLW 時就開始俾菜梗、菜葉佢試</li>
        <li><strong>重複接觸</strong>：可能要俾同一樣菜 10–15 次佢先肯食——唔好放棄</li>
        <li><strong>自己種</strong>：喺窗台種啲車厘茄、生菜——自己種嘅佢會肯試</li>
      </ul>

      <h2>💰 慳錢買菜攻略</h2>
      <ul>
        <li><strong>街市收市前</strong>：約 7–8pm 去，菜檔平賣——$10 有 3–4 斤</li>
        <li><strong>當造蔬菜</strong>：夏天瓜類（節瓜、勝瓜）平，冬天菜心最靚</li>
        <li><strong>急凍蔬菜</strong>：西蘭花、雜菜粒——平過新鮮，營養唔差好多</li>
        <li><strong>蔬菜批發市場</strong>：長沙灣蔬菜批發市場，清晨去買超平</li>
      </ul>

      <h2>💡 纖維攝取貼士</h2>
      <ul>
        <li><strong>連皮食</strong>：蘋果、薯仔——纖維喺皮入面最多</li>
        <li><strong>水果都係纖維來源</strong>：奇異果、橙、香蕉、蘋果</li>
        <li><strong>飲夠水</strong>：纖維要配足夠水份先有效——唔係反而會便秘</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          每餐都要有菜——深綠色最好——配搭佢鍾意食嘅嘢，由細開始養成習慣。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
