import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header, HeroSlideshow, EditorialGallery, MenuSection, TestimonialCarousel, Footer } from "@/components/vao-cafe";

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
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const textNodes = document.querySelectorAll<HTMLElement>(
      ".site-experience h2, .site-experience h3, .site-experience p, .site-experience blockquote, .site-experience dt, .site-experience dd, .site-experience .eyebrow, .site-experience .tiny-label, .site-experience .editorial-number, .site-experience .sample-label, .site-experience .carousel-count, .site-experience button",
    );
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("text-reveal-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    textNodes.forEach(node => {
      node.classList.add("text-reveal-pending");
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return <div className="site-experience is-ready"><Header /><main><section id="home" className="hero" aria-labelledby="hero-title"><div className="hero-text"><div className="hero-copy"><h1 className="h3" id="hero-title">The art of the bake.<br />The ritual of coffee.</h1><img className="hero-logo" src="/vao-logo.svg" alt="VAO" width="458" height="190" /></div></div><HeroSlideshow /></section><EditorialGallery /><MenuSection /><TestimonialCarousel /></main><Footer /></div>;
}
