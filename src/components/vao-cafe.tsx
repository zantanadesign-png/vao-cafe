import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Plus, Minus, Star, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { vaoConfig, menuCategories } from "@/lib/vao-config";
import interior from "@/assets/vao-interior.jpg";
import coffee from "@/assets/vao-coffee.jpg";
import pastry from "@/assets/vao-pastry.jpg";
import breakfast from "@/assets/vao-breakfast.jpg";

const heroImages = [interior, breakfast, coffee, pastry];
const imageDescriptions = ["Sunlight falling across VAO's café tables", "Avocado toast and a poached egg in afternoon light", "A carefully poured cappuccino", "A freshly baked cinnamon roll"];

export function PrimaryButton({ children, href, dark = false, onClick }: { children: ReactNode; href?: string | undefined; dark?: boolean; onClick?: () => void }) {
  return <Button variant={dark ? "coffee" : "cream"} asChild={Boolean(href)} onClick={onClick}>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{children}</a> : children}</Button>;
}

function ExternalAction({ kind, dark = false }: { kind: "order" | "maps"; dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const url = kind === "order" ? vaoConfig.ORDER_URL : vaoConfig.MAPS_URL;
  return <><PrimaryButton dark={dark} href={url ?? undefined} onClick={() => { if (!url) setOpen(true); }}>{kind === "order" ? "Order Now" : <>Visit Us <ArrowUpRight /></>}</PrimaryButton><Dialog open={open} onOpenChange={setOpen}><DialogContent><DialogTitle>{kind === "order" ? "A little patience, a good coffee." : "Your next coffee stop."}</DialogTitle><DialogDescription>{kind === "order" ? "Online ordering details are coming soon. Check back for the VAO ordering link." : "VAO’s address and opening hours will be shared here soon."}</DialogDescription></DialogContent></Dialog></>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) return; const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; document.addEventListener("keydown", close); return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", close); }; }, [open]);
  return <header className="vao-header"><a className="wordmark" href="#home" aria-label="VAO home">VAO<span>CAFÉ</span></a><nav className="desktop-nav" aria-label="Main navigation"><a href="#home">Home</a><a href="#menu">Menu</a><a href="#contact">Contact</a><ExternalAction kind="order" /></nav><Button className="mobile-toggle" variant="circleCream" aria-label="Open navigation" aria-expanded={open} onClick={() => setOpen(true)}><span className="hamburger"><i /><i /></span></Button><MobileMenu open={open} onClose={() => setOpen(false)} /></header>;
}

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (open) closeRef.current?.focus(); }, [open]);
  if (!open) return null;
  return <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation" onKeyDown={event => { if (event.key !== "Tab") return; const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("a, button")); const first = controls[0]; const last = controls[controls.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); } }}><div className="mobile-menu-top"><a href="#home" className="wordmark" onClick={onClose}>VAO<span>CAFÉ</span></a><Button ref={closeRef} variant="circleCream" aria-label="Close navigation" onClick={onClose}><X /></Button></div><nav aria-label="Mobile navigation"><a href="#home" onClick={onClose}>Home <ArrowUpRight /></a><a href="#menu" onClick={onClose}>Menu <ArrowUpRight /></a><a href="#contact" onClick={onClose}>Contact <ArrowUpRight /></a></nav><div><ExternalAction kind="order" /><p className="mobile-menu-note">Good coffee. Your own rhythm.</p></div></div>;
}

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => { const reduced = window.matchMedia("(prefers-reduced-motion: reduce)"); if (reduced.matches) return; const timer = window.setInterval(() => setIndex(value => value + 1), 4800); return () => window.clearInterval(timer); }, []);
  const current = index % heroImages.length;
  const previous = (index - 1 + heroImages.length) % heroImages.length;
  return <div className="hero-slideshow" aria-label="Café photographs" data-slide={current}><div className="hero-slides" key={index}>{index > 0 && <img className="hero-slide outgoing" src={heroImages[previous]} alt="" width={1600} height={1200} />}<img className={`hero-slide ${index > 0 ? "incoming" : "initial"}`} src={heroImages[current]} alt={imageDescriptions[current]} width={1600} height={1200} fetchPriority={index === 0 ? "high" : "auto"} /></div><div className="hero-photo-caption"><span className="tiny-label">A MOMENT, WELL SPENT</span><p>Good coffee changes<br />the rhythm of the day.</p><span className="slide-count">0{current + 1}<span> / 04</span></span></div></div>;
}

export function RevealImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting)) { node.classList.add("is-revealed"); observer.unobserve(node); } }, { threshold: .12 }); node.classList.add("reveal-ready"); observer.observe(node); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={`reveal-image ${className}`}><img src={src} alt={alt} width={1200} height={1400} loading="lazy" /></div>;
}

export function EditorialGallery() {
  return <section className="ritual-section" aria-labelledby="ritual-title"><div className="ritual-heading"><span className="eyebrow">COFFEE. FOOD. EVERYDAY PLEASURES.</span><h2 id="ritual-title">The Daily Ritual</h2></div><div className="editorial-gallery"><div className="gallery-aside"><span className="editorial-number">01 — THE LITTLE THINGS</span><p>A slower morning.<br />A better kind of everyday.</p></div><RevealImage src={coffee} alt="Cappuccino in a handmade ceramic cup" className="gallery-coffee" /><RevealImage src={pastry} alt="Warm cinnamon roll with delicate icing" className="gallery-pastry" /><RevealImage src={breakfast} alt="Avocado toast with a poached egg" className="gallery-breakfast" /><RevealImage src={interior} alt="A quiet sunlit corner of the café" className="gallery-interior" /><div className="gallery-copy"><span className="tiny-label">MADE WITH INTENTION</span><p>A considered selection of coffee, food and small rituals — made with intention, served with care.</p></div></div></section>;
}

