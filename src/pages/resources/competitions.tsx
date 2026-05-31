import ResourceLayout from "../../layouts/ResourceLayout";

export default function Competitions() {
  return (
    <ResourceLayout
      meta={{
        title: "免費/低收費比賽·證書指南 — 香港家長慳錢攻略",
        desc: "香港學校朗誦節（~$100）、音樂節、語常會免費普通話朗誦比賽、GAPSK資助考試——低門檻、高認受性嘅兒童比賽及證書攻略。",
        slug: "competitions",
        category: "比賽·證書",
      }}
    >
      <h1>🏆 免費/低收費比賽·證書</h1>
      <p>
        比賽同證書唔一定要好貴。香港有好多政府或非牟利機構舉辦嘅比賽，
        報名費低至免費，證書認受性高，對小朋友升學同建立自信都好有幫助。
      </p>

      <h2>1. 香港學校朗誦節</h2>
      <p>
        由香港學校音樂及朗誦協會主辦，每年一度嘅全港大型朗誦比賽，
        涵蓋粵語、普通話、英語朗誦。幼稚園同小學都有得參加。
      </p>
      <ul>
        <li><strong>費用</strong>：約$100–$200/項</li>
        <li><strong>年齡</strong>：幼稚園至中學</li>
        <li><strong>語言</strong>：粵語、普通話、英語</li>
        <li><strong>報名</strong>：經學校報名，每年9–10月開始</li>
        <li><strong>證書</strong>：全部參加者都有參與證書，優勝者有獎盃/獎狀</li>
        <li><strong>官網</strong>：<a href="https://www.hksmsa.org.hk/" target="_blank" rel="noopener noreferrer">香港學校音樂及朗誦協會</a></li>
      </ul>

      <h2>2. 香港學校音樂節</h2>
      <p>
        同樣由香港學校音樂及朗誦協會主辦，每年有大量音樂比賽項目，
        包括鋼琴、小提琴、聲樂、管樂、敲擊樂等。
      </p>
      <ul>
        <li><strong>費用</strong>：約$150–$300/項</li>
        <li><strong>年齡</strong>：幼稚園至中學</li>
        <li><strong>項目</strong>：鋼琴、小提琴、聲樂、管樂、合唱團等</li>
        <li><strong>報名</strong>：經學校或私人老師報名</li>
        <li><strong>證書</strong>：全部參加者可獲評語及證書</li>
      </ul>

      <h2>3. 語常會普通話朗誦比賽（免費）</h2>
      <p>
        語文教育及研究常務委員會（語常會）每年舉辦多個推廣普通話嘅比賽，
        大部分<strong>費用全免</strong>。例如「周有光杯」普通話朗誦比賽、
        「晨曦」全港中小學普通話誦讀比賽等。
      </p>
      <ul>
        <li><strong>費用</strong>：免費</li>
        <li><strong>年齡</strong>：小學至中學</li>
        <li><strong>語言</strong>：普通話</li>
        <li><strong>證書</strong>：參加者獲發證書，優勝者有獎盃</li>
        <li><strong>官網</strong>：<a href="https://scolarhk.edb.hkedcity.net/" target="_blank" rel="noopener noreferrer">語常會網站</a></li>
      </ul>

      <h2>4. GAPSK 普通話水平考試（可申請資助）</h2>
      <p>
        GAPSK 係幼稚園同小學普通話水平測試，分為初級、中級、高級。
        部分學校同機構有<strong>資助名額</strong>，
        可以免費或低收費應考。
      </p>
      <ul>
        <li><strong>費用</strong>：原價約$500–$800，可向學校查詢資助</li>
        <li><strong>年齡</strong>：K2–小六</li>
        <li><strong>認受性</strong>：教育局認可嘅普通話水平測試</li>
      </ul>

      <h2>5. Cambridge YLE 考試（可申請資助）</h2>
      <p>
        Cambridge Young Learners English Tests（Starters / Movers / Flyers）係國際認可嘅兒童英語考試。
        部分學校及社福機構提供<strong>考試資助計劃</strong>。
      </p>
      <ul>
        <li><strong>費用</strong>：原價約$600–$900，可查詢學校有冇資助</li>
        <li><strong>年齡</strong>：6–12歲</li>
        <li><strong>認受性</strong>：國際認可，對升中有幫助</li>
      </ul>

      <h2>6. 香港兒童朗誦公開賽</h2>
      <p>
        坊間有唔同機構舉辦兒童朗誦公開賽，
        費用由$100–$300不等，大多有參與證書。
        可以留意各區文化中心同社區中心嘅通告。
      </p>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-coral/10 to-peach/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 慳錢總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          朗誦節同音樂節係性價比最高嘅比賽，費用低、認受性高、全部參加者都有證書。
          語常會嘅比賽更加係免費。一年揀1–2個比賽參加，小朋友有目標之餘開支又唔大。
        </p>
      </div>
    </ResourceLayout>
  );
}
