import ArticleLayout from "../../layouts/ArticleLayout";

export default function Emotion() {
  return (
    <ArticleLayout
      meta={{
        title: "情緒社交 — 由分離焦慮到情緒韌性",
        desc: "香港小朋友壓力唔細，由分離焦慮到社交退縮，教你一步步幫仔女建立情緒韌性。廣東話育兒實戰指南。",
        slug: "emotion",
        category: "情緒社交",
      }}
    >
      <h1>💗 情緒社交：由分離焦慮到情緒韌性</h1>

      <p>
        香港嘅小朋友，其實壓力一啲都唔細。返學、興趣班、社交、家長期望……佢哋細細個就要面對好多情緒衝擊。
         但可惜嘅係，我哋成日急住同佢哋講<strong>「唔好喊啦」</strong>、
         <strong>「冇事嘅」</strong>、<strong>「幾大個啦仲喊」</strong>——呢啲說話，無意中否定咗佢哋嘅感受。
      </p>

      <h2>第一步：接納情緒，唔係解決問題</h2>
      <p>
        小朋友喊、發脾氣、扭計，好多時候佢哋需要嘅唔係解決方案，而係<strong>俾人聽到</strong>。
        你可以試吓咁樣回應：
      </p>
      <ul>
        <li><strong>「你好嬲因為唔可以繼續玩，係咪？」</strong> —— 反映佢嘅感受</li>
        <li><strong>「我知道你而家好唔開心，媽媽喺度陪你。」</strong> —— 陪伴，唔係說教</li>
        <li><strong>「你想喊可以喊一陣，喊完我哋一齊諗辦法。」</strong> —— 比空間，唔係急住收聲</li>
      </ul>

      <h2>分離焦慮：返學喊到拆天，點算？</h2>
      <p>
        香港好多小朋友由 N 班開始就要面對分離焦慮。家長最常犯嘅錯係<strong>偷偷走咗去</strong>，
        咁樣小朋友會更加驚，因為佢唔知媽媽幾時會消失。
      </p>
      <ul>
        <li><strong>建立「再見儀式」</strong>：同一個動作、同一句說話，每次一樣，例如「同媽媽擊掌，然後講再見，放學見」</li>
        <li><strong>唔好「偷走」</strong>：即使喊都要正式講再見，等小朋友知道媽媽會講明先走</li>
        <li><strong>帶過渡物</strong>：一條小手帕、一張家庭相，俾佢攬住返學</li>
        <li><strong>老師係盟友</strong>：同老師夾好，你走之後老師即刻帶佢去玩，分散注意力</li>
      </ul>

      <h2>社交焦慮：怕人、怕事、怕新環境</h2>
      <p>
        有啲小朋友天生比較慢熱，喺香港呢個快節奏嘅社會，家長成日好擔心：「點解人哋個仔咁主動，我個仔就成日匿埋？」
      </p>
      <ul>
        <li><strong>唔好標籤</strong>：唔好當住佢面同人講「佢怕醜㗎」，呢個標籤會跟住佢</li>
        <li><strong>先觀察，後參與</strong>：容許佢用 10-15 分鐘觀察環境，先慢慢加入</li>
        <li><strong>一對一玩</strong>：約一個朋友仔單對單玩，比一大班人易好多</li>
        <li><strong>角色扮演</strong>：喺屋企用公仔模擬社交情境，練習講「我可唔可以一齊玩？」</li>
      </ul>

      <h2>香港媽媽最需要記住嘅一件事</h2>
      <p>
        <strong>你唔需要做一個「永遠冷靜」嘅媽媽。</strong>你自己都有情緒，你可以同小朋友講：
        「媽媽而家都有啲忟，俾啲時間媽媽抖吓，一陣再同你傾。」——呢個本身就係最好嘅情緒教育。
      </p>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-coral/10 to-peach/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 一句總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          情緒教育嘅核心，唔係教小朋友唔好喊，而係等佢知道：<strong>無論你喊唔喊，爸爸媽媽都喺度。</strong>
        </p>
      </div>
    </ArticleLayout>
  );
}