export function MenuSection() {
  const [active, setActive] = useState<string | null>("Espresso Bar");
  return <section id="menu" className="menu-section" aria-labelledby="menu-title"><img src={breakfast} alt="" className="section-background" loading="lazy" width={1200} height={1400} /><div className="menu-panel"><span className="menu-monogram" aria-hidden="true">V<span>∿</span>O</span><span className="eyebrow">SOMETHING TO SAVOUR</span><h2 id="menu-title">Our Menu</h2><div className="menu-categories">{menuCategories.map(category => <div className="menu-category" key={category.name}><Button variant="editorial" aria-expanded={active === category.name} aria-controls={`category-${category.name.replaceAll(" ", "-")}`} onClick={() => setActive(active === category.name ? null : category.name)}>{category.name}{active === category.name ? <Minus /> : <Plus />}</Button><div className={`menu-items ${active === category.name ? "expanded" : ""}`} id={`category-${category.name.replaceAll(" ", "-")}`}><div>{category.items.map(item => <div className="menu-item" key={item.name}><h3>{item.name}</h3><p>{item.description}</p></div>)}</div></div></div>)}</div><ExternalAction kind="order" dark /></div></section>;
}

export function VisitSection() {
  return <section id="contact" className="visit-section" aria-labelledby="visit-title"><img src={interior} alt="The café's welcoming sunlit interior" className="section-background" loading="lazy" width={1600} height={1200} /><div className="visit-card"><span className="eyebrow">VISIT VAO</span><h2 id="visit-title">A place for<br />good coffee<br />and good company.</h2><div className="visit-details"><div><h3>Hours</h3><dl>{vaoConfig.openingHours.map(({ day, hours }) => <div className="hours-row" key={day}><dt>{day}</dt><dd>{hours ?? "Coming soon"}</dd></div>)}</dl></div><div className="visit-address"><div><h3>Address</h3><p>{vaoConfig.ADDRESS ?? "[VAO address]"}</p></div><div><h3>Phone</h3><p>{vaoConfig.PHONE ?? "[VAO phone]"}</p></div></div></div><ExternalAction kind="maps" /></div><p className="visit-caption">Come for the coffee.<br />Stay for a while.</p></section>;
}

const testimonials = [
  { quote: "Best coffee I’ve had in the city. Thoughtful, beautifully executed and the kind of place you immediately want to come back to.", name: "Martin Silva" },
  { quote: "A little pause in the middle of everything. Beautiful coffee, a warm welcome, and a cinnamon roll worth slowing down for.", name: "Sofia Costa" },
  { quote: "The kind of place that turns a morning coffee into your favourite part of the day. Every detail feels considered.", name: "Alex Morgan" },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  return <section className="testimonial-section" aria-labelledby="testimonials-title"><span className="eyebrow">GOOD WORDS, GOOD COMPANY</span><h2 id="testimonials-title">The word on VAO</h2><div className="testimonial-card" aria-live="polite"><div className="testimonial-content" key={index}><div className="review-stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={19} strokeWidth={1.3} />)}</div><blockquote>“{testimonials[index]?.quote}”</blockquote><p className="review-name">{testimonials[index]?.name}</p><span className="sample-label">Sample guest review</span></div></div><div className="carousel-controls"><Button variant="circleCoffee" aria-label="Previous testimonial" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}><ChevronLeft /></Button><span className="carousel-count">0{index + 1} / 0{testimonials.length}</span><Button variant="circleCoffee" aria-label="Next testimonial" onClick={() => setIndex((index + 1) % testimonials.length)}><ChevronRight /></Button></div><div className="testimonial-gallery"><RevealImage src={interior} alt="Sunlit café tables beside tall windows" /><RevealImage src={pastry} alt="A cinnamon roll fresh from the bakery" /></div></section>;
}

export function Footer() {
  return <footer className="vao-footer"><div className="footer-top"><a href="#home" className="footer-wordmark" aria-label="VAO home">VAO<span>GOOD COFFEE. YOUR OWN RHYTHM.</span></a><div className="footer-nav"><nav aria-label="Footer navigation"><a href="#home">Home</a><a href="#menu">Menu</a><a href="#contact">Contact</a></nav><ExternalAction kind="order" /></div></div><div className="footer-info"><div><span className="tiny-label">SAY HELLO</span><p>{vaoConfig.EMAIL ? <a href={`mailto:${vaoConfig.EMAIL}`}>{vaoConfig.EMAIL}</a> : "[VAO email]"}<br />{vaoConfig.PHONE ?? "[VAO phone]"}</p></div><div><span className="tiny-label">FIND YOUR RITUAL</span><p>{vaoConfig.ADDRESS ?? "[VAO address]"}</p></div><div><span className="tiny-label">SOCIAL</span><p>{vaoConfig.INSTAGRAM_URL ? <a href={vaoConfig.INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={18} /> @vao.cafe</a> : <span className="social-placeholder"><Instagram size={18} /> @vao.cafe</span>}</p><span className="studio-credit">DESIGN & DEVELOPMENT<br />{vaoConfig.studioName ?? "[Studio name]"} · {vaoConfig.studioInstagram ?? "@[studio]"}</span></div></div><RevealImage src={interior} alt="Warm afternoon light across the café" className="footer-image" /><div className="footer-bottom"><p>© {new Date().getFullYear()} VAO Café. All rights reserved.</p><a href="#home">Back to the top <ArrowUpRight size={15} /></a></div></footer>;
}