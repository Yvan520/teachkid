import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function BabyStage() {
  return (
    <PhilosophyLayout
      meta={{
        title: "0–3 歲感官萌芽期 — 湊B實戰指南",
        desc: "0–3歲BB嘅發展里程碑、適合嘅遊戲、注意事項。由睡眠到五感刺激，香港媽媽最需要嘅初生至學步期湊B攻略。",
        slug: "baby-stage",
      }}
    >
      <h1>🍼 0–3 歲感官萌芽期</h1>
      <p className="lead">
        呢個階段係BB發展最快嘅時期——由躺喺度到行得走得，由喊到講到單字句子。
        作為家長，你嘅角色係<strong>安全基地</strong>同<strong>感官導遊</strong>。
      </p>

      <h2>🥇 發展里程碑</h2>

      <h3>0–6 個月</h3>
      <ul>
        <li><strong>大肌肉</strong>：抬頭、轉身、扶坐</li>
        <li><strong>小肌肉</strong>：捉握搖鈴、雙手交疊</li>
        <li><strong>語言</strong>：對聲音有反應、發出牙牙學語聲</li>
        <li><strong>社交</strong>：對人笑、認得媽媽嘅面</li>
        <li><strong>香港貼士</strong>：健康院免費檢查跟足就得，唔使額外做評估</li>
      </ul>

      <h3>6–12 個月</h3>
      <ul>
        <li><strong>大肌肉</strong>：坐穩、爬行、扶站、可能行兩步</li>
        <li><strong>小肌肉</strong>：拇指食指捏細物件、兩手傳物</li>
        <li><strong>語言</strong>：理解簡單指令（「俾媽媽」）、講「爸」「媽」</li>
        <li><strong>社交</strong>：分離焦慮出現、陌生人焦慮</li>
        <li><strong>香港貼士</strong>：呢個階段最緊要係「地板時間」——俾佢喺地下自由探索</li>
      </ul>

      <h3>1–2 歲</h3>
      <ul>
        <li><strong>大肌肉</strong>：自己行、上樓梯（扶住）、踢波</li>
        <li><strong>小肌肉</strong>：亂畫、疊高幾塊積木</li>
        <li><strong>語言</strong>：識講 10–50 個詞彙、兩詞短句</li>
        <li><strong>社交</strong>：平行玩（同其他小朋友一齊但各自玩）</li>
      </ul>

      <h3>2–3 歲</h3>
      <ul>
        <li><strong>大肌肉</strong>：跑、跳、踩三輪車</li>
        <li><strong>小肌肉</strong>：用匙羹、打開容器</li>
        <li><strong>語言</strong>：講短句、問「呢個咩嚟㗎？」</li>
        <li><strong>社交</strong>：開始有分享概念，但仲係自我中心</li>
      </ul>

      <h2>🧸 玩咩好？（詳細版）</h2>

      <h3>觸感刺激</h3>
      <ul>
        <li>唔同質感嘅布書、觸感波</li>
        <li>感官袋（入面裝米/沙/水，封實俾佢摸）</li>
        <li>冰塊、暖水袋（有大人睇住）——溫度刺激</li>
      </ul>

      <h3>大肌肉發展</h3>
      <ul>
        <li>趴住玩（tummy time）——由每日幾分鐘開始</li>
        <li>障礙賽——用cushion整簡單嘅爬行路線</li>
        <li>公園滑梯、韆鞦——香港屋邨公園就係最好嘅健身室</li>
      </ul>

      <h3>語言刺激</h3>
      <ul>
        <li>同佢講嘢——換片、沖涼、食飯時描述你做緊嘅嘢</li>
        <li>睇繪本——唔係認字，而係指住圖畫講</li>
        <li>唱歌仔——廣東話童謠（月光光、氹氹轉）</li>
      </ul>

      <h2>💡 留意咩？（香港媽媽必睇）</h2>
      <ul>
        <li><strong>夠瞓係金</strong>：0–1歲每日 12–16 小時，1–2歲 11–14 小時——睡眠直接影響大腦發育</li>
        <li><strong>螢幕時間</strong>：WHO 建議 1 歲以下零螢幕，2 歲以下盡量避免——呢個係硬指標</li>
        <li><strong>健康院檢查</strong>：香港衞生署母嬰健康院提供免費生長監測同疫苗接種，記得跟時間表</li>
        <li><strong>安全感</strong>：呢個階段最緊要建立安全依附關係——佢喊你回應，唔會縱壞佢</li>
        <li><strong>唔好比壓力</strong>：每個BB發展速度唔同，唔好同人比較——你個B 13個月先行唔代表有問題</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-mint/10 to-sky/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          0–3 歲最緊要嘅三樣嘢：<strong>安全感、感官刺激、足夠睡眠。</strong>
          香港生活節奏快，但BB需要嘅好簡單——你嘅陪伴同關注就係最好嘅教育。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
