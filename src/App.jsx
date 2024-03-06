import { BrowserRouter } from "react-router-dom";

import {
  Hero,
  Navbar,
  About,
  Events,
  FAQ,
  Footer,
  Gallery,
  Speaker,
  Sponsers,
  Timeline,
} from "./components";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Sponsers /> */}
        <Speaker />
        <Events />
        <Timeline />
        <Contact />
        <Gallery />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
