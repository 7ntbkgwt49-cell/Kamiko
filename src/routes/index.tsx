import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Heart, MessageCircle, Users, Plus, Minus, ChevronDown, Menu, X, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const logo = { url: "/logo.png" };
const banner = { url: "/banner.png" };

const invite = "https://discord.gg/kamikos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamiko — Good company. Your kind of people." },
      { name: "description", content: "Good company, everyday conversations, and a little personality. Find your circle at Kamiko. Join discord.gg/kamikos." },
      { property: "og:title", content: "Kamiko — Good company. Your kind of people." },
      { property: "og:description", content: "A little more you. Find your circle at Kamiko on Discord." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function DiscordIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.7 5.1a18 18 0 0 0-4.4-1.4l-.6 1.2a16.4 16.4 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 9.2.7 13.2 1.1 17.2a17.8 17.8 0 0 0 5.5 2.8l1.1-1.8-1.7-.8.4-.3c3.6 1.7 7.7 1.7 11.2 0l.4.3-1.7.8 1.1 1.8a17.8 17.8 0 0 0 5.5-2.8c.5-4.6-.8-8.6-3.2-12.1ZM8.5 14.7c-1.1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 2 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2Zm7 0c-1.1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 2 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2Z"/></svg>;
}

function JoinButton({ outline = false, children = "Join our Discord" }: { outline?: boolean; children?: React.ReactNode }) {
  return <Button variant={outline ? "prettyOutline" : "pretty"} asChild><a href={invite} target="_blank" rel="noopener noreferrer"><DiscordIcon />{children}<ArrowUpRight /></a></Button>;
}

const features = [
  { icon: MessageCircle, title: "Always something going on", text: "Late-night talks, random rants, daily check-ins — the chat never really sleeps." },
  { icon: Users, title: "People who actually get you", text: "Bring your friends or make new ones. Either way, you’ll find your people here." },
  { icon: Heart, title: "Be as extra as you want", text: "Your hobbies, your hot takes, your 2am thoughts. All of it is welcome." },
  { icon: ArrowUpRight, title: "A fresh start", text: "Kamiko got a glow-up, and we’re just getting started. Come be part of it." },
];

const faqs = [
  { question: "How do I join?", answer: "Head to discord.gg/kamikos, sign in, and hit accept. That’s it — you’re in." },
  { question: "What do I do once I’m in?", answer: "Skim the rules, say hi in intros, and jump into whatever chat catches your eye." },
  { question: "Do I need to download Discord?", answer: "Nope. It works right in your browser, or grab the app if you want it on your phone." },
  { question: "Who do I talk to if I need help?", answer: "Ping a mod or check the help channels — someone’s always around." },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="page-width header-inner">
          <a href="#home" className="brand" aria-label="Kamiko home"><img src={logo.url} alt="" />kamiko</a>
          <nav className="desktop-nav" aria-label="Main navigation"><a className="nav-link" href="#about">The circle</a><a className="nav-link" href="#getting-started">Settle in</a><a className="nav-link" href="#faq">Good to know</a></nav>
          <div className="flex items-center gap-2"><JoinButton>Join server</JoinButton><Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[{ href: "#about", title: "The circle" }, { href: "#getting-started", title: "Settle in" }, { href: "#faq", title: "Good to know" }].map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.title}</a>)}</nav>}
      </header>
      <main id="home">
        <section className="hero">
          <img className="hero-background" src={banner.url} alt="" fetchPriority="high" />
          <div className="hero-content">
            <div className="hero-floats" aria-hidden="true">
              <Heart className="hero-float hf-1" fill="currentColor" />
              <Sparkles className="hero-float hf-2" />
              <Star className="hero-float hf-3" fill="currentColor" />
              <Heart className="hero-float hf-4" />
              <Sparkles className="hero-float hf-5" />
            </div>
            <img src={logo.url} alt="Kamiko logo" className="hero-logo" />
            <p className="hero-script">welcome to</p>
            <h1>kamiko<span className="h1-heart" aria-hidden="true">♥</span></h1>
            <p className="hero-description">A cozy little corner of Discord for good talks<br />and even better company — made for <span className="script-accent">you</span>.</p>
            <div className="hero-actions"><JoinButton>Join the circle</JoinButton></div>
            <a href={invite} target="_blank" rel="noopener noreferrer" className="hero-note">discord.gg/kamikos <ArrowUpRight size={12} /></a>
            <a href="#about" className="scroll-link" aria-label="Discover the circle"><ChevronDown size={18} /></a>
          </div>
        </section>
        <section id="about" className="content-section section-about">
          <div className="page-width">
            <div className="section-heading"><p className="section-eyebrow">THE CIRCLE</p><h2>Good company. <span>Your kind of people.</span></h2><p>Everything that makes Kamiko feel like home.</p></div>
            <div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={19} strokeWidth={1.6} /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </section>
        <section id="getting-started" className="content-section section-steps">
          <div className="page-width"><div className="section-heading"><p className="section-eyebrow">SETTLE IN</p><h2>Come in. <span>Stay a while.</span></h2><p>Three little steps and you’re one of us.</p></div>
            <div className="steps">{[{ title: "Grab your invite", text: "Hit the link, sign in, accept. Takes about ten seconds." }, { title: "Say hello", text: "Skim the rules, then drop an intro so we know who you are." }, { title: "Find your corner", text: "Pick a chat, share something, and see who you click with." }].map((step, i) => <div className="step" key={step.title}><div className="step-number">0{i + 1}</div><h3>{step.title}</h3><p>{step.text}</p></div>)}</div>
          </div>
        </section>
        <section id="faq" className="content-section section-faq"><div className="page-width"><div className="section-heading"><p className="section-eyebrow">GOOD TO KNOW</p><h2>The little <span>details.</span></h2></div><div className="faq-wrap">{faqs.map(({ question, answer }, i) => <div className="faq-item" key={question}><Button variant="ghost" className="faq-trigger" aria-expanded={openFaq === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{question}{openFaq === i ? <Minus /> : <Plus />}</Button>{openFaq === i && <div className="faq-answer" id={`faq-answer-${i}`}>{answer}</div>}</div>)}</div></div></section>
        <section className="join-section"><p className="join-script">come say hi</p><h2>There’s a place for you<span>.</span></h2><p>Pop in for a hello. You’ll probably end up staying.</p><JoinButton>See you in Kamiko</JoinButton></section>
      </main>
      <footer><div className="page-width footer-inner"><a href="#home" className="brand">kamiko<span className="footer-heart" aria-hidden="true">♥</span></a><a className="nav-link" href={invite} target="_blank" rel="noopener noreferrer">discord.gg/kamikos</a><p className="footer-note">© 2026 Kamiko · made with <span className="footer-note-heart" aria-hidden="true">♡</span></p></div></footer>
    </>
  );
}
