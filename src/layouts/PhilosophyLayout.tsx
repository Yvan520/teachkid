import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type Meta = {
  title: string;
  desc: string;
  slug: string;
};

export default function PhilosophyLayout({
  meta,
  children,
}: {
  meta: Meta;
  children: React.ReactNode;
}) {
  return (
    <>
      <Helmet>
        <title>{meta.title} | 童趣星球 · 教育理念</title>
        <meta name="description" content={meta.desc} />
        <meta property="og:title" content={`${meta.title} | 童趣星球`} />
        <meta property="og:description" content={meta.desc} />
      </Helmet>

      <div className="min-h-screen bg-cream font-body text-[#4a3f55]">
        <div className="mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6">
          <nav className="mb-8 flex items-center gap-2 text-sm text-[#8a7d98]">
            <Link to="/" className="transition hover:text-coral">首頁</Link>
            <span>›</span>
            <span className="text-[#4a3f55]">{meta.title}</span>
          </nav>

          <article className="prose-h2:font-display prose-h2:text-3xl prose-h2:font-extrabold prose-h2:text-[#3f3550] prose-h3:font-display prose-h3:text-xl prose-h3:font-bold prose-h3:text-[#3f3550] prose-p:leading-relaxed prose-p:text-[#5a4d68] prose-ul:space-y-2 prose-li:text-[#5a4d68] prose-strong:text-coral max-w-none">
            {children}
          </article>

          <div className="mt-16 border-t border-[#eaddd5] pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-display font-bold text-[#5a4d68] shadow-sm ring-1 ring-black/5 transition hover:bg-coral hover:text-white"
            >
              ← 返回首頁
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
