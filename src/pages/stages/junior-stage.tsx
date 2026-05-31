import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function JuniorStage() {
  return (
    <PhilosophyLayout
      meta={{
        title: "6–10 歲能力建構期 — 小學階段實戰指南",
        desc: "6–10歲小朋友嘅發展重點、團隊運動同興趣培養、學習習慣建立。香港小學生家長必睇——成績以外嘅成長指南。",
        slug: "junior-stage",
      }}
    >
      <h1>🚀 6–10 歲能力建構期</h1>
      <p className="lead">
        小學階段係小朋友從「遊戲中學習」過渡到「系統性學習」嘅關鍵期。
        佢哋嘅邏輯思維開始發展，可以理解規則、策略同抽象概念。
      </p>

      <h2>🥇 發展里程碑</h2>

      <h3>6–7 歲</h3>
      <ul>
        <li><strong>大肌肉</strong>：跳繩、拋接球、平衡力大大提升</li>
        <li><strong>小肌肉</strong>：寫字更流暢、畫畫更精細</li>
        <li><strong>認知</strong>：開始明「守恆概念」、懂簡單加減</li>
        <li><strong>社交</strong>：友誼變重要、開始有 best friend</li>
      </ul>

      <h3>7–9 歲</h3>
      <ul>
        <li><strong>邏輯</strong>：懂因果關係、分類、排序</li>
        <li><strong>情緒</strong>：開始理解複雜情緒（尷尬、自豪、內疚）</li>
        <li><strong>社交</strong>：團隊合作、懂規則、會競爭</li>
      </ul>

      <h3>9–10 歲</h3>
      <ul>
        <li><strong>認知</strong>：可以進行簡單推理同計劃</li>
        <li><strong>社交</strong>：朋輩影響力大增、開始有自己嘅意見</li>
        <li><strong>道德</strong>：發展正義感、公平概念</li>
      </ul>

      <h2>🧸 玩咩好？（詳細版）</h2>

      <h3>團隊運動</h3>
      <ul>
        <li>足球、籃球、排球——學合作同策略</li>
        <li>游泳——康文署體育班（全日制半價）</li>
        <li>跑步、田徑——培養耐力同目標感</li>
      </ul>

      <h3>策略遊戲</h3>
      <ul>
        <li>棋類：象棋、飛行棋、大富翁——學策略思考</li>
        <li>卡牌遊戲：UNO、橋牌——學規則同記憶</li>
        <li>桌上遊戲：為咗贏要計劃同預測</li>
      </ul>

      <h3>創意活動</h3>
      <ul>
        <li>科學實驗套裝——滿足佢嘅好奇心</li>
        <li>LEGO Technic、機械人——工程思維</li>
        <li>畫畫、陶藝、音樂——揀一樣佢真心鍾意嘅</li>
      </ul>

      <h2>📚 學習習慣建立</h2>

      <h3>閱讀習慣</h3>
      <ul>
        <li><strong>每日閱讀 20 分鐘</strong>——比補習更有效</li>
        <li><strong>唔好限制題材</strong>：漫畫、小說、科普——佢鍾意睇就得</li>
        <li><strong>圖書館係寶藏</strong>：公共圖書館免費借書，每兩星期去一次</li>
      </ul>

      <h3>時間管理</h3>
      <ul>
        <li>用視覺化時間表——做完一樣貼一個剔</li>
        <li>設定固定做功課時間——放學後先抖 30 分鐘再做</li>
        <li>用計時器——「我哋睇吓 20 分鐘做到幾多」</li>
      </ul>

      <h3>自主學習</h3>
      <ul>
        <li>唔好即刻俾答案——「你覺得可以點樣搵答案？」</li>
        <li>鼓勵佢自己規劃——星期六想學咩、玩咩</li>
        <li>失敗係學習——考試唔理想時，一齊睇錯咩而唔係鬧</li>
      </ul>

      <h2>💡 留意咩？（香港家長必睇）</h2>
      <ul>
        <li><strong>成績以外</strong>：自信、抗逆力、社交能力——呢啲比分數更重要</li>
        <li><strong>鼓勵發問</strong>：唔係標準答案，而係思考過程——「你點樣諗到呢個答案㗎？」</li>
        <li><strong>適度放手</strong>：等佢自己執書包、自己記住帶功課——佢會學到責任</li>
        <li><strong>興趣班唔好太多</strong>：每星期 2–3 樣就夠，留時間俾佢發夢同放空</li>
        <li><strong>戶外時間</strong>：每日至少 1 小時——放電對專注力有好大幫助</li>
        <li><strong>香港資源</strong>：康文署運動班、圖書館活動、博物館免費日——善用政府資源</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-grape/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          6–10 歲最關鍵嘅唔係成績，而係<strong>保護學習動機、建立良好習慣、發展社交能力</strong>。
          香港教育壓力大，但家長可以做嘅係——做佢嘅避風港，唔係第二個壓力來源。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
