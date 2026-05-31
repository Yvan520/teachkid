import ArticleLayout from "../../layouts/ArticleLayout";

export default function StudyHabits() {
  return (
    <ArticleLayout
      meta={{
        title: "學習習慣 — 專注力唔係操返嚟，係養出嚟",
        desc: "幾時開始學寫字？點樣培養閱讀習慣？電子產品泛濫嘅年代點樣保護小朋友嘅專注力？香港父母專用學習指南。",
        slug: "study-habits",
        category: "學習習慣",
      }}
    >
      <h1>📚 學習習慣：專注力唔係操返嚟，係養出嚟</h1>

      <p>
        香港家長對「學習」呢兩個字特別緊張。幾時開始認字？幾時開始寫字？人哋個仔 3 歲已經認到 100 個字咁我個仔點算？
        先冷靜落嚟——學前嘅學習習慣，重點唔係量，而係<strong>質</strong>同<strong>動機</strong>。
      </p>

      <h2>寫字預備：幾時先可以開始？</h2>
      <p>
        好多香港家長喺 K1 就開始迫小朋友寫字，但其實<strong>手部小肌肉未發展成熟</strong>，
        太早寫字只會令小朋友反感，仲可能影響執筆姿勢。以下係發展時間表：
      </p>
      <ul>
        <li><strong>2-3 歲</strong>：塗鴉、搓泥膠、撕紙——鍛煉手部肌肉</li>
        <li><strong>3-4 歲</strong>：畫直線、圓圈、交叉——寫字嘅前期預備</li>
        <li><strong>4-5 歲</strong>：開始學寫自己個名、簡單中文字（大字形）</li>
        <li><strong>5-6 歲</strong>：正式寫中文字，但注意筆順同空間感</li>
      </ul>
      <p>
        <strong>重點</strong>：與其迫佢寫字，不如多啲俾佢玩 Lego、泥膠、穿珠仔——呢啲先係真正幫到手部發展嘅活動。
      </p>

      <h2>閱讀習慣：由零開始嘅 3 個階段</h2>

      <h3>階段一：BB 都睇書（0-2 歲）</h3>
      <ul>
        <li>布書、硬卡書，由佢咬、摷、掉——呢個都算「睇書」</li>
        <li>每日 5 分鐘就夠，重點係親子時光，唔係學嘢</li>
      </ul>

      <h3>階段二：故事時間（2-4 歲）</h3>
      <ul>
        <li>每日固定時間講故事（例如睡前）</li>
        <li>由佢揀書，哪怕同一本書講足一個月——重複係佢嘅學習方式</li>
        <li>用廣東話講，唔好硬繃繃讀字——加啲動作、扮聲，好玩先會繼續</li>
      </ul>

      <h3>階段三：自主閱讀萌芽（4-6 歲）</h3>
      <ul>
        <li>屋企要有書架，等佢自己拎到嘅高度</li>
        <li>你睇書，佢就會睇書——身教永遠最有效</li>
        <li>唔好逼佢認字，故事係先，認字係後</li>
      </ul>

      <h2>電子產品 vs 專注力</h2>
      <p>
        呢個係香港家長最頭痛嘅問題。手機、iPad、YouTube Kids——電子產品唔係魔鬼，
        但佢嘅設計本身係<strong>搶注意力</strong>，唔係<strong>訓練專注力</strong>。
      </p>
      <ul>
        <li><strong>2 歲以下</strong>：盡量避免，世界衞生組織建議 0 螢幕時間</li>
        <li><strong>2-5 歲</strong>：每日唔超過 1 小時，最好一齊睇、一齊討論</li>
        <li><strong>5 歲以上</strong>：制定規則，例如「做完功課先睇」、「睇完一集就要休息」</li>
        <li><strong>代替方案</strong>：玩具、圖書、戶外活動——呢啲先係建設性專注力嘅來源</li>
      </ul>
      <p>
        <strong>小貼士</strong>：如果小朋友已經習慣睇片，可以由「睇片 → 做相關活動」開始，
        例如睇完一集關於恐龍嘅片，就一齊畫恐龍、用泥膠整恐龍——將被動接收變主動創作。
      </p>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sun/10 to-peach/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          學前嘅學習，唔係學知識，而係<strong>學「學習」呢件事係好玩嘅</strong>——呢個態度，會陪佢行好遠。
        </p>
      </div>
    </ArticleLayout>
  );
}
