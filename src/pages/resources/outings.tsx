import ResourceLayout from "../../layouts/ResourceLayout";

export default function Outings() {
  return (
    <ResourceLayout
      meta={{
        title: "免費親子好去處 — 香港家長慳錢攻略",
        desc: "逢周三免費博物館、香港公園、海濱長廊、公共遊樂場、地質公園——跟 SunnyHK 發掘香港免費親子好去處。",
        slug: "outings",
        category: "親子好去處",
      }}
    >
      <h1>🎡 免費親子好去處</h1>
      <p>
        香港唔係得迪士尼同海洋公園。其實有好多免費嘅親子好去處，
        可以同小朋友玩足一日都唔使點使錢。呢篇文幫你整合各大免費景點，
        仲會連結 SunnyHK 嘅詳細攻略。
      </p>

      <h2>🏛️ 博物館（逢周三免費）</h2>
      <p>
        康文署轄下多間博物館逢<strong>星期三免費入場</strong>，
        包括常設展覽。太空館、科學館尤其受小朋友歡迎。
      </p>
      <ul>
        <li><strong>香港科學館</strong>：互動展品多，小朋友玩足半日</li>
        <li><strong>香港太空館</strong>：天象節目、太空展覽</li>
        <li><strong>香港歷史博物館</strong>：認識香港歷史文化</li>
        <li><strong>香港文化博物館</strong>：兒童探知館專為小朋友設計</li>
        <li><strong>孫中山紀念館</strong>：免費導賞活動</li>
        <li><strong>提示</strong>：星期三免費僅限常設展覽，專題展覽可能要收費</li>
      </ul>

      <h2>🌳 公園·動植物園</h2>
      <p>
        香港有多個免費入場嘅公園同動植物園，
        係周末放電嘅好去處。
      </p>
      <ul>
        <li><strong>香港動植物公園</strong>：免費，有猿猴、雀鳥、哺乳類動物</li>
        <li><strong>香港公園</strong>：溫室、觀鳥園、兒童遊樂場，全部免費</li>
        <li><strong>九龍公園</strong>：泳池、迷宮花園、鳥湖</li>
        <li><strong>維多利亞公園</strong>：大草地、遊樂場、游泳池</li>
        <li><strong>彭福公園</strong>：大草地、放風箏、踩單車</li>
      </ul>

      <h2>🌊 海濱長廊·單車徑</h2>
      <ul>
        <li><strong>西九文化區海濱長廊</strong>：超大草地，睇日落維港</li>
        <li><strong>將軍澳海濱長廊</strong>：踩單車、放狗、跑步</li>
        <li><strong>荃灣海濱長廊</strong>：全長2.5公里，適合散步踩車</li>
        <li><strong>鰂魚涌海濱</strong>：新開放，兒童遊樂設施</li>
        <li><strong>沙田城門河</strong>：踩單車、划艇、野餐</li>
      </ul>

      <h2>🧗 公共遊樂場·放電熱點</h2>
      <ul>
        <li><strong>觀塘海濱公園</strong>：特色遊樂設施，海景</li>
        <li><strong>荔枝角公園</strong>：大型兒童遊樂場、嶺南之風園區</li>
        <li><strong>香港單車館公園</strong>：大草地、極限運動場</li>
        <li><strong>啟德跑道公園</strong>：大草地、飛機主題</li>
        <li><strong>屯門公園</strong>：共融遊樂場，沙池、水玩區</li>
      </ul>

      <h2>🥾 郊野公園·地質公園</h2>
      <p>
        香港有24個郊野公園，全部免費入場。
        以下係適合親子嘅輕鬆路線：
      </p>
      <ul>
        <li><strong>大潭水塘</strong>：平坦易行，有歷史建築</li>
        <li><strong>香港仔水塘</strong>：市區行山路線，適合初學者</li>
        <li><strong>龍脊</strong>：風景絕佳，適合大啲嘅小朋友</li>
        <li><strong>橋咀洲</strong>：地質公園，退潮可行出水中央</li>
      </ul>

      <div className="mt-6 rounded-2xl bg-gradient-to-br from-mint/10 to-sky/10 p-6">
        <p className="font-display text-lg font-bold text-[#3f3550]">🔗 聯動 SunnyHK</p>
        <p className="mt-2 leading-relaxed text-[#5a4d68]">
          想睇詳細行山路線、浮潛攻略、游水指南同美食地圖？
          去 SunnyHK 睇更多香港發掘指南：
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a href="https://gohk.gamewayz.com/hiking.html" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-[#5a4d68] shadow-sm ring-1 ring-black/5 transition hover:bg-coral hover:text-white">🥾 行山路線 →</a>
          <a href="https://gohk.gamewayz.com/snorkeling.html" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-[#5a4d68] shadow-sm ring-1 ring-black/5 transition hover:bg-coral hover:text-white">🤿 浮潛攻略 →</a>
          <a href="https://gohk.gamewayz.com/swimming.html" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-[#5a4d68] shadow-sm ring-1 ring-black/5 transition hover:bg-coral hover:text-white">🏊 游水指南 →</a>
          <a href="https://gohk.gamewayz.com/food.html" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-[#5a4d68] shadow-sm ring-1 ring-black/5 transition hover:bg-coral hover:text-white">🍜 美食地圖 →</a>
          <a href="https://gohk.gamewayz.com/explore.html#family" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-[#5a4d68] shadow-sm ring-1 ring-black/5 transition hover:bg-coral hover:text-white">👶 親子家庭指南 →</a>
        </div>
      </div>
    </ResourceLayout>
  );
}
