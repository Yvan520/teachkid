import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Stages from "../components/Stages";
import Nutrition from "../components/Nutrition";
import Trust from "../components/Trust";
import Footer from "../components/Footer";
import { useReveal } from "../useReveal";

export default function Home() {
  useReveal();
  return (
    <>
      <Helmet>
        <title>童趣星球 · 0–10 歲科學育兒成長樂園</title>
        <meta name="description" content="一站式0–10歲小朋友教育與成長網站。蒙特梭利、皮亞傑、維果茨基等國際教育理念，分齡學習指南、親子遊戲、營養食譜，陪你把小朋友湊大。" />
        <meta property="og:title" content="童趣星球 · 0–10 歲科學育兒成長樂園" />
        <meta property="og:description" content="幾多歲玩咩、學咩、留意咩——我哋陪你睇得明晒。" />
      </Helmet>
      <div className="min-h-screen bg-cream font-body text-[#4a3f55]">
        <Navbar />
        <main>
          <Hero />
          <Philosophy />
          <Stages />
          <Nutrition />
          <Trust />
        </main>
        <Footer />
      </div>
    </>
  );
}
