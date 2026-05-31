import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function FishGoodFat() {
  return (
    <PhilosophyLayout
      meta={{
        title: "魚類 & 好脂肪 — 腦部發育關鍵",
        desc: "DHA 同 Omega-3 對小朋友腦部同視力發育嘅重要性。低水銀風險魚類推薦、聰明脂肪酸攝取指南。",
        slug: "fish-good-fat",
      }}
    >
      <h1>🐟 魚類 & 好脂肪</h1>
      <p className="lead">
        Omega-3 脂肪酸（尤其 DHA）係大腦發育嘅關鍵營養素——影響認知能力、專注力、記憶力。對小朋友嚟講，由細攝取足夠好脂肪對智力發展好重要。
      </p>

      <h2>🤔 點解好脂肪咁重要？</h2>
      <ul>
        <li>大腦 60% 係脂肪——好脂肪係大腦嘅建築材料</li>
        <li>DHA 直接影響神經細胞溝通——即係學習能力</li>
        <li>Omega-3 有助減少發炎——支持免疫系統</li>
        <li>對視力發育都好重要——視網膜含有大量 DHA</li>
      </ul>

      <h2>🐠 低水銀高DHA魚類推薦</h2>
      <ul>
        <li>🐟 <strong>三文魚</strong>：Omega-3 含量最高——一星期 1–2 餐</li>
        <li>🥫 <strong>沙甸魚（罐裝）</strong>：平、方便、低水銀——$15–20/罐</li>
        <li>🐟 <strong>鯖魚（馬鮫）</strong>：Omega-3 豐富——蒸或煎都得</li>
        <li>🐟 <strong>紅衫魚</strong>：香港家常魚——肉質嫩、小朋友鍾意</li>
        <li>🐟 <strong>大眼雞</strong>：煲湯/蒸——湯水都有營養</li>
      </ul>

      <h3>要避免（水銀較高）</h3>
      <ul>
        <li>❌ 鯊魚（魚翅）、劍魚、吞拿魚（大眼/藍鰭）</li>
        <li>❌ 金目鯛、黃鰭吞拿</li>
        <li>❌ 一星期唔好超過一次大型獵食魚類</li>
      </ul>

      <h2>💡 其他好脂肪來源</h2>
      <ul>
        <li>🥑 <strong>牛油果</strong>：一半 ≈ 好脂肪 + 纖維——$10–15/個</li>
        <li>🥜 <strong>合桃/杏仁</strong>：每日幾粒就夠——整碎加落麥皮</li>
        <li>🫒 <strong>橄欖油</strong>：用嚟煮食——涼拌沙律都得</li>
        <li>🥚 <strong>蛋黃</strong>：都有 DHA——食全蛋好重要</li>
        <li>🫘 <strong>亞麻籽/奇亞籽</strong>：加入乳酪/麥皮——植物性 Omega-3</li>
      </ul>

      <h2>🍽️ 簡單實踐</h2>
      <ul>
        <li><strong>蒸魚</strong>：紅衫魚/大眼雞蒸 8–10 分鐘——最保留營養</li>
        <li><strong>三文魚碎炒飯</strong>：用罐裝三文魚碎——方便好食</li>
        <li><strong>沙甸魚多士</strong>：早餐/下午茶——壓碎搽麵包</li>
        <li><strong>牛油果拌蛋</strong>：切粒加入炒蛋——滑溜好味</li>
      </ul>

      <h2>⚠️ 注意事項</h2>
      <ul>
        <li><strong>魚骨</strong>：一定要揀乾淨——用筷子細心檢查</li>
        <li><strong>過敏</strong>：第一次食新魚試少少先</li>
        <li><strong>補充劑</strong>：如果唔食魚可以考慮魚油補充劑——先問醫生/營養師</li>
        <li><strong>一星期 2–3 餐魚</strong>：已經夠 Omega-3 需要</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          一星期 2–3 餐低水銀魚（三文魚/沙甸魚/紅衫）+ 每日適量好脂肪（牛油果/果仁）——養腦就係咁簡單。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
