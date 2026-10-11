import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Plus, Minus, Star, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vaoConfig, menuCategories } from "@/lib/vao-config";
import interior from "@/assets/vao-interior.jpg";
import coffee from "@/assets/vao-coffee.jpg";
import pastry from "@/assets/vao-pastry.jpg";
import breakfast from "@/assets/vao-breakfast.jpg";

const heroImages = [interior, breakfast, coffee, pastry];
const imageDescriptions = ["Sunlight falling across VAO's café tables", "Avocado toast and a poached egg in afternoon light", "A carefully poured cappuccino", "A freshly baked cinnamon roll"];
const categorySlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function PrimaryButton({ children, href, dark = false, onClick }: { children: ReactNode; href?: string | undefined; dark?: boolean; onClick?: () => void }) {
  return <Button variant={dark ? "coffee" : "cream"} asChild={Boolean(href)} onClick={onClick}>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{children}</a> : children}</Button>;
}

export function Header() {
  return <header className="vao-header"><a className="symbol-link" href="#home" aria-label="VAO home"><img src="/vao-symbol.svg" alt="" width="48" height="48" /></a><nav className="desktop-nav" aria-label="Main navigation"><PrimaryButton href="#menu" dark>View Menu</PrimaryButton></nav></header>;
}

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => { const reduced = window.matchMedia("(prefers-reduced-motion: reduce)"); if (reduced.matches) return; const timer = window.setInterval(() => setIndex(value => value + 1), 4800); return () => window.clearInterval(timer); }, []);
  const current = index % heroImages.length;
  const previous = (index - 1 + heroImages.length) % heroImages.length;
  return <div className="hero-slideshow" aria-label="Café photographs" data-slide={current}><div className="hero-slides" key={index}>{index > 0 && <img className="hero-slide outgoing" src={heroImages[previous]} alt="" width={1600} height={1200} />}<img className={`hero-slide ${index > 0 ? "incoming" : "initial"}`} src={heroImages[current]} alt={imageDescriptions[current]} width={1600} height={1200} fetchPriority={index === 0 ? "high" : "auto"} /></div></div>;
}

export function RevealImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting)) { node.classList.add("is-revealed"); observer.unobserve(node); } }, { threshold: .12 }); node.classList.add("reveal-ready"); observer.observe(node); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={`reveal-image ${className}`}><img src={src} alt={alt} width={1200} height={1400} loading="lazy" /></div>;
}

export function EditorialGallery() {
  return <section className="ritual-section" aria-labelledby="ritual-title"><div className="ritual-heading"><span className="eyebrow">Coffee • Chef-crafted bakes • Sweets</span><h2 className="h1" id="ritual-title">A pause in your day.</h2></div><div className="editorial-gallery"><div className="gallery-aside"><span className="editorial-number">A little space to slow down.</span></div><RevealImage src={coffee} alt="Cappuccino in a handmade ceramic cup" className="gallery-coffee" /><RevealImage src={pastry} alt="Warm cinnamon roll with delicate icing" className="gallery-pastry" /><RevealImage src={breakfast} alt="Avocado toast with a poached egg" className="gallery-breakfast" /><RevealImage src={interior} alt="A quiet sunlit corner of the café" className="gallery-interior" /><RevealImage src={coffee} alt="A close-up of freshly poured coffee" className="gallery-extra" /><div className="gallery-copy"><span className="tiny-label">Made with intention</span><p>VAO brings together thoughtfully crafted coffee, chef-made bakes, and little pleasures worth slowing down for.</p></div></div></section>;
}

