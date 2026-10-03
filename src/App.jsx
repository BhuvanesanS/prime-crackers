import { useEffect, useState } from 'react';

const logo = '/prime-crackers-logo.png';
const whatsappUrl = 'https://wa.me/919384006200?text=Hi%20Prime%20Crackers%2C%20I%20want%20to%20order%20crackers%20for%20delivery%20in%20[My%20District].';
const coverageAreas = ['Chennai', 'Tiruvallur', 'Kanchipuram', 'Chengalpattu'];

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

const pageMetadata = {
  '/about-us': ['About Prime Crackers | Sivakasi Fireworks Delivery', 'Learn about Prime Crackers and our licensed Sivakasi wholesale-distributor delivery support across Chennai, Tiruvallur, Kanchipuram, and Chengalpattu.'],
  '/faq': ['Safety Guidelines & FAQs | Prime Crackers', 'Read Prime Crackers safety guidance, ordering help, minimum-order rules, and four-district delivery FAQs.'],
};

function InformationPage({ type }) {
  const isAbout = type === 'about';
  const title = isAbout ? 'About Prime Crackers' : 'Safety Guidelines & FAQs';
  return <><div className="announcement-bar"><p>Direct Sivakasi Factory Rates | Express Delivery Across Chennai, Tiruvallur, Kanchipuram &amp; Chengalpattu | Min. Order ₹2,000</p></div><header className="site-header"><Brand /><nav className="main-nav open"><a href="/">Home</a><a href="/about-us">About us</a><a href="/faq">Safety &amp; FAQs</a><a className="nav-contact" href={whatsappUrl}>WhatsApp order <span>↗</span></a></nav></header><main className="info-page section-shell"><p className="eyebrow dark">Prime Crackers</p><h1>{title}</h1>{isAbout ? <><p className="intro">Prime Crackers is an order-estimation and inquiry portal for authentic Sivakasi fireworks, serving Chennai, Tiruvallur, Kanchipuram, and Chengalpattu through licensed wholesale distributors and authorized local delivery networks.</p><div className="about-grid"><div><h2>Our focus</h2><p>We help customers find genuine, high-quality celebration products at factory-linked wholesale rates, with careful packaging and a clear local confirmation process before delivery.</p></div><div><h2>Why choose us?</h2><ul><li>Licensed Sivakasi manufacturer sourcing.</li><li>Dedicated delivery across four covered districts.</li><li>Green-cracker options subject to availability and law.</li><li>Heavy-duty corrugated packaging for safer transit.</li></ul></div></div></> : <><section className="safety-copy"><h2>Celebrate responsibly</h2><ul><li>Read and follow every package instruction.</li><li>Use fireworks outdoors in a clear, open area.</li><li>Keep water nearby and supervise children.</li><li>Use only lawful products and follow local time and safety restrictions.</li></ul></section><section className="faq"><details open><summary>Which areas do you deliver to?</summary><p>Only Chennai, Tiruvallur, Kanchipuram, and Chengalpattu districts.</p></details><details><summary>How do I place an order?</summary><p>Browse, create an estimate, submit your district and contact details, and wait for stock and delivery confirmation by WhatsApp or call.</p></details><details><summary>What is the minimum order value?</summary><p>₹2,000 for delivery in our four-district coverage zone.</p></details><details><summary>How long does delivery take?</summary><p>Usually 2 to 4 business days after confirmation, subject to stock, transport schedules, and regional regulations.</p></details></section></>}</main><footer className="site-footer"><Brand footer /><p className="footer-disclaimer"><strong>Disclaimer &amp; Regulatory Compliance:</strong> As per statutory guidelines, this platform operates as an order estimation and inquiry facilitation portal for licensed Sivakasi wholesale distributors serving Chennai, Tiruvallur, Kanchipuram, and Chengalpattu districts. All orders are fulfilled safely via authorized local transport and delivery networks in compliance with regional regulations.</p></footer><a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">◔</span><b>WhatsApp</b></a></>;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  useEffect(() => { const meta = pageMetadata[path] || ['Prime Crackers | Sivakasi Crackers Online | Chennai, Tiruvallur, Kanchi, Chengalpattu', 'Buy authentic Sivakasi fireworks online at wholesale prices. Doorstep delivery across Chennai, Tiruvallur, Kanchipuram, and Chengalpattu districts.']; document.title = meta[0]; document.querySelector('meta[name="description"]')?.setAttribute('content', meta[1]); document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta[0]); document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta[1]); document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://prime-crackers-mu.vercel.app${path === '/' ? '/' : path}`); }, [path]);
  if (path === '/about-us') return <InformationPage type="about" />;
  if (path === '/faq') return <InformationPage type="faq" />;

  return (
    <>
      <div className="announcement-bar"><p>Direct Sivakasi Factory Rates | Express Delivery Across Chennai, Tiruvallur, Kanchipuram &amp; Chengalpattu | Min. Order ₹2,000</p></div>
      <header className="site-header">
        <Brand />
        <button className="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}><span /><span /><span /></button>
        <nav className={`main-nav${isMenuOpen ? ' open' : ''}`} aria-label="Main navigation">
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#why-prime" onClick={closeMenu}>Why Prime</a>
          <a href="/about-us" onClick={closeMenu}>About us</a>
          <a href="/faq" onClick={closeMenu}>FAQs</a>
          <a href="#safety" onClick={closeMenu}>Safety</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact us <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="coverage-banner" aria-label="Delivery coverage verification"><strong>Delivery coverage verified</strong><ul>{coverageAreas.map((area) => <li key={area}>✓ {area}</li>)}</ul></section>
        <section id="home" className="hero">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="hero-copy">
            <p className="eyebrow">A brighter way to celebrate</p><h1>Make every<br /><i>moment glow.</i></h1>
            <p className="hero-text">Authentic Sivakasi fireworks, carefully packed for doorstep and transport delivery across Chennai, Tiruvallur, Kanchipuram, and Chengalpattu.</p>
            <div className="hero-actions"><a className="button button-primary" href="#collections">Explore collections <span>→</span></a><a className="button button-text" href="#contact">Plan a celebration</a></div>
            <div className="hero-meta"><div><strong>3,000+</strong><span>happy celebrations</span></div><div><strong>Handpicked</strong><span>festival essentials</span></div></div>
          </div>
          <div className="hero-art" aria-label="Prime Crackers festive logo display">
            <div className="orbital-ring ring-one" /><div className="orbital-ring ring-two" /><div className="hero-logo-frame"><img src={logo} alt="Prime Crackers festive logo" /></div>
            <div className="spark spark-a">✦</div><div className="spark spark-b">✦</div><div className="spark spark-c">✦</div><p className="art-caption">Light up the occasion</p>
          </div>
        </section>

        <section className="trust-strip" aria-label="Prime Crackers promises"><p>Thoughtfully packed</p><span>✦</span><p>Celebration-ready</p><span>✦</span><p>Guidance when you need it</p><span>✦</span><p>Made for joyful moments</p></section>
        <section className="order-flow section-shell"><p className="eyebrow dark">Order instructions</p><h2>Four simple steps to delivery.</h2><ol><li><span>01</span><strong>Browse</strong><p>Select products or combo packs.</p></li><li><span>02</span><strong>Estimate</strong><p>Review your estimated order value.</p></li><li><span>03</span><strong>Submit</strong><p>Share your district and contact details.</p></li><li><span>04</span><strong>Delivery</strong><p>We confirm stock and arrange delivery.</p></li></ol></section>
        <section id="collections" className="collections section-shell">
          <div className="section-heading"><div><p className="eyebrow dark">Find your perfect spark</p><h2>Celebrate your way.</h2></div><p>Choose a ready-to-go box or talk to our team for a celebration tailored to your occasion.</p></div>
          <div className="collection-grid">{collections.map((item) => <article className={`collection-card ${item.tone}`} key={item.number}><p className="card-number">{item.number}</p><div className="card-icon">{item.icon}</div>{item.label && <p className="mini-label">{item.label}</p>}<h3>{item.title}</h3><p>{item.description}</p><a href="#contact">{item.action} <span>→</span></a></article>)}</div>
        </section>
        <section id="why-prime" className="story section-shell">
          <div className="story-card"><div className="story-mark">P<span>✦</span>C</div><p className="eyebrow">The Prime promise</p><h2>Every box begins with a reason to celebrate.</h2><p>We believe celebrations feel best when they are simple to plan, wonderful to share, and remembered long after the lights fade.</p><a className="button button-outline" href="#contact">Speak with our team <span>→</span></a></div>
          <div className="benefit-list">{promises.map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        </section>
        <section id="about-us" className="about section-shell"><p className="eyebrow dark">About Prime Crackers</p><h2>Authentic Sivakasi fireworks for the greater Chennai region.</h2><div className="about-grid"><p>Welcome to Prime Crackers, an online portal for authentic Sivakasi fireworks serving Chennai, Tiruvallur, Kanchipuram, and Chengalpattu. We help customers access high-quality products through licensed wholesale distributors and authorized local delivery networks.</p><div><h3>Why choose Prime Crackers?</h3><ul><li>Direct sourcing from licensed Sivakasi manufacturers.</li><li>Dedicated delivery across four covered districts.</li><li>Green-cracker options, subject to availability and applicable law.</li><li>Heavy-duty corrugated packaging for safer transit.</li></ul></div></div></section>
        <section id="safety" className="safety"><div className="safety-inner section-shell"><p className="eyebrow">Celebrate responsibly</p><h2>Good celebrations leave<br />only happy memories.</h2><div className="safety-points"><p><span>✓</span> Follow all package instructions carefully.</p><p><span>✓</span> Use fireworks outdoors in an open, clear area.</p><p><span>✓</span> Keep water nearby and supervise children at all times.</p></div></div></section>
        <section id="faq" className="faq section-shell"><p className="eyebrow dark">Frequently asked questions</p><h2>Order and delivery help.</h2><details open><summary>Which areas do you deliver to?</summary><p>We deliver exclusively across Chennai, Tiruvallur, Kanchipuram, and Chengalpattu districts. Coverage is confirmed before an order is finalized.</p></details><details><summary>How do I place an order?</summary><p>Browse the price list, select products or combo packs, and submit an order estimate. Our team confirms stock and contacts you by WhatsApp or call to finalize delivery.</p></details><details><summary>What is the minimum order value?</summary><p>The minimum delivery order value is ₹2,000.</p></details><details><summary>How long does delivery take?</summary><p>Confirmed orders are generally delivered within 2 to 4 business days, subject to stock, transport schedules, and local regulations.</p></details></section>
        <section id="contact" className="contact section-shell"><div><p className="eyebrow dark">Let’s celebrate</p><h2>Planning something special?</h2><p>Tell us the occasion and your preferred celebration style. We’ll help you find a suitable pack.</p></div><div className="contact-card"><p className="contact-label">Call or WhatsApp</p><a href="tel:+919384006200">+91 93840 06200</a><p className="contact-label">Email</p><a href="mailto:primecrackersofficial@gmail.com">primecrackersofficial@gmail.com</a><p className="contact-note">Contact our team for product availability, celebration packs, and order support.</p></div></section>
        <section className="legal-section section-shell" aria-label="Legal information">
          <article id="privacy-policy" className="legal-card"><p className="eyebrow dark">Your information</p><h2>Privacy Policy</h2><p>We use the contact details and order enquiries you share with us only to respond to your request, arrange orders, and provide customer support. We do not sell your personal information.</p><p>We keep information only for as long as needed for service, records, or legal obligations. To request an update or deletion of your details, contact us at <a href="mailto:primecrackersofficial@gmail.com">primecrackersofficial@gmail.com</a>.</p></article>
          <article id="terms-conditions" className="legal-card"><p className="eyebrow dark">Please read</p><h2>Terms &amp; Conditions</h2><p>Products are supplied subject to availability and applicable law. Please follow all label instructions, use products only as intended, and ensure adult supervision where required.</p><p>Prices, assortments, and delivery availability may change. An order is confirmed only after our team confirms the product, price, and delivery details with you.</p></article>
        </section>
        <section className="transport-trust section-shell" aria-label="Delivery trust information"><p>Delivery arranged through authorized local transport and delivery networks</p><div><span><b aria-hidden="true">▣</b> SECURE PACKING</span><span><b aria-hidden="true">⇄</b> AUTHORIZED TRANSPORT</span><span><b aria-hidden="true">⌖</b> LOCAL DELIVERY SUPPORT</span></div><small>Partner details are confirmed during delivery scheduling.</small></section>
      </main>
      <footer className="site-footer"><Brand footer /><p>Celebrations, thoughtfully lit.<br /><a className="footer-link" href="#privacy-policy">Privacy Policy</a><span className="footer-divider">•</span><a className="footer-link" href="#terms-conditions">Terms &amp; Conditions</a></p><p className="copyright">© {new Date().getFullYear()} Prime Crackers. All rights reserved.</p><p className="footer-disclaimer"><strong>Disclaimer &amp; Regulatory Compliance:</strong> As per statutory guidelines, this platform operates as an order estimation and inquiry facilitation portal for licensed Sivakasi wholesale distributors serving Chennai, Tiruvallur, Kanchipuram, and Chengalpattu districts. All orders are fulfilled safely via authorized local transport and delivery networks in compliance with regional regulations.</p></footer>
      <a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Prime Crackers on WhatsApp"><span aria-hidden="true">◔</span><b>WhatsApp</b></a>
    </>
  );
}
