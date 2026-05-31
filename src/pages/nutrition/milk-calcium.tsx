import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function MilkCalcium() {
  return (
    <PhilosophyLayout
      meta={{
        title: "奶製品 & 鈣質 — 骨骼發育最強營養",
        desc: "鈣質對小朋友骨骼同牙齒發育嘅重要性、每日需要量、高鈣食物清單。香港常見食物鈣含量一覽。",
        slug: "milk-calcium",
      }}
    >
      <h1>🥛 奶製品 & 鈣質</h1>
      <p className="lead">
        鈣質係小朋友骨骼同牙齒發育嘅關鍵營養素。香港衛生署建議 1–9 歲每日需要 500–800mg 鈣質，足夠嘅鈣質攝取直接影響最終身高。
      </p>

      <h2>📊 每日鈣質需要量</h2>
      <ul>
        <li>1–3 歲：500 mg</li>
        <li>4–6 歲：600 mg</li>
        <li>7–9 歲：800 mg</li>
        <li>10–18 歲：1000–1300 mg（青春期需要量最高）</li>
      </ul>

      <h2>🥇 高鈣食物排行榜</h2>
      <ul>
        <li>🥛 <strong>牛奶/配方奶</strong>：1 杯（240ml）≈ 300mg鈣——最簡單直接嘅來源</li>
        <li>🧀 <strong>芝士</strong>：1 片芝士 ≈ 200mg鈣</li>
        <li>🥬 <strong>深綠色蔬菜</strong>：西蘭花、白菜仔、芥蘭——1 碗煮菜約 100mg鈣</li>
        <li>🫘 <strong>板豆腐</strong>：半磚約 300mg鈣（要用石膏做嗰種）</li>
        <li>🐟 <strong>連骨食嘅魚</strong>：沙甸魚、銀魚仔、白飯魚</li>
        <li>🥜 <strong>芝麻/芝麻醬</strong>：1 湯匙芝麻醬 ≈ 130mg鈣</li>
      </ul>

      <h2>🍽️ 一日餐單建議</h2>
      <ul>
        <li><strong>早餐</strong>：1 杯牛奶 + 芝士三文治</li>
        <li><strong>午餐</strong>：西蘭花炒牛肉 + 飯</li>
        <li><strong>下午茶</strong>：乳酪一杯</li>
        <li><strong>晚餐</strong>：豆腐魚腩湯 + 炒白菜仔</li>
      </ul>

      <h2>💡 補充貼士</h2>
      <ul>
        <li><strong>維他命D助攻</strong>：鈣要有維他命D先吸收得好——每日曬太陽 15 分鐘就夠</li>
        <li><strong>少飲汽水</strong>：可樂/汽水令鈣流失——唔好俾小朋友當水飲</li>
        <li><strong>香港街市貼士</strong>：$10 銀魚仔煮湯粉麵，平、靚、正、高鈣</li>
        <li><strong>奶類敏感</strong>：乳糖不耐可以試乳酪、硬芝士、加鈣豆漿</li>
        <li><strong>補充劑</strong>：最好由食物攝取，唔夠先諗 supplement，先問醫生</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          每日 1–2 杯奶 + 深綠色菜 + 豆腐，配合曬太陽，就已經打好骨骼基礎。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
