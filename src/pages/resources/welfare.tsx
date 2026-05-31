import ResourceLayout from "../../layouts/ResourceLayout";

export default function Welfare() {
  return (
    <ResourceLayout
      meta={{
        title: "兒童福利·補貼一覽 — 香港家長慳錢攻略",
        desc: "兒童醫療券、在職家庭津貼、書簿津貼、幼稚園教育計劃、兒童發展基金——一文整合香港政府兒童福利及補貼申請教學。",
        slug: "welfare",
        category: "政府福利",
      }}
    >
      <h1>💰 兒童福利·補貼一覽</h1>
      <p>
        香港政府有唔少兒童相關嘅福利同補貼，但好多家長都唔知可以申請。
        呢篇文幫你整合晒所有兒童福利，由醫療券到書簿津貼，
        睇清楚自己合唔合資格。
      </p>

      <h2>1. 兒童醫療券</h2>
      <p>
        衞生署嘅<strong>兒童健康服務</strong>為香港兒童提供免費嘅
        疫苗接種、生長發育監測、聽力視力篩查等服務。
        每位兒童喺指定母嬰健康院可獲得一系列免費檢查。
      </p>
      <ul>
        <li><strong>年齡</strong>：0–5歲</li>
        <li><strong>費用</strong>：免費</li>
        <li><strong>服務</strong>：疫苗接種、生長監測、發展篩查、聽力/視力測試</li>
        <li><strong>申請</strong>：到所屬地區嘅母嬰健康院登記</li>
        <li><strong>官網</strong>：<a href="https://www.fhs.gov.hk/" target="_blank" rel="noopener noreferrer">衞生署家庭健康服務</a></li>
      </ul>

      <h2>2. 在職家庭津貼（職津）</h2>
      <p>
        在職家庭及學生資助事務處嘅<strong>在職家庭津貼計劃</strong>，
        為低收入喺職家庭提供津貼。每名合資格兒童可獲額外津貼。
      </p>
      <ul>
        <li><strong>合資格</strong>：居港、在職、工時足夠、通過入息及資產審查</li>
        <li><strong>津貼額</strong>：每個兒童每月最高可獲$1,915（全額津貼）</li>
        <li><strong>申請</strong>：全年接受申請，可郵寄或親身遞交</li>
        <li><strong>官網</strong>：<a href="https://www.wfsfaa.gov.hk/" target="_blank" rel="noopener noreferrer">在職家庭及學生資助事務處</a></li>
      </ul>

      <h2>3. 幼稚園教育計劃</h2>
      <p>
        教育局嘅<strong>幼稚園教育計劃</strong>（免費優質幼稚園教育政策）
        為合資格學童提供學費資助。參加計劃嘅幼稚園收取低學費，
        有需要嘅家庭仲可以申請額外學費減免。
      </p>
      <ul>
        <li><strong>合資格</strong>：3–6歲香港居民兒童</li>
        <li><strong>資助</strong>：直接資助幼稚園，家長只需繳交扣除資助後嘅學費</li>
        <li><strong>額外減免</strong>：有經濟需要嘅家庭可申請學費減免</li>
        <li><strong>官網</strong>：<a href="https://www.edb.gov.hk/" target="_blank" rel="noopener noreferrer">教育局</a></li>
      </ul>

      <h2>4. 學校書簿津貼計劃</h2>
      <p>
        為就讀官立、資助、直資學校嘅中小學生提供書簿津貼。
        分為全額津貼同半額津貼，按家庭入息審查決定。
      </p>
      <ul>
        <li><strong>全額津貼</strong>：小學約$3,500/年，中學約$4,000/年</li>
        <li><strong>半額津貼</strong>：全額津貼嘅一半</li>
        <li><strong>申請</strong>：每年5–6月向教育局遞交</li>
      </ul>

      <h2>5. 兒童發展基金</h2>
      <p>
        社會福利署嘅<strong>兒童發展基金</strong>透過配對儲蓄計劃，
        鼓勵兒童建立儲蓄習慣。參加者每月儲$200，
        政府同私營機構會配對供款，三年後可獲約$42,000用於教育或發展用途。
      </p>
      <ul>
        <li><strong>年齡</strong>：10–16歲</li>
        <li><strong>計劃</strong>：每月儲蓄 + 政府/私人配對供款</li>
        <li><strong>用途</strong>：教育、興趣發展、技能培訓等</li>
        <li><strong>官網</strong>：<a href="https://www.cdf.gov.hk/" target="_blank" rel="noopener noreferrer">兒童發展基金</a></li>
      </ul>

      <h2>6. 學生車船津貼</h2>
      <p>
        為居住地離學校超遠嘅中小學生提供交通費資助。
        通過在職家庭及學生資助事務處申請。
      </p>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-sun/10 to-peach/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 慳錢總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          呢啲福利唔申請就嘥咗。每年5月留意書簿津貼申請、全年可申請在職家庭津貼、
          幼稚園選參加教育計劃嘅學校。有10歲以上小朋友嘅話，兒童發展基金嘅配對儲蓄好吸引。
        </p>
      </div>
    </ResourceLayout>
  );
}
