import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function RiceEnergy() {
  return (
    <PhilosophyLayout
      meta={{
        title: "飯麵 & 能量 — 每日活動嘅燃料",
        desc: "碳水化合物係小朋友每日跑跳玩嘅主要能量來源。點樣選擇優質澱粉質、全穀物嘅好處、均衡餐盤建議。",
        slug: "rice-energy",
      }}
    >
      <h1>🍚 飯麵 & 能量</h1>
      <p className="lead">
        碳水化合物係小朋友身體同大腦最直接嘅燃料。活躍嘅小朋友每日需要足夠嘅優質澱粉質嚟支持佢哋嘅跑跳玩同學習。
      </p>

      <h2>🤔 點解碳水化合物咁重要？</h2>
      <ul>
        <li>大腦主要用葡萄糖做能源——唔夠碳水會影響專注力</li>
        <li>身體活動需要能量——跑跳玩一個下午就消耗好多</li>
        <li>碳水化合物可以儲存喺肌肉備用</li>
      </ul>

      <h2>🥇 優質碳水化合物來源</h2>

      <h3>推薦（升糖慢、營養高）</h3>
      <ul>
        <li>🍚 <strong>白飯/糙米飯</strong>：香港人主要主食，易消化</li>
        <li>🍞 <strong>全麥麵包</strong>：比白麵包多纖維同維他命B</li>
        <li>🫘 <strong>麥皮/燕麥</strong>：早餐之選——飽肚、穩定血糖</li>
        <li>🍠 <strong>蕃薯</strong>：高纖維、維他命A——街市 $5–8/磅</li>
        <li>🥔 <strong>薯仔/南瓜</strong>：連皮食營養更高</li>
        <li>🍝 <strong>意粉/烏冬</strong>：小朋友普遍鍾意食</li>
      </ul>

      <h3>要留意</h3>
      <ul>
        <li>白麵包、白方包——營養價值低，偶爾食 OK</li>
        <li>蛋糕、曲奇、甜餅乾——糖多營養少，唔好當正餐</li>
        <li>即食麵——高鈉、冇營養，盡量避免</li>
      </ul>

      <h2>🍽️ 均衡餐盤比例</h2>
      <ul>
        <li><strong>½</strong> 蔬菜水果</li>
        <li><strong>¼</strong> 碳水化合物（飯/麵/薯）</li>
        <li><strong>¼</strong> 蛋白質（肉/魚/蛋/豆腐）</li>
        <li>呢個比例適合 3 歲以上小朋友</li>
      </ul>

      <h2>💡 香港實戰貼士</h2>
      <ul>
        <li><strong>早餐最緊要</strong>：麥皮/多士/通粉——食飽先返學，專注力更好</li>
        <li><strong>帶飯慳錢</strong>：前一晚煮多啲飯，留起做第二日 lunch box</li>
        <li><strong>轉全穀物</strong>：白飯溝少少紅米/糙米，逐步適應</li>
        <li><strong>小食準備</strong>：香蕉、蕃薯、麥餅——比薯片餅乾健康</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          每餐都要有優質澱粉質——飯/麵/薯仔——先夠能量跑跳玩學。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
