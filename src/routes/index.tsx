import { createFileRoute } from "@tanstack/react-router";
import { Header, HeroSlideshow, PrimaryButton, EditorialGallery, MenuSection, VisitSection, TestimonialCarousel, Footer } from "@/components/vao-cafe";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "VAO Café | The Art of the Bake. The Ritual of Coffee." },
    { name: "description", content: "Discover VAO Café at Athlo Sports Complex, Al Khabra. Thoughtfully crafted coffee, chef-crafted bakes, and sweets for the moments in between." },
    { property: "og:title", content: "VAO Café | The Art of the Bake. The Ritual of Coffee." },
    { property: "og:description", content: "Discover VAO Café at Athlo Sports Complex, Al Khabra. Coffee, chef-crafted bakes, and sweets for the moments in between." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <><Header /><main><section id="home" className="hero" aria-labelledby="hero-title"><div className="hero-text"><div className="hero-copy"><span className="eyebrow">A little space between everything else.</span><h1 id="hero-title">THE ART OF THE BAKE.<br />THE RITUAL OF COFFEE.</h1><PrimaryButton href="#menu">View Menu</PrimaryButton></div><span className="hero-bottom-note">COFFEE • CHEF-CRAFTED BAKES • SWEETS</span></div><HeroSlideshow /></section><EditorialGallery /><MenuSection /><VisitSection /><TestimonialCarousel /></main><Footer /></>;
}
