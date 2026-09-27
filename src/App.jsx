import { useState } from 'react';

const logo = '/prime-crackers-logo.png';
const whatsappUrl = 'https://wa.me/919000000000?text=Hello%20Prime%20Crackers%2C%20I%20would%20like%20help%20with%20an%20order.';

const collections = [
  { number: '01', icon: '✺', title: 'Festive Favourites', description: 'Classic crackers and colourful effects for a joyful family celebration.', action: 'Discover the range', tone: 'card-amber' },
  { number: '02', icon: '✦', label: 'Most loved', title: 'Prime Celebration Box', description: 'A generous mixed selection, beautifully packed for gifting and sharing.', action: 'Reserve a box', tone: 'card-red' },
  { number: '03', icon: '⌁', title: 'Grand Events', description: 'Reliable event packs and practical guidance for weddings and larger gatherings.', action: 'Plan an event', tone: 'card-plum' },
];

const promises = [
  ['01', 'Curated assortments', 'Easy choices for intimate family moments and large festive gatherings.'],
  ['02', 'Gift-ready presentation', 'Make the gesture feel special with a pack designed to delight.'],
  ['03', 'Helpful local service', 'Clear, friendly support before you place your order.'],
];

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' footer-brand' : ''}`} href="#home" aria-label="Prime Crackers home">
      <img src={logo} alt="Prime Crackers logo" />
      <span>PRIME<br /><em>CRACKERS</em></span>
    </a>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="announcement-bar"><p>Festival orders are open now • Call ahead for large event packs</p></div>
      <header className="site-header">
        <Brand />
        <button className="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}><span /><span /><span /></button>
        <nav className={`main-nav${isMenuOpen ? ' open' : ''}`} aria-label="Main navigation">
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#why-prime" onClick={closeMenu}>Why Prime</a>
          <a href="#safety" onClick={closeMenu}>Safety</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact us <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="hero-copy">
            <p className="eyebrow">A brighter way to celebrate</p><h1>Make every<br /><i>moment glow.</i></h1>
            <p className="hero-text">Curated fireworks and celebration packs for Diwali, weddings, birthdays, and every occasion that deserves a little sparkle.</p>
            <div className="hero-actions"><a className="button button-primary" href="#collections">Explore collections <span>→</span></a><a className="button button-text" href="#contact">Plan a celebration</a></div>
            <div className="hero-meta"><div><strong>3,000+</strong><span>happy celebrations</span></div><div><strong>Handpicked</strong><span>festival essentials</span></div></div>
          </div>
          <div className="hero-art" aria-label="Prime Crackers festive logo display">
            <div className="orbital-ring ring-one" /><div className="orbital-ring ring-two" /><div className="hero-logo-frame"><img src={logo} alt="Prime Crackers festive logo" /></div>
            <div className="spark spark-a">✦</div><div className="spark spark-b">✦</div><div className="spark spark-c">✦</div><p className="art-caption">Light up the occasion</p>
          </div>
        </section>

        <section className="trust-strip" aria-label="Prime Crackers promises"><p>Thoughtfully packed</p><span>✦</span><p>Celebration-ready</p><span>✦</span><p>Guidance when you need it</p><span>✦</span><p>Made for joyful moments</p></section>
        <section id="collections" className="collections section-shell">
          <div className="section-heading"><div><p className="eyebrow dark">Find your perfect spark</p><h2>Celebrate your way.</h2></div><p>Choose a ready-to-go box or talk to our team for a celebration tailored to your occasion.</p></div>
          <div className="collection-grid">{collections.map((item) => <article className={`collection-card ${item.tone}`} key={item.number}><p className="card-number">{item.number}</p><div className="card-icon">{item.icon}</div>{item.label && <p className="mini-label">{item.label}</p>}<h3>{item.title}</h3><p>{item.description}</p><a href="#contact">{item.action} <span>→</span></a></article>)}</div>
        </section>
        <section id="why-prime" className="story section-shell">
          <div className="story-card"><div className="story-mark">P<span>✦</span>C</div><p className="eyebrow">The Prime promise</p><h2>Every box begins with a reason to celebrate.</h2><p>We believe celebrations feel best when they are simple to plan, wonderful to share, and remembered long after the lights fade.</p><a className="button button-outline" href="#contact">Speak with our team <span>→</span></a></div>
          <div className="benefit-list">{promises.map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </section>
        <section id="safety" className="safety"><div className="safety-inner section-shell"><p className="eyebrow">Celebrate responsibly</p><h2>Good celebrations leave<br />only happy memories.</h2><div className="safety-points"><p><span>✓</span> Follow all package instructions carefully.</p><p><span>✓</span> Use fireworks outdoors in an open, clear area.</p><p><span>✓</span> Keep water nearby and supervise children at all times.</p></div></div></section>
        <section id="contact" className="contact section-shell"><div><p className="eyebrow dark">Let’s celebrate</p><h2>Planning something special?</h2><p>Tell us the occasion and your preferred celebration style. We’ll help you find a suitable pack.</p></div><div className="contact-card"><p className="contact-label">Call or WhatsApp</p><a href="tel:+919000000000">+91 90000 00000</a><p className="contact-label">Email</p><a href="mailto:hello@primecrackers.in">hello@primecrackers.in</a><p className="contact-note">Sample contact details — replace with your business information before launch.</p></div></section>
        <section className="legal-section section-shell" aria-label="Legal information">
          <article id="privacy-policy" className="legal-card"><p className="eyebrow dark">Your information</p><h2>Privacy Policy</h2><p>We use the contact details and order enquiries you share with us only to respond to your request, arrange orders, and provide customer support. We do not sell your personal information.</p><p>We keep information only for as long as needed for service, records, or legal obligations. To request an update or deletion of your details, contact us at <a href="mailto:hello@primecrackers.in">hello@primecrackers.in</a>.</p></article>
          <article id="terms-conditions" className="legal-card"><p className="eyebrow dark">Please read</p><h2>Terms &amp; Conditions</h2><p>Products are supplied subject to availability and applicable law. Please follow all label instructions, use products only as intended, and ensure adult supervision where required.</p><p>Prices, assortments, and delivery availability may change. An order is confirmed only after our team confirms the product, price, and delivery details with you.</p></article>
        </section>
      </main>
      <footer className="site-footer"><Brand footer /><p>Celebrations, thoughtfully lit.<br /><a className="footer-link" href="#privacy-policy">Privacy Policy</a><span className="footer-divider">•</span><a className="footer-link" href="#terms-conditions">Terms &amp; Conditions</a></p><p className="copyright">© {new Date().getFullYear()} Prime Crackers. All rights reserved.</p></footer>
      <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Prime Crackers on WhatsApp"><span aria-hidden="true">◔</span><b>WhatsApp</b></a>
    </>
  );
}
