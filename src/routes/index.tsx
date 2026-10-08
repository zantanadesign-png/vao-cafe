import { createFileRoute } from "@tanstack/react-router";
import { Header, HeroSlideshow, PrimaryButton, EditorialGallery, MenuSection, VisitSection, TestimonialCarousel, Footer } from "@/components/vao-cafe";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "VAO Café — The Art of the Brew" },
    { name: "description", content: "Specialty coffee for the modern ritual. Discover VAO Café’s considered coffee, small bites, and a place for good company." },
    { property: "og:title", content: "VAO Café — The Art of the Brew" },
    { property: "og:description", content: "Good coffee changes the rhythm of the day. Find your everyday ritual at VAO Café." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <><Header /><main><section id="home" className="hero" aria-labelledby="hero-title"><div className="hero-text"><div className="hero-copy"><span className="eyebrow">SPECIALTY COFFEE & EVERYDAY RITUALS</span><h1 id="hero-title">The Art of the Brew.<br />Specialty Coffee for the<br />Modern Ritual.</h1><PrimaryButton href="#menu">View Menu</PrimaryButton></div><span className="hero-bottom-note">CRAFTED WITH CARE. ENJOYED AT YOUR PACE.</span></div><HeroSlideshow /></section><EditorialGallery /><MenuSection /><VisitSection /><TestimonialCarousel /></main><Footer /></>;
}
