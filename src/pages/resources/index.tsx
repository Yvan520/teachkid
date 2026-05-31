import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useReveal } from "../../useReveal";

const resources = [
  {
    slug: "free-classes",
    emoji: "🎯",
    title: "免費興趣班·政府資助課程",
    tagline: "康文署、音樂事務處、圖書館全部免費/半價",
    desc: "全日制學生半價租場、音樂事務處低收費樂器班、圖書館免費工作坊、區議會活動、SmartPLAY報名教學——一文睇晒。",
    color: "from-sky to-grape",
  },
  {
    slug: "competitions",
    emoji: "🏆",
    title: "免費/低收費比賽·證書",
    tagline: "朗誦節、音樂節、語常會比賽，全部$0-$200",
    desc: "香港學校朗誦節、音樂節報名攻略、語常會免費朗誦比賽、GAPSK資助考試、兒童朗誦公開賽。",
    color: "from-coral to-peach",
  },
  {
    slug: "welfare",
    emoji: "💰",
    title: "兒童福利·補貼一覽",
    tagline: "醫療券、在職家庭津貼、書簿津貼申請教學",
    desc: "兒童醫療券點樣拎？在職家庭津貼收入上限？幼稚園教育計劃涵蓋啲咩？兒童發展基金配對儲蓄玩法。",
    color: "from-sun to-peach",
  },
  {
    slug: "outings",
    emoji: "🎡",
    title: "免費親子好去處",
    tagline: "免費博物館、海濱長廊、公共遊樂場、郊野公園",
    desc: "逢周三免費博物館、香港公園、海濱長廊、公共遊樂場、地質公園——跟 SunnyHK 一齊發掘香港。",
    color: "from-mint to-sky",
  },
  {
    slug: "calendar",
    emoji: "📅",
    title: "免費活動月曆",
    tagline: "每月政府/社區免費活動，慳錢又好玩的親子日程",
    desc: "每月精選免費活動、公眾假期好去處、圖書館/博物館特別節目、社區節慶活動——月月更新。",
    color: "from-grape to-mint",
  },
  {
    slug: "school",
    emoji: "🎒",
    title: "升學·慳錢指南",
    tagline: "官津 vs 直私學費比較、幼稚園資助申請",
    desc: "幼稚園教育計劃慳幾多？官津中小學免費、書簿津貼申請程序、興趣班開支分配策略。",
    color: "from-peach to-sun",
  },
];

export default function Resources() {
  useReveal();
  return (
    <>
      <Helmet>
        <title>慳錢攻略 | 童趣星球 · 香港家長慳錢指南</title>
        <meta name="description" content="童趣星球慳錢攻略——專為香港家長而設嘅政府福利/免費興趣班/比賽證書/親子好去處/升學貼士，全部免費/資助/補貼資訊，慳到盡。" />
        <meta property="og:title" content="慳錢攻略 | 童趣星球 · 香港家長慳錢指南" />
        <meta property="og:description" content="政府福利、免費興趣班、比賽證書、親子好去處、升學慳錢——全部免費/資助資訊。" />
      </Helmet>

      <div className="min-h-screen bg-cream font-body text-[#4a3f55]">
        <Navbar />
        <main className="px-4 pb-24 pt-32 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 font-display text-sm font-bold text-coral">
                🧧 香港家長必睇 · 慳錢攻略
              </span>
              <h1 className="reveal mt-4 font-display text-5xl font-extrabold leading-tight text-[#3f3550] sm:text-6xl">
                慳到盡·湊到大
              </h1>
              <p className="reveal mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#6b5d78]">
                Netflix 有得睇，但政府福利、免費課程、比賽資助呢啲嘢<br />
                冇人話你知，就唔好嘥咗佢。
              </p>
            </div>

            <div className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((r, i) => (
                <Link
                  key={r.slug}
                  to={`/resources/${r.slug}`}
                  className="reveal group flex flex-col rounded-[2rem] bg-white p-7 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-2 hover:shadow-xl"
                  data-delay={`${i * 80}ms`}
                >
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${r.color} text-3xl shadow-md transition group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {r.emoji}
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-extrabold text-[#3f3550]">
                    {r.title}
                  </h2>
                  <p className="mt-1 font-display text-sm font-bold text-coral">
                    {r.tagline}
                  </p>
                  <p className="mt-3 flex-1 leading-relaxed text-[#6b5d78]">
                    {r.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 font-display text-sm font-bold text-coral transition group-hover:gap-2">
                    開始睇 →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
