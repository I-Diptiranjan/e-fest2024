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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Sponsers />
        <Speaker />
        <Events />
        <Timeline />
        <FAQ />
        <Gallery />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
