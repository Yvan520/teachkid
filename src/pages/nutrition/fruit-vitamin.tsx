import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function FruitVita() {
  return (
    <PhilosophyLayout
      meta={{
        title: "水果 & 維他命 — 免疫力守護者",
        desc: "水果提供維他命C、維他命A、抗氧化物——增強免疫力、預防疾病。點樣量化、每日需要幾多、最抵食嘅生果推介。",
        slug: "fruit-vitamin",
      }}
    >
      <h1>🍎 水果 & 維他命</h1>
      <p className="lead">
        水果係維他命C、維他命A、抗氧化物同纖維嘅優質來源。每日適量水果可以幫小朋友增強免疫力、預防傷風感冒、促進傷口癒合同皮膚健康。
      </p>

      <h2>📊 每日水果需要量</h2>
      <ul>
        <li>1–3 歲：約½份水果（½個蘋果 / ½條蕉）</li>
        <li>4–6 歲：約 1 份（1 個橙 / 1 條蕉）</li>
        <li>7–10 歲：約 1–2 份</li>
        <li>「1 份」≈ 一個拳頭咁大</li>
      </ul>

      <h2>🥇 維他命C大比拼</h2>
      <ul>
        <li>🍊 <strong>橙/柑</strong>：1 個 ≈ 70mg C——一個已夠一日所需</li>
        <li>🥝 <strong>奇異果</strong>：1 個 ≈ 90mg C——比橙更高</li>
        <li>🫐 <strong>藍莓</strong>：抗氧化最強，但偏貴</li>
        <li>🍓 <strong>士多啤梨</strong>：5–6 粒 ≈ 60mg C</li>
        <li>木瓜、番石榴——維他命C超高，HK街市好平</li>
      </ul>

      <h2>💰 最抵食嘅生果推介</h2>
      <ul>
        <li><strong>香蕉</strong>：$3–5/條——全年有、飽肚、即食方便</li>
        <li><strong>橙</strong>：$5–8/個——可以放好耐，一次買一箱</li>
        <li><strong>蘋果</strong>：$4–6/個——耐放、小朋友普遍鍾意</li>
        <li><strong>西瓜（夏天）</strong>：$30–50/個——CP 值超高，一大籃</li>
        <li><strong>本地有機菜檔</strong>：$20/袋雜果——可能唔靚仔但甜</li>
        <li><strong>街市收工前</strong>：$10/袋——賣剩嘅生果一樣營養豐富</li>
      </ul>

      <h2>💡 食水果嘅學問</h2>
      <ul>
        <li><strong>原個食好過榨汁</strong>：榨汁會流失纖維，糖份太集中</li>
        <li><strong>當小食/甜品</strong>：用水果代替餅乾糖果</li>
        <li><strong>凍食更吸引</strong>：雪凍嘅提子、西瓜——夏天消暑</li>
        <li><strong>果乾留意糖份</strong>：提子乾、西梅乾——濃縮糖份高，適量就 OK</li>
        <li><strong>有機vs非有機</strong>：預算有限的話，先買非有機都得——有食好過冇食</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          每日 1–2 份水果——原個食、當小食、揀時令——滿足維他命C需要最簡單。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
