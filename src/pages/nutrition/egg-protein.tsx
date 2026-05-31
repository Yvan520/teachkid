import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function EggProtein() {
  return (
    <PhilosophyLayout
      meta={{
        title: "雞蛋 & 蛋白質 — 肌肉生長必備",
        desc: "蛋白質對小朋友肌肉發育同細胞生長嘅重要性。每日蛋白質需要量、優質蛋白質來源、最慳錢嘅高蛋白食物。",
        slug: "egg-protein",
      }}
    >
      <h1>🥚 雞蛋 & 蛋白質</h1>
      <p className="lead">
        蛋白質係建造同修復身體組織嘅基本材料——肌肉、骨骼、皮膚、頭髮都需要蛋白質。對生長發育期嘅小朋友嚟講，每日充足嘅蛋白質攝取好重要。
      </p>

      <h2>📊 每日蛋白質需要量</h2>
      <ul>
        <li>1–3 歲：約 20g 蛋白質</li>
        <li>4–6 歲：約 25g 蛋白質</li>
        <li>7–10 歲：約 30g 蛋白質</li>
      </ul>

      <h2>🥇 高蛋白食物營養資料</h2>
      <ul>
        <li>🥚 <strong>雞蛋</strong>：1 隻 ≈ 6–7g 蛋白質——最完美嘅蛋白質來源</li>
        <li>🥛 <strong>牛奶</strong>：1 杯 ≈ 8g 蛋白質</li>
        <li>🐟 <strong>魚肉</strong>：1 份（約 100g）≈ 20g 蛋白質</li>
        <li>🐔 <strong>雞肉/豬肉</strong>：1 份 ≈ 20g 蛋白質</li>
        <li>🫘 <strong>豆腐/豆類</strong>：半磚豆腐 ≈ 10g 蛋白質</li>
      </ul>

      <h2>💰 最慳錢嘅蛋白質來源</h2>
      <ul>
        <li><strong>雞蛋</strong>：$15–20/盒（10 隻）——每隻約 $1.5–2，CP 值最高</li>
        <li><strong>豆腐</strong>：$5–8/磚——街市買最平</li>
        <li><strong>豆漿</strong>：$8–12/盒——加鈣豆漿仲補鈣</li>
        <li><strong>急凍魚柳</strong>：$20–30/塊——比新鮮魚平好多</li>
        <li><strong>豬肉碎</strong>：$15–20/斤——蒸肉餅、炒飯都得</li>
      </ul>

      <h2>🍽️ 簡單高蛋白餐單</h2>
      <ul>
        <li><strong>早餐</strong>：烚蛋 1 隻 + 牛奶 1 杯</li>
        <li><strong>午餐</strong>：番茄炒蛋 + 飯</li>
        <li><strong>下午茶</strong>：豆腐花（少甜）</li>
        <li><strong>晚餐</strong>：蒸肉餅 + 炒菜</li>
      </ul>

      <h2>💡 貼士</h2>
      <ul>
        <li><strong>蛋黃要食</strong>：膽固醇唔係魔鬼，蛋黃有維他命D同鐵質</li>
        <li><strong>分散攝取</strong>：每餐都有蛋白質比一餐食大量更好</li>
        <li><strong>素食小朋友</strong>：豆製品、蛋奶、藜麥、堅果——一樣可以夠 protein</li>
        <li><strong>唔好過量</strong>：過多蛋白質會增加腎臟負擔——均衡飲食最重要</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          每日 1–2 個蛋 + 肉/魚/豆腐其中一樣 + 1 杯奶——已經滿足一日蛋白質需要。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
