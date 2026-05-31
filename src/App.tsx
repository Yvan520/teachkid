import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import ParentSchool from "./pages/parent-school/index";
import Emotion from "./pages/parent-school/emotion";
import Discipline from "./pages/parent-school/discipline";
import StudyHabits from "./pages/parent-school/study-habits";
import Grandparent from "./pages/parent-school/grandparent";
import KindergartenPrep from "./pages/parent-school/kindergarten-prep";
import Health from "./pages/parent-school/health";
import Resources from "./pages/resources/index";
import FreeClasses from "./pages/resources/free-classes";
import Competitions from "./pages/resources/competitions";
import Welfare from "./pages/resources/welfare";
import Outings from "./pages/resources/outings";
import Calendar from "./pages/resources/calendar";
import School from "./pages/resources/school";
import Montessori from "./pages/philosophy/montessori";
import Piaget from "./pages/philosophy/piaget";
import Vygotsky from "./pages/philosophy/vygotsky";
import Reggio from "./pages/philosophy/reggio";
import Sun from "./pages/philosophy/sun";
import Holistic from "./pages/philosophy/holistic";
import BabyStage from "./pages/stages/baby-stage";
import KidStage from "./pages/stages/kid-stage";
import JuniorStage from "./pages/stages/junior-stage";
import MilkCalcium from "./pages/nutrition/milk-calcium";
import EggProtein from "./pages/nutrition/egg-protein";
import RiceEnergy from "./pages/nutrition/rice-energy";
import VegFiber from "./pages/nutrition/veg-fiber";
import FruitVitamin from "./pages/nutrition/fruit-vitamin";
import FishGoodFat from "./pages/nutrition/fish-good-fat";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parent-school" element={<ParentSchool />} />
      <Route path="/parent-school/emotion" element={<Emotion />} />
      <Route path="/parent-school/discipline" element={<Discipline />} />
      <Route path="/parent-school/study-habits" element={<StudyHabits />} />
      <Route path="/parent-school/grandparent" element={<Grandparent />} />
      <Route path="/parent-school/kindergarten-prep" element={<KindergartenPrep />} />
      <Route path="/parent-school/health" element={<Health />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/free-classes" element={<FreeClasses />} />
      <Route path="/resources/competitions" element={<Competitions />} />
      <Route path="/resources/welfare" element={<Welfare />} />
      <Route path="/resources/outings" element={<Outings />} />
      <Route path="/resources/calendar" element={<Calendar />} />
      <Route path="/resources/school" element={<School />} />
      <Route path="/philosophy/montessori" element={<Montessori />} />
      <Route path="/philosophy/piaget" element={<Piaget />} />
      <Route path="/philosophy/vygotsky" element={<Vygotsky />} />
      <Route path="/philosophy/reggio" element={<Reggio />} />
      <Route path="/philosophy/sun" element={<Sun />} />
      <Route path="/philosophy/holistic" element={<Holistic />} />
      <Route path="/stages/baby-stage" element={<BabyStage />} />
      <Route path="/stages/kid-stage" element={<KidStage />} />
      <Route path="/stages/junior-stage" element={<JuniorStage />} />
      <Route path="/nutrition/milk-calcium" element={<MilkCalcium />} />
      <Route path="/nutrition/egg-protein" element={<EggProtein />} />
      <Route path="/nutrition/rice-energy" element={<RiceEnergy />} />
      <Route path="/nutrition/veg-fiber" element={<VegFiber />} />
      <Route path="/nutrition/fruit-vitamin" element={<FruitVitamin />} />
      <Route path="/nutrition/fish-good-fat" element={<FishGoodFat />} />
    </Routes>
    </>
  );
}
