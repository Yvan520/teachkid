import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useReveal } from "../../useReveal";

const courses = [
  {
    slug: "emotion",
    emoji: "💗",
    title: "情緒社交",
    tagline: "唔好喊啦」之外，我哋仲可以點做？",
    desc: "香港小朋友壓力唔細，由分離焦慮到社交退縮，教你一步步幫仔女建立情緒韌性。",
    color: "from-coral to-peach",
  },
  {
    slug: "discipline",
    emoji: "🌿",
    title: "親子管教",
    tagline: "唔嗌唔鬧，一樣可以立規矩",
    desc: "香港居住空間細、生活節奏快，點樣喺有限空間同時間入面，建立清晰又溫柔嘅家庭規則？",
    color: "from-mint to-sky",
  },
  {
    slug: "study-habits",
    emoji: "📚",
    title: "學習習慣",
    tagline: "專注力唔係操返嚟，係養出嚟",
    desc: "幾時開始學寫字？點樣培養閱讀習慣？電子產品泛濫嘅年代，點樣保護小朋友嘅專注力？",
    color: "from-sun to-peach",
  },
  {
    slug: "grandparent",
    emoji: "👨‍👩‍👧‍👦",
    title: "隔代教養",
    tagline: "長老湊孫，係恩賜亦係學問",
    desc: "香港雙職家庭多，爺爺嫲嫲外公外婆係最強後盾。但觀念衝突點樣化解？同住相處有咩要注意？",
    color: "from-grape to-mint",
  },
  {
    slug: "kindergarten-prep",
    emoji: "🎒",
    title: "幼稚園入學",
    tagline: "N班？K1？面試？一次過同你拆解",
    desc: "香港幼稚園申請流程、面試準備、選校攻略——本地學校、國際學校、蒙特梭利，邊間最啱你個仔女？",
    color: "from-sky to-grape",
  },
  {
    slug: "health",
    emoji: "🩺",
    title: "健康成長",
    tagline: "由睡眠到疫苗，還原基本步",
    desc: "衞生署兒童健康服務指南、生長線解讀、睡眠時數建議——香港媽媽最需要嘅健康知識。",
    color: "from-peach to-sun",
  },
];

export default function ParentSchool() {
  useReveal();
  return (
    <>
      <Helmet>
        <title>家長學堂 | 童趣星球 · 香港父母育兒指南</title>
        <meta name="description" content="童趣星球家長學堂——專為香港父母而設嘅育兒課程。情緒社交、親子管教、學習習慣、隔代教養、幼稚園入學、健康成長，六大範疇幫你輕鬆湊仔。" />
        <meta property="og:title" content="家長學堂 | 童趣星球 · 香港父母育兒指南" />
        <meta property="og:description" content="專為香港父母而設嘅育兒課程，科學育兒落得到地。" />
      </Helmet>

      <div className="min-h-screen bg-cream font-body text-[#4a3f55]">
        <Navbar />
        <main className="px-4 pb-24 pt-32 sm:px-6">
          <div className="mx-auto max-w-6xl">
            {/* header */}
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 font-display text-sm font-bold text-coral">
                💡 廣東話育兒 · 香港適用
              </span>
              <h1 className="reveal mt-4 font-display text-5xl font-extrabold leading-tight text-[#3f3550] sm:text-6xl">
                家長學堂
              </h1>
              <p className="reveal mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#6b5d78]">
                湊仔呢條路，我哋陪你一齊行。<br />
                每一個課題，都係香港父母真實面對嘅日常。
              </p>
            </div>

            {/* course grid */}
            <div className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((c, i) => (
                <Link
                  key={c.slug}
                  to={`/parent-school/${c.slug}`}
                  className="reveal group flex flex-col rounded-[2rem] bg-white p-7 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-2 hover:shadow-xl"
                  data-delay={`${i * 80}ms`}
                >
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${c.color} text-3xl shadow-md transition group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {c.emoji}
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-extrabold text-[#3f3550]">
                    {c.title}
                  </h2>
                  <p className="mt-1 font-display text-sm font-bold text-coral">
                    {c.tagline}
                  </p>
                  <p className="mt-3 flex-1 leading-relaxed text-[#6b5d78]">
                    {c.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 font-display text-sm font-bold text-coral transition group-hover:gap-2">
                    開始閱讀 →
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
