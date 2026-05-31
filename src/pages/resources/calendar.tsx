import ResourceLayout from "../../layouts/ResourceLayout";

export default function Calendar() {
  return (
    <ResourceLayout
      meta={{
        title: "免費活動月曆 — 香港家長慳錢攻略",
        desc: "每月精選香港免費親子活動，包括圖書館活動、博物館免費日、社區節慶、公眾假期好去處——全部免費/低收費，月月更新。",
        slug: "calendar",
        category: "免費活動月曆",
      }}
    >
      <h1>📅 免費活動月曆</h1>
      <p>
        香港每月都有好多免費嘅親子活動，但好多家長都唔知。
        呢度整合每個月嘅重點免費活動，仲會連結 SunnyHK 嘅詳細行程推薦。
      </p>

      <h2>🗓️ 每月恆常活動</h2>
      <ul>
        <li><strong>逢星期三</strong>：康文署博物館免費開放日（科學館、太空館、歷史博物館等）</li>
        <li><strong>逢星期六/日</strong>：圖書館故事時間、親子工作坊（免費，各區圖書館）</li>
        <li><strong>每月第一個星期日</strong>：香港公園觀鳥導賞團（免費）</li>
        <li><strong>每月最後一個星期六</strong>：西九文化區免費戶外活動/表演</li>
        <li><strong>每日</strong>：香港動植物公園免費入場</li>
      </ul>

      <h2>🌸 春季（3–5月）</h2>
      <ul>
        <li><strong>3月</strong>：香港花卉展覽（部分時段免費）</li>
        <li><strong>4月</strong>：兒童節特別活動（各區圖書館/社區中心）</li>
        <li><strong>4–5月</strong>：音樂事務處暑期音樂學堂報名</li>
        <li><strong>5月</strong>：課外活動節暨教材及用品博覽（會展，免費入場）</li>
        <li><strong>5月</strong>：學校書簿津貼申請開始</li>
      </ul>

      <h2>☀️ 夏季（6–8月）</h2>
      <ul>
        <li><strong>6月</strong>：各區龍舟競賽（免費觀賞）</li>
        <li><strong>7–8月</strong>：康文署暑期康體活動報名</li>
        <li><strong>7–8月</strong>：音樂事務處暑期音樂學堂上課</li>
        <li><strong>7–8月</strong>：香港書展（部分時段免費/優惠）</li>
        <li><strong>8月</strong>：各區夏日嘉年華/水上活動</li>
      </ul>

      <h2>🍂 秋季（9–11月）</h2>
      <ul>
        <li><strong>9月</strong>：中秋節各區綵燈會（免費）</li>
        <li><strong>9–10月</strong>：學校朗誦節/音樂節報名</li>
        <li><strong>10月</strong>：國慶日免費博物館開放</li>
        <li><strong>10月</strong>：萬聖節社區活動（各區商場/社區中心）</li>
        <li><strong>11月</strong>：香港美酒佳餚巡禮（部分免費試食）</li>
      </ul>

      <h2>❄️ 冬季（12–2月）</h2>
      <ul>
        <li><strong>12月</strong>：聖誕節各區燈飾/免費活動</li>
        <li><strong>12月</strong>：維港跨年倒數（免費）</li>
        <li><strong>1月</strong>：元旦新春同樂日</li>
        <li><strong>1–2月</strong>：年宵市場（免費入場）</li>
        <li><strong>2月</strong>：新春嘉年華/花車巡遊</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-grape/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">💡 實用提示</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          活動日期同詳情每個月可能有變，建議出發前上官網確認。
          熱門活動（如博物館免費日）建議平日去，避開人潮。
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-br from-coral/10 to-peach/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">🔗 聯動 SunnyHK</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          想睇詳細行程規劃同最新活動推介？去 SunnyHK 發掘更多：
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a href="https://gohk.gamewayz.com/explore.html" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-[#5a4d68] shadow-sm ring-1 ring-black/5 transition hover:bg-coral hover:text-white">🌟 人群指南 →</a>
          <a href="https://gohk.gamewayz.com/explore.html#family" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-[#5a4d68] shadow-sm ring-1 ring-black/5 transition hover:bg-coral hover:text-white">👶 親子家庭 →</a>
          <a href="https://gohk.gamewayz.com/tips.html" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-[#5a4d68] shadow-sm ring-1 ring-black/5 transition hover:bg-coral hover:text-white">💡 實用貼士 →</a>
        </div>
      </div>
    </ResourceLayout>
  );
}
