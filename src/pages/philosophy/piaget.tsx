import PhilosophyLayout from "../../layouts/PhilosophyLayout";

export default function Piaget() {
  return (
    <PhilosophyLayout
      meta={{
        title: "皮亞傑認知發展理論 — 小朋友唔係細碼大人",
        desc: "皮亞傑認知發展四階段：感官動作期、前運思期、具體運思期、形式運思期。香港家長實戰應用指南。",
        slug: "piaget",
      }}
    >
      <h1>🪜 皮亞傑認知發展理論</h1>
      <p className="lead">
        讓·皮亞傑（Jean Piaget）係瑞士心理學家，佢發現小朋友嘅思維方式唔係「大人諗少咗嘢」，
        而係<strong>完全唔同層次嘅思考結構</strong>。佢嘅理論改變咗全世界對兒童認知嘅理解。
      </p>

      <h2>四大認知發展階段</h2>

      <h3>階段一：感官動作期（0–2 歲）</h3>
      <p>
        呢個階段嘅BB用<strong>感官同動作</strong>嚟認識世界——睇、聽、摸、放入口、掉落地。
        最重要嘅里程碑係「物體恆存」：知道玩具收埋咗依然存在。
      </p>
      <ul>
        <li><strong>玩咩好</strong>：躲貓貓、搖鈴、布書、觸感玩具</li>
        <li><strong>家長貼士</strong>：同佢玩「唔見咗又出現」嘅遊戲，幫佢建立物體恆存概念</li>
        <li><strong>唔好做</strong>：唔好因為佢掉嘢就話佢曳——佢係喺度做實驗</li>
      </ul>

      <h3>階段二：前運思期（2–7 歲）</h3>
      <p>
        小朋友開始用<strong>符號</strong>思考——語言、模仿、角色扮演。
        但佢哋仲未懂「可逆性」（例如知道 2+3=5 但唔明 5-3=2）。
      </p>
      <ul>
        <li><strong>玩咩好</strong>：煮飯仔、角色扮演、畫畫、泥膠</li>
        <li><strong>家長貼士</strong>：佢話「我有咁高」時，唔好急住拆穿——自我中心係正常</li>
        <li><strong>數學概念</strong>：用實物教數（3 粒糖 + 2 粒糖 = 5 粒糖），唔好淨係背數字</li>
        <li><strong>香港常見問題</strong>：呢個階段催谷寫字/計數，效果通常適得其反</li>
      </ul>

      <h3>階段三：具體運思期（7–11 歲）</h3>
      <p>
        小朋友開始有<strong>邏輯思維</strong>，但需要具體事物支持。
        佢哋明「可逆性」同「守恆概念」（同樣嘅水倒落闊杯同窄杯，水量一樣）。
      </p>
      <ul>
        <li><strong>玩咩好</strong>：棋類、科學實驗、策略遊戲、LEGO</li>
        <li><strong>家長貼士</strong>：解釋時用具體例子——「慳錢」不如「買少一樣玩具就可以買本書」</li>
        <li><strong>香港應用</strong>：呢個階段適合學公文式、奧數，因為邏輯腦開始發展</li>
      </ul>

      <h3>階段四：形式運思期（11 歲+）</h3>
      <p>
        青少年開始可以<strong>抽象思考</strong>——推理假設情境、思考未來、質疑權威。
        呢個階段唔係人人達到，同教育環境好有關係。
      </p>
      <ul>
        <li><strong>玩咩好</strong>：辯論、編程、哲學討論</li>
        <li><strong>家長貼士</strong>：鼓勵佢質疑，唔好因為佢駁嘴就罰——思考能力緊要過服從</li>
      </ul>

      <h2>皮亞傑理論對香港家長嘅啟示</h2>

      <h3>📚 唔好「越級打怪」</h3>
      <p>
        香港好多家長喺前運思期就迫小朋友做具體運思期嘅嘢——背乘數表、寫複雜中文字、
        解應用題。皮亞傑話：<strong>認知發展有佢嘅時間表</strong>，急唔嚟。
      </p>

      <h3>🎯 經驗先於教學</h3>
      <p>
        小朋友要親身經歷先會明。你同一個 4 歲講「一百萬」同「十」嘅分別，
        不如俾佢數 10 粒糖再睇一大包糖——親身經驗先係最好嘅老師。
      </p>

      <h3>❓ 多問「點解」</h3>
      <p>
        皮亞傑最推崇嘅教學方法係<strong>認知衝突</strong>——等小朋友發現自己嘅諗法有矛盾，
        佢哋自然會調整思考方式。例如：「你話 5 歲大過 3 歲，咁 5 隻手指同 3 隻手指邊度多啲？」
      </p>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sun/10 to-peach/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          皮亞傑最值錢嘅觀念：<strong>小朋友唔係大人嘅迷你版，佢哋用完全唔同嘅方式諗嘢。</strong>
          與其催谷佢學大人嘅思考方式，不如俾時間佢行完每個階段。
        </p>
      </div>
    </PhilosophyLayout>
  );
}
