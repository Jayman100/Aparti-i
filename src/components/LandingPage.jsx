import Hero from "./Hero";
import Introduction from "./Intoduction";
import Features from "./Features";
import How from "./How";
import Testimonials from "./Testimonials";
import Cta from "./Cta";
import Footer from "./Footer";
import Header from "./Header";

function LandingPage() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Features />
      <How />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default LandingPage;
