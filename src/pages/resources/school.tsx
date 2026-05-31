import ResourceLayout from "../../layouts/ResourceLayout";

export default function School() {
  return (
    <ResourceLayout
      meta={{
        title: "升學·慳錢指南 — 香港家長慳錢攻略",
        desc: "官津 vs 直私學費比較、幼稚園教育計劃資助、書簿津貼申請程序、興趣班開支分配——香港家長升學慳錢全攻略。",
        slug: "school",
        category: "升學慳錢",
      }}
    >
      <h1>🎒 升學·慳錢指南</h1>
      <p>
        香港由幼稚園到中學嘅教育開支可以相差好遠。
        揀啱學校類型同善用政府資助，可以慳返一大筆。
      </p>

      <h2>1. 官津 vs 直私學費比較</h2>
      <p>
        香港中小學主要分為四類，學費差距好大：
      </p>
      <ul>
        <li><strong>官立學校</strong>：政府開辦，學費全免</li>
        <li><strong>資助學校</strong>：政府資助，學費全免</li>
        <li><strong>直資學校</strong>：政府資助+收學費，每年約$6,000–$70,000</li>
        <li><strong>私立學校</strong>：自負盈虧，每年約$40,000–$200,000+</li>
        <li><strong>國際學校</strong>：每年約$100,000–$250,000</li>
      </ul>
      <p>
        慳錢策略：官津學校完全免費，質素亦唔差。
        如果考慮直資，可以揀學費較低嘅學校（如部分地區直資每年$6,000–$20,000）。
      </p>

      <h2>2. 幼稚園教育計劃（免費幼稚園）</h2>
      <p>
        教育局嘅<strong>幼稚園教育計劃</strong>
        為3–6歲合資格學童提供學費資助。
      </p>
      <ul>
        <li><strong>參加計劃嘅幼稚園</strong>：政府直接資助，家長只需交扣除資助後嘅學費</li>
        <li><strong>有經濟需要家庭</strong>：可額外申請學費減免，最高可獲全額資助</li>
        <li><strong>慳錢</strong>：揀參加計劃嘅幼稚園，每年可慳$10,000–$40,000</li>
        <li><strong>提提你</strong>：國際幼稚園、私立幼稚園通常唔參加計劃</li>
      </ul>

      <h2>3. 書簿津貼申請</h2>
      <p>
        中小學生可申請<strong>學校書簿津貼計劃</strong>。
      </p>
      <ul>
        <li><strong>申請時間</strong>：每年5–6月（新學年開始前）</li>
        <li><strong>全額津貼</strong>：小學約$3,500/年，中學約$4,000/年</li>
        <li><strong>半額津貼</strong>：全額嘅一半</li>
        <li><strong>申請資格</strong>：通過入息審查</li>
        <li><strong>申請方法</strong>：向在職家庭及學生資助事務處遞交</li>
      </ul>

      <h2>4. 興趣班 vs 補習開支分配</h2>
      <p>
        香港家長每年喺興趣班同補習嘅開支平均約$30,000–$60,000。
        以下係慳錢策略：
      </p>
      <ul>
        <li><strong>優先選擇政府免費/資助課程</strong>（見免費興趣班篇）</li>
        <li><strong>試堂先行</strong>：確認小朋友有興趣先報長期班</li>
        <li><strong>團體班 vs 私人班</strong>：團體班收費低好多</li>
        <li><strong>善用學校課外活動</strong>：大部分學校課外活動收費遠低於坊間</li>
        <li><strong>交換/二手教材</strong>：樂器、運動裝備可以買二手</li>
      </ul>

      <h2>5. 小一入學策略（慳錢版）</h2>
      <ul>
        <li><strong>自行分配學位</strong>：免費，計分制，唔使面試</li>
        <li><strong>統一派位</strong>：免費，大抽獎</li>
        <li><strong>叩門</strong>：部分學校可能需要報名費（約$50–$100）</li>
        <li><strong>直資/私立</strong>：需報名費（約$50–$200/間）+ 學費</li>
        <li><strong>慳錢策略</strong>：官津學校統一派位完全免費，
          叩門都只係象徵式收費。慳到嘅學費可以分配到興趣班</li>
      </ul>

      <h2>6. 幼稚園面試攻略（低成本版）</h2>
      <ul>
        <li><strong>面試班</strong>：坊間收費$200–$500/堂，其實唔係必需</li>
        <li><strong>免費資源</strong>：YouTube有大量面試模擬影片</li>
        <li><strong>親子共讀</strong>：每日同小朋友睇書講故事，已經係最好嘅面試準備</li>
        <li><strong>多帶小朋友去玩</strong>：去公園、圖書館、社區中心，增強社交同表達能力</li>
      </ul>

      <div className="mt-10 rounded-2xl bg-gradient-to-br from-coral/10 to-sun/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">📌 慳錢總結</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          最慳錢嘅升學策略：幼稚園揀參加教育計劃嘅學校、中小學行官津路線、
          每年5月記得申請書簿津貼、興趣班用政府免費/資助資源。
          咁樣由幼稚園到中學，可以慳超過$50萬。
        </p>
      </div>
    </ResourceLayout>
  );
}
