import Navbar from "./views/Navbar";
import Hero from "./views/Hero";
import Services from "./views/Services";
import Contact from "./views/Contact";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
