import Navbar from "./views/Navbar";
import Hero from "./views/Hero";
import Services from "./views/Services";
import Contact from "./views/Contact";
import WhyChooseMe from "./views/WhyChooseMe";
import FloatingContactButtons from "./views/FloatingContactButtons";
import PhotographyPortfolio from "./views/PhotographyPortfolio";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseMe />
      <PhotographyPortfolio />
      <Services />
      <Contact />
      <FloatingContactButtons />
    </div>
  );
}
