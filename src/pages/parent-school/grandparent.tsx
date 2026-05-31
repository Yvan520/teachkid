import ArticleLayout from "../../layouts/ArticleLayout";

export default function Grandparent() {
  return (
    <ArticleLayout
      meta={{
        title: "隔代教養 — 長老湊孫，係恩賜亦係學問",
        desc: "香港雙職家庭多，爺爺嫲嫲外公外婆係最強後盾。但觀念衝突點樣化解？同住相處有咩要注意？廣東話隔代教養指南。",
        slug: "grandparent",
        category: "隔代教養",
      }}
    >
      <h1>👨‍👩‍👧‍👦 隔代教養：長老湊孫，係恩賜亦係學問</h1>

      <p>
        香港地，雙職家庭係常態。根據統計，超過一半嘅香港家庭有長老幫忙湊孫。
        呢個安排有好嘅一面——長輩有經驗、有愛心、又信得過——但同時亦帶嚟唔少摩擦。
      </p>

      <h2>最常衝突嘅 3 個範疇</h2>

      <h3>1. 飲食習慣</h3>
      <p>
        長老最鍾意講嘅一句：「以前我咪咁湊大你嘅！」問題係——時代唔同咗。
      </p>
      <ul>
        <li><strong>長輩覺得</strong>：要食得飽、多飯多肉、細個食鹽冇問題</li>
        <li><strong>你覺得</strong>：少鹽少糖、均衡營養、自主進食</li>
        <li><strong>解決方法</strong>：唔好正面衝突。由醫生/健康院把口講出嚟：「健康院姑娘話呢個階段最好……」——長輩通常信專業多過信你</li>
      </ul>

      <h3>2. 管教方式</h3>
      <ul>
        <li><strong>長輩覺得</strong>：細路要鬧、要怕、要聽話；縱壞咗就大件事</li>
        <li><strong>你覺得</strong>：多啲鼓勵、少啲鬧、俾空間佢探索</li>
        <li><strong>解決方法</strong>：分清楚「大原則」同「小細節」。安全/健康係大原則，冇得讓步；但其餘嘅（例如着多件衫定少件衫、今日食咩生果）—由長老話事，佢都有佢嘅面子</li>
      </ul>

      <h3>3. 電子產品</h3>
      <ul>
        <li><strong>長輩覺得</strong>：俾佢睇一陣電話咪好囉，我可以抖吓</li>
        <li><strong>你覺得</strong>：又睇電話？對眼會近視㗎！</li>
        <li><strong>解決方法</strong>：同長老坐低傾，唔好怪佢。佢一個湊幾個鐘，梗係想抖吓。你可以幫長老諗定代替方案——例如開定 YouTube 嘅兒歌 playlist（有得睇有得聽，但比 TikTok 好）、或者準備定一盒佢可以自己玩嘅玩具</li>
      </ul>

      <h2>同住 vs 唔同住：相處之道</h2>

      <h3>同住家庭</h3>
      <ul>
        <li><strong>劃清「父母時間」</strong>：每日至少半個鐘，長老唔插手，得你同小朋友獨處</li>
        <li><strong>唔好喺小朋友面前爭論</strong>：有意見唔啱，返房傾。小朋友見到大人爭執會混亂</li>
        <li><strong>感謝要講出口</strong>：長老幫手湊孫，唔係理所當然。每日講句「唔該晒媽媽」——呢句說話好有用</li>
      </ul>

      <h3>唔同住（長老上門湊 / 送去長老屋企）</h3>
      <ul>
        <li><strong>建立交接日記</strong>：用 WhatsApp 或者一本簿，寫低今日食咗咩、瞓咗幾耐、有咩特別嘢</li>
        <li><strong>放假自己湊</strong>：週末盡量自己湊，等長老唞吓，都等小朋友同你保持親密</li>
        <li><strong>唔好「用完即棄」</strong>：長老幫你湊足五日，放假你帶走細路去玩，長老其實可能想見個孫——平衡吓</li>
      </ul>

      <h2>一句話，殺傷力最大</h2>
      <p>
        「你咁湊唔啱㗎！」——無論係你同長老講，定長老同你講，呢句說話一出口，大家即刻企喺對立面。
      </p>
      <p>
        試吓轉換講法：<strong>「我明你嘅做法，不過我最近睇咗篇文章，話而家嘅建議係……」</strong>
        ／ <strong>「你湊得好好呀，不過呢樣嘢我可唔可以試吓用第二個方法？」</strong>
      </p>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-grape/10 to-mint/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          隔代教養最需要嘅，唔係「邊個啱」，而係<strong>互相尊重</strong>。
          長老有佢嘅經驗，你有你嘅知識——夾埋嚟用，先係對小朋友最好。
        </p>
      </div>
    </ArticleLayout>
  );
}
