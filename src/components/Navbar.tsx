import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const links = [
  { id: "philosophy", label: "教育理念" },
  { id: "stages", label: "成長階梯" },
  { id: "nutrition", label: "長高營養" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    setOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (!isHome) return;
      for (const l of [...links].reverse()) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(l.id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "bg-white/80 shadow-lg shadow-peach/20 backdrop-blur-md"
            : "bg-white/40 backdrop-blur-sm"
        } mx-3`}
      >
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-coral to-grape text-xl shadow-md animate-wiggle">
            🪐
          </span>
          <span className="font-display text-xl font-extrabold text-[#4a3f55]">
            童趣<span className="text-coral">星球</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex" role="tablist">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`rounded-full px-4 py-2 font-display font-semibold transition ${
                isHome && active === l.id
                  ? "bg-coral/15 text-coral"
                  : "text-[#6b5d78] hover:bg-peach/20 hover:text-coral"
              }`}
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/parent-school"
            className={`rounded-full px-4 py-2 font-display font-semibold transition ${
              location.pathname.startsWith("/parent-school")
                ? "bg-coral/15 text-coral"
                : "text-[#6b5d78] hover:bg-peach/20 hover:text-coral"
            }`}
          >
            家長學堂
          </Link>
          <Link
            to="/resources"
            className={`rounded-full px-4 py-2 font-display font-semibold transition ${
              location.pathname.startsWith("/resources")
                ? "bg-coral/15 text-coral"
                : "text-[#6b5d78] hover:bg-peach/20 hover:text-coral"
            }`}
          >
            慳錢攻略
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/parent-school"
            className="hidden rounded-full bg-gradient-to-r from-coral to-peach px-5 py-2.5 font-display font-bold text-white shadow-md shadow-coral/30 transition hover:scale-105 sm:block"
          >
            免費學習 ✨
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/70 text-xl md:hidden"
            aria-label={open ? "關閉選單" : "開啟選單"}
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-3xl bg-white/90 p-4 shadow-lg backdrop-blur-md md:hidden">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="block w-full rounded-2xl px-4 py-3 text-left font-display font-semibold text-[#6b5d78] hover:bg-peach/20"
            >
              {l.label}
            </button>
          ))}
          <Link
            to="/parent-school"
            onClick={() => setOpen(false)}
            className="block rounded-2xl px-4 py-3 font-display font-semibold text-[#6b5d78] hover:bg-peach/20"
          >
            家長學堂
          </Link>
          <Link
            to="/resources"
            onClick={() => setOpen(false)}
            className="block rounded-2xl px-4 py-3 font-display font-semibold text-[#6b5d78] hover:bg-peach/20"
          >
            慳錢攻略
          </Link>
          <Link
            to="/parent-school"
            onClick={() => setOpen(false)}
            className="mt-2 block w-full rounded-2xl bg-gradient-to-r from-coral to-peach px-4 py-3 text-center font-display font-bold text-white"
          >
            免費學習 ✨
          </Link>
        </div>
      )}
    </header>
  );
}
