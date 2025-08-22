import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import ExclusiveSale from "./components/ExclusiveSale";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductHighlights />
      <ExclusiveSale />
      <Features />
      <Testimonials />
    </>
  );
}
