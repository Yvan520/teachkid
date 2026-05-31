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
        Omega-3 脂肪酸（尤其 DHA）係大腦發育嘅關鍵營養素——影響認知能力、專注力、記憶力。
        對小朋友嚟講，由細攝取足夠好脂肪對智力發展好重要。
      </p>

      {/* 點解重要 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sky/10 to-mint/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🤔</span> 點解好脂肪咁重要？
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { emoji: "🧠", title: "大腦材料", desc: "大腦60%係脂肪——好脂肪係大腦嘅建築材料" },
            { emoji: "⚡", title: "學習能力", desc: "DHA直接影響神經細胞溝通——即係學習能力" },
            { emoji: "🛡️", title: "免疫支援", desc: "Omega-3有助減少發炎——支持免疫系統" },
            { emoji: "👁️", title: "視力發育", desc: "視網膜含有大量DHA——對眼睛好重要" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/80 p-4 text-center backdrop-blur">
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="mt-2 font-display text-base font-extrabold text-[#3f3550]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#5a4d68]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 推薦魚類 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🐠</span> 低水銀高DHA魚類推薦
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🐟", name: "三文魚", detail: "Omega-3含量最高——一星期1–2餐", tag: "🏆 冠軍" },
            { emoji: "🥫", name: "沙甸魚（罐裝）", detail: "平、方便、低水銀——$15–20/罐", tag: "💰 慳錢" },
            { emoji: "🐟", name: "鯖魚（馬鮫）", detail: "Omega-3豐富——蒸或煎都得", tag: "🔥 推薦" },
            { emoji: "🐟", name: "紅衫魚", detail: "香港家常魚——肉質嫩、小朋友鍾意", tag: "🏠 家常" },
            { emoji: "🐟", name: "大眼雞", detail: "煲湯/蒸——湯水都有營養", tag: "🍲 煲湯" },
          ].map((fish) => (
            <div
              key={fish.name}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl">{fish.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-display font-extrabold text-[#3f3550]">{fish.name}</p>
                  <span className="rounded-full bg-coral/10 px-2 py-0.5 text-xs font-bold text-coral">
                    {fish.tag}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#5a4d68]">{fish.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 要避免 */}
      <div className="mt-6 rounded-2xl bg-red-50 p-5 shadow-sm ring-1 ring-red-200">
        <p className="flex items-center gap-2 font-display text-lg font-extrabold text-red-600">
          <span>❌</span> 要避免（水銀較高）
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {["鯊魚（魚翅）、劍魚", "大眼吞拿、藍鰭吞拿", "金目鯛、黃鰭吞拿"].map((item) => (
            <p key={item} className="flex items-center gap-2 text-sm text-red-700">
              <span>✗</span> {item}
            </p>
          ))}
        </div>
        <p className="mt-3 text-sm text-red-600">
          ⚠️ 一星期唔好超過一次大型獵食魚類
        </p>
      </div>

      {/* 其他好脂肪 */}
      <div className="mt-10 rounded-3xl bg-gradient-to-br from-sky/10 to-mint/10 p-7 shadow-sm ring-1 ring-black/5">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🥑</span> 其他好脂肪來源
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { emoji: "🥑", name: "牛油果", detail: "一半＝好脂肪＋纖維——$10–15/個" },
            { emoji: "🥜", name: "合桃/杏仁", detail: "每日幾粒就夠——整碎加落麥皮" },
            { emoji: "🫒", name: "橄欖油", detail: "用嚟煮食——涼拌沙律都得" },
            { emoji: "🥚", name: "蛋黃", detail: "都有DHA——食全蛋好重要" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-start gap-4 rounded-2xl bg-white/80 p-4 backdrop-blur"
            >
              <span className="text-3xl">{item.emoji}</span>
              <div>
                <p className="font-display font-extrabold text-[#3f3550]">{item.name}</p>
                <p className="mt-1 text-sm text-[#5a4d68]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 簡單實踐 */}
      <div className="mt-10">
        <h2 className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span> 簡單實踐
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            { meal: "蒸魚", desc: "紅衫魚/大眼雞蒸8–10分鐘——最保留營養" },
            { meal: "三文魚碎炒飯", desc: "用罐裝三文魚碎——方便好食" },
            { meal: "沙甸魚多士", desc: "壓碎搽麵包——早餐或下午茶" },
            { meal: "牛油果拌蛋", desc: "切粒加入炒蛋——滑溜好味" },
          ].map((item) => (
            <div key={item.meal} className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-black/5">
              <p className="font-display text-base font-extrabold text-[#3f3550]">{item.meal}</p>
              <p className="mt-1 text-sm text-[#5a4d68]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          一星期2–3餐低水銀魚（三文魚/沙甸魚/紅衫）+ 每日適量好脂肪（牛油果/果仁）——養腦就係咁簡單。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
