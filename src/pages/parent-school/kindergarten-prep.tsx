import ArticleLayout from "../../layouts/ArticleLayout";

export default function KindergartenPrep() {
  return (
    <ArticleLayout
      meta={{
        title: "幼稚園入學 — N班？K1？面試？一次過同你拆解",
        desc: "香港幼稚園申請流程、面試準備、選校攻略——本地學校、國際學校、蒙特梭利，邊間最啱你個仔女？香港父母必睇指南。",
        slug: "kindergarten-prep",
        category: "幼稚園入學",
      }}
    >
      <h1>🎒 幼稚園入學：N班？K1？面試？一次過同你拆解</h1>

      <p>
        喺香港，幼稚園申請可以話係家長第一場「打仗」。
        幾時報名？要準備咩文件？面試考啲咩？邊間學校好？——以下幫你逐樣拆解。
      </p>

      <h2>N 班 vs K1：到底報唔報 N 班？</h2>
      <p>
        香港嘅學前教育分為 N 班（兩歲班／PN）同 K1（幼兒班）。
        好多家長都會問：<strong>「係咪一定要讀 N 班？」</strong>
      </p>
      <ul>
        <li><strong>N 班（2 歲）</strong>：冇規定要讀，但如果你想小朋友早啲適應群體生活、或者你係在職父母需要日託，N 班係好選擇</li>
        <li><strong>K1（3 歲）</strong>：香港嘅免費幼稚園教育由 K1 開始，基本上大部分小朋友都會讀</li>
      </ul>
      <p>
        <strong>小貼士</strong>：如果你打算俾小朋友讀 N 班，要留意大部分學校係「K1 優先收返自己 N 班學生」，
        所以如果心儀嘅學校有 N 班，報 N 班其實係一種策略。
      </p>

      <h2>申請時間表（每年大致相同）</h2>
      <ul>
        <li><strong>9-10 月</strong>：學校開放日／簡介會，開始派發申請表</li>
        <li><strong>10-11 月</strong>：遞交申請，部分學校開始面試</li>
        <li><strong>11-12 月</strong>：面試高峰期</li>
        <li><strong>1-3 月</strong>：陸續出結果</li>
        <li><strong>4-5 月</strong>：註冊，統一註冊日期（只可以揀一間）</li>
      </ul>

      <h2>面試準備：考小朋友定考家長？</h2>
      <p>
        香港幼稚園面試，表面係睇小朋友，實際上<strong>都係睇家長</strong>。
        學校想知嘅係：呢個家庭嘅教育理念同我哋夾唔夾？家長會唔會配合學校？
      </p>

      <h3>小朋友方面</h3>
      <ul>
        <li><strong>基本指令</strong>：俾老師叫名有反應、坐低玩玩具、收玩具</li>
        <li><strong>認知</strong>：認顏色、形狀、動物——唔需要識晒，但要有基本概念</li>
        <li><strong>語言</strong>：可以用簡單句子表達（2 歲講單詞、3 歲講短句）</li>
        <li><strong>社交</strong>：肯同其他小朋友一齊玩，唔會打人/搶玩具</li>
      </ul>

      <h3>家長方面</h3>
      <ul>
        <li>點解揀我哋學校？（唔好答「因為近」——了解學校嘅教學理念先答）</li>
        <li>你對小朋友有咩期望？（唔好話「想佢成龍成鳳」——學校想聽到「希望佢開心學習」）</li>
        <li>平日邊個湊？（如實回答，唔好作）</li>
      </ul>

      <h2>選校攻略：本地 vs 國際 vs 蒙特梭利</h2>
      <ul>
        <li><strong>本地學校</strong>：跟教育局課程，學術基礎較強，適合傳統升學路線。收費相宜（免費幼稚園計劃）</li>
        <li><strong>國際學校</strong>：英文語境好，活動教學，但學費貴，而且升小學通常要繼續行國際路線</li>
        <li><strong>蒙特梭利／華德福</strong>：以兒童為中心，重視自主探索。適合鍾意自由發揮嘅小朋友，但要留意銜接傳統小學嘅適應</li>
      </ul>

      <h2>香港家長最易犯嘅 3 個錯誤</h2>
      <ul>
        <li><strong>報太多間</strong>：面試對小朋友來講係壓力，報 10 間即係要佢承受 10 次壓力。建議 4-6 間就夠</li>
        <li><strong>面試前操練</strong>：小朋友睇得出係「背答案」定「真係識」。放鬆啲，平時點就點</li>
        <li><strong>忽略學校環境</strong>：名氣唔代表一切。去開放日感受吓——老師有冇愛心？學校個 feel 你鍾唔鍾意？呢啲比排名重要得多</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sky/10 to-grape/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          幼稚園係小朋友第一次離家學習——揀一間<strong>適合佢性格</strong>嘅學校，
          比揀一間「出名」嘅學校，重要一千倍。
        </p>
      </div>
    </ArticleLayout>
  );
}
