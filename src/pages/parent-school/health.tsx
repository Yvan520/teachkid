import ArticleLayout from "../../layouts/ArticleLayout";

export default function Health() {
  return (
    <ArticleLayout
      meta={{
        title: "健康成長 — 由睡眠到疫苗，還原基本步",
        desc: "衞生署兒童健康服務指南、生長線解讀、睡眠時數建議——香港媽媽最需要嘅兒童健康知識。",
        slug: "health",
        category: "健康成長",
      }}
    >
      <h1>🩺 健康成長：由睡眠到疫苗，還原基本步</h1>

      <p>
        健康永遠係第一位。香港家長好多時候 focus 喺學術、興趣班，但其實最影響小朋友發展嘅，
        係最基本嘅嘢：<strong>瞓得好唔好、食得均衡唔均衡、有冇跟到健康院嘅檢查</strong>。
      </p>

      <h2>睡眠：香港小朋友普遍唔夠瞓</h2>
      <p>
        根據衞生署嘅建議，各年齡層需要嘅睡眠時間如下：
      </p>
      <ul>
        <li><strong>0-3 個月</strong>：14-17 小時</li>
        <li><strong>4-11 個月</strong>：12-16 小時（包括日間小睡）</li>
        <li><strong>1-2 歲</strong>：11-14 小時</li>
        <li><strong>3-5 歲</strong>：10-13 小時</li>
        <li><strong>6-10 歲</strong>：9-12 小時</li>
      </ul>
      <p>
        但現實係——香港好多 K1-K3 小朋友夜晚 10 點、11 點先瞓，第二朝 6 點幾又要起身返學。
        長期睡眠不足會影響身高發育、免疫力、專注力，甚至情緒穩定。
      </p>
      <p>
        如果你小朋友成日病、成日扭計、上堂唔專心——先唔好諗係咪要補習，<strong>睇吓佢有冇瞓夠先</strong>。
      </p>

      <h3>改善睡眠嘅實用貼士</h3>
      <ul>
        <li><strong>固定 bedtime routine</strong>：沖涼 → 講故事 → 關燈 → 瞓覺，每日一樣</li>
        <li><strong>睡前 1 小時唔好睇屏幕</strong>：藍光會抑制褪黑激素，搞到好難入睡</li>
        <li><strong>留意下午嘅小睡時間</strong>：如果黃昏先午睡，夜晚自然唔會早瞓</li>
      </ul>

      <h2>生長線：你睇得明生長圖表嗎？</h2>
      <p>
        香港衞生署同私家醫生都會用嘅生長圖表，係評估小朋友發育嘅重要工具。
        好多家長一見到自己個仔喺 15 百分比就好緊張，但其實<strong>重點唔係數字高低，而係生長趨勢</strong>。
      </p>
      <ul>
        <li>只要小朋友沿住自己嘅生長線穩定上升，就冇問題</li>
        <li>如果突然跌咗兩個 major percentiles（例如由 50 跌到 15），就要留意，可能需要見醫生</li>
        <li>唔好同人哋比較——每個小朋友都有自己嘅生長節奏</li>
      </ul>

      <h2>疫苗接種：跟足衛生署時間表</h2>
      <p>
        香港兒童免疫接種計劃涵蓋嘅疫苗包括：卡介苗、乙型肝炎、白喉、破傷風、百日咳、
        小兒麻痺、肺炎球菌、麻疹、流行性腮腺炎、德國麻疹、水痘等等。
      </p>
      <ul>
        <li>初生至 5 歲：大約要打 10 幾針</li>
        <li>政府母嬰健康院提供免費接種</li>
        <li>部分疫苗（如輪狀病毒、腦膜炎雙球菌）係自費嘅，可以同醫生商量</li>
      </ul>
      <p>
        <strong>小貼士</strong>：下載衞生署嘅「<strong>免疫接種記錄</strong>」APP，可以睇到小朋友嘅接種時間表同記錄，
        唔怕漏打。
      </p>

      <h2>香港媽媽必知嘅衞生署服務</h2>
      <ul>
        <li><strong>母嬰健康院</strong>：由初生到 5 歲嘅定期檢查，包括生長監測、發展評估、疫苗接種</li>
        <li><strong>學生健康服務</strong>：小一至中六嘅年度健康檢查</li>
        <li><strong>家庭健康服務</strong>：母乳餵哺支援、產前產後服務</li>
      </ul>
      <p>
        好多家長唔知道，母嬰健康院嘅服務<strong>全部免費</strong>——唔好浪費呢個資源。
      </p>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-peach/10 to-sun/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          健康嘅基礎係<strong>夠瞓、均衡飲食、跟足檢查</strong>——呢三樣做好晒，
          先好諗其他嘢。基本步站得穩，行先會行得遠。
        </p>
      </div>
    </ArticleLayout>
  );
}
