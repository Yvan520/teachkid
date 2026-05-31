import ResourceLayout from "../../layouts/ResourceLayout";

export default function FreeClasses() {
  return (
    <ResourceLayout
      meta={{
        title: "免費興趣班·政府資助課程 — 香港家長慳錢指南",
        desc: "康文署假日營（全日制半價）、音樂事務處低收費樂器班、圖書館免費工作坊、區議會課程——一文整合香港政府免費/資助兒童興趣班。",
        slug: "free-classes",
        category: "免費興趣班",
      }}
    >
      <h1>🎯 免費興趣班·政府資助課程</h1>
      <p>
        香港小朋友嘅興趣班開支可以好大，但其實政府有好多免費或者資助嘅選擇。
        呢篇文幫你整合晒所有政府資助嘅兒童興趣班資源，由康文署到音樂事務處，
        一文睇晒點樣報名、幾錢、啱咩年紀。
      </p>

      <h2>1. 康文署假日營（全日制學生半價）</h2>
      <p>
        康樂及文化事務署（康文署）每年舉辦大量兒童同青少年康體活動，
        包括假日營、運動訓練班、舞蹈班、武術班等。
        <strong>全日制學生可以享半價優惠</strong>，60歲以上長者同殘疾人士都有優惠。
      </p>
      <ul>
        <li><strong>年齡</strong>：4–17歲（分齡課程）</li>
        <li><strong>費用</strong>：一般$50–$200/堂，全日制學生半價</li>
        <li><strong>報名</strong>：SmartPLAY 康體通（手機App或網站）</li>
        <li><strong>熱門課程</strong>：游泳班、羽毛球班、籃球班、舞蹈班、武術班</li>
        <li><strong>官網</strong>：<a href="https://www.smartplay.lcsd.gov.hk/" target="_blank" rel="noopener noreferrer">SmartPLAY 康體通</a></li>
      </ul>

      <h2>2. 音樂事務處·暑期音樂學堂</h2>
      <p>
        康文署轄下嘅音樂事務處每年暑假舉辦<strong>暑期音樂學堂</strong>，
        為4–15歲兒童及青少年而設。參加者唔需要有音樂訓練背景，
        由基礎樂理到樂器體驗都有。
      </p>
      <ul>
        <li><strong>年齡</strong>：4–15歲</li>
        <li><strong>費用</strong>：大部分課程免費或象徵式收費（約$50–$200/期）</li>
        <li><strong>課程</strong>：小提琴、結他、鋼琴、敲擊樂、合唱團、音樂欣賞</li>
        <li><strong>報名</strong>：每年4–5月接受報名，先到先得</li>
        <li><strong>官網</strong>：<a href="https://www.lcsd.gov.hk/musicoffice/" target="_blank" rel="noopener noreferrer">音樂事務處</a></li>
      </ul>

      <h2>3. 圖書館免費推廣活動</h2>
      <p>
        香港公共圖書館定期舉辦大量免費活動，涵蓋閱讀分享、故事時間、
        講座、工作坊、親子活動等。全部<strong>免費參加</strong>，
        部分需要預先報名。
      </p>
      <ul>
        <li><strong>年齡</strong>：0–12歲（分齡設計）</li>
        <li><strong>費用</strong>：免費</li>
        <li><strong>活動類型</strong>：故事時間、親子閱讀工作坊、STEM 體驗、文化講座</li>
        <li><strong>報名</strong>：香港公共圖書館網站查詢各區活動時間表</li>
        <li><strong>官網</strong>：<a href="https://www.hkpl.gov.hk/tc/extension-activities/all-events/this-week" target="_blank" rel="noopener noreferrer">圖書館推廣活動一覽</a></li>
      </ul>

      <h2>4. 區議會免費課程及活動</h2>
      <p>
        全港18區區議會每年舉辦各類免費/低收費課程同活動，
        包括健康推廣日、綜藝表演、節日慶祝、親子工作坊等。
        只要你係嗰區居民，大部分活動都<strong>免費參加</strong>。
      </p>
      <ul>
        <li><strong>費用</strong>：大部分免費，部分象徵式收費</li>
        <li><strong>活動類型</strong>：親子工作坊、節日慶祝、健康講座、運動日</li>
        <li><strong>報名</strong>：去你所屬地區嘅區議會網站查閱</li>
        <li><strong>官網</strong>：<a href="https://www.districtcouncils.gov.hk/" target="_blank" rel="noopener noreferrer">區議會網頁</a></li>
      </ul>

      <h2>5. 兒童事務委員會·兒童福祉資助計劃</h2>
      <p>
        兒童事務委員會設有<strong>兒童福祉及發展資助計劃</strong>，
        資助非政府機構同學校舉辦兒童相關嘅推廣及公眾教育活動。
        雖然係機構申請，但參與者（即你嘅小朋友）可以<strong>免費參加</strong>活動。
      </p>
      <ul>
        <li><strong>資助上限</strong>：全港性項目最多$100萬，地區項目最多$60萬</li>
        <li><strong>活動類型</strong>：藝術工作坊、運動體驗、STEM教育、親子活動</li>
        <li><strong>查詢</strong>：2810 3827 / coc@lwb.gov.hk</li>
      </ul>

      <h2>6. SmartPLAY 報名攻略</h2>
      <p>
        SmartPLAY 係康文署嘅新系統，取代舊嘅 Leisure Link。
        所有康文署嘅設施預訂同活動報名都經呢個系統處理。
      </p>
      <ul>
        <li><strong>登記</strong>：免費登記成為用戶，可以用「智方便」或電郵註冊</li>
        <li><strong>App下載</strong>：iOS App Store / Android Google Play 搜尋「SmartPLAY」</li>
        <li><strong>網站</strong>：<a href="https://www.smartplay.lcsd.gov.hk/" target="_blank" rel="noopener noreferrer">smartplay.lcsd.gov.hk</a></li>
        <li><strong>提示</strong>：熱門課程同設施好快滿，建議提早留意報名日期</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-grape/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 慳錢總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          全日制學生善用康文署半價優惠、每年4月留意音樂事務處報名、
          每星期 check 圖書館活動、留意自己嗰區嘅區議會活動——
          一年落嚟可以慳返幾千蚊興趣班開支。
        </p>
      </div>
    </ResourceLayout>
  );
}