export function MenuSection() {
  const [active, setActive] = useState<string>(menuCategories[0]?.name ?? "");
  const activeCategory = menuCategories.find(category => category.name === active) ?? menuCategories[0];
  const menuSectionRef = useRef<HTMLElement>(null);

  const selectCategory = (name: string) => {
    if (name === active) return;
    setActive(name);
    const section = menuSectionRef.current;
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return <section ref={menuSectionRef} id="menu" className="menu-section" aria-labelledby="menu-title"><div className="menu-panel"><div className="menu-sticky-header"><span className="eyebrow">Coffee, bakes, and sweets. Made with intention, served for the moments in between.</span><h2 className="h1" id="menu-title">The Vao Menu</h2><div className="menu-tabs" role="tablist" aria-label="Menu categories">{menuCategories.map((category, index) => <Button key={category.name} id={`menu-tab-${categorySlug(category.name)}`} className={`menu-tab h3 ${active === category.name ? "is-active" : ""}`} variant="editorial" role="tab" aria-selected={active === category.name} aria-controls={`menu-category-panel-${categorySlug(category.name)}`} tabIndex={active === category.name ? 0 : -1} onClick={() => selectCategory(category.name)}>{["Hot", "Cold", "Food"][index] ?? category.name}</Button>)}</div></div>{activeCategory && <div className="menu-category-panel" role="tabpanel" id={`menu-category-panel-${categorySlug(activeCategory.name)}`} aria-labelledby={`menu-tab-${categorySlug(activeCategory.name)}`}><div className="menu-product-grid">{activeCategory.items.map(item => <article className="menu-item" key={item.name}>{item.image ? <img className="menu-product-photo" src={item.image} alt={`Illustrative café photograph for ${item.name}`} loading="lazy" width={640} height={640} /> : <div className="menu-product-photo menu-photo-pending" role="img" aria-label={`${item.name} photograph pending`}>VAO</div>}<div className="menu-product-copy"><h3 className="body-text">{item.name}</h3>{item.price != null && <p className="menu-price">{item.price} SR</p>}{item.description && <p>{item.description}</p>}</div></article>)}{activeCategory.items.length === 0 && <p className="menu-availability">Chef-crafted bakes and sweets. Menu details coming soon.</p>}</div></div>}</div></section>;
}

// Placeholder testimonials only; replace with verified guest reviews before launch.
const testimonials = [
  { quote: "A considered cup of coffee and a quiet moment between the rest of the day.", name: "Coffee & ritual" },
  { quote: "The bakes, the light, the welcome. A pause that feels like your own.", name: "Bakes & little pleasures" },
  { quote: "Somewhere to slow down after the club, catch up, and stay a little longer.", name: "Space & connection" },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  return <section className="testimonial-section" aria-labelledby="testimonials-title"><span className="eyebrow">Coffee, bakes & a warm welcome</span><h2 className="h1" id="testimonials-title">A feeling worth returning to.</h2><div className="testimonial-card" aria-live="polite"><div className="testimonial-content" key={index}><div className="review-stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={19} strokeWidth={1.3} />)}</div><blockquote>“{testimonials[index]?.quote}”</blockquote><p className="review-name">{testimonials[index]?.name}</p><span className="sample-label">Placeholder testimonial</span></div></div><div className="carousel-controls"><Button variant="circleCoffee" aria-label="Previous testimonial" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}><ChevronLeft /></Button><span className="carousel-count">0{index + 1} / 0{testimonials.length}</span><Button variant="circleCoffee" aria-label="Next testimonial" onClick={() => setIndex((index + 1) % testimonials.length)}><ChevronRight /></Button></div><div className="testimonial-gallery"><RevealImage src={interior} alt="Sunlit café tables beside tall windows" /><RevealImage src={pastry} alt="A cinnamon roll fresh from the bakery" /><RevealImage src={coffee} alt="Freshly poured coffee in a ceramic cup" /><RevealImage src={breakfast} alt="Avocado toast with a poached egg" /></div></section>;
}

export function Footer() {
  return <footer className="vao-footer"><div className="footer-top"><div className="footer-brand-column"><a href="#home" className="footer-wordmark" aria-label="VAO home"><img src="/vao-logo.svg" alt="VAO" width="458" height="190" /></a></div><div className="footer-contact"><p className="footer-address"><MapPin size={20} aria-hidden="true" /><span>{vaoConfig.ADDRESS ?? "[VAO address]"}</span></p><p>{vaoConfig.INSTAGRAM_URL ? <a href={vaoConfig.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={18} /> {vaoConfig.instagramHandle}</a> : <span className="social-placeholder"><Instagram size={18} /> {vaoConfig.instagramHandle}</span>}</p></div><div className="footer-brand-bottom"><div className="footer-hours"><p className="footer-hours-label">Working hours:</p>{vaoConfig.openingHours.map(({ day, hours }) => <div className="footer-hours-row" key={day}><span>{day}</span><span>{hours ?? "Coming soon"}</span></div>)}</div><img className="footer-symbol" src="/vao-symbol.svg" alt="VAO symbol" width="48" height="48" /></div></div><RevealImage src={interior} alt="Warm afternoon light across the café" className="footer-image" /><div className="footer-bottom"><p>© {new Date().getFullYear()} VAO Café. All rights reserved.</p></div></footer>;
}
