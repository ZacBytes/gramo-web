import { Link } from "react-router-dom";
import "./App.css";

const AppIcon = ({ size = 96 }: { size?: number }) => (
  <img
    src="/app-icon.png"
    alt="Gramo"
    width={size}
    height={size}
    style={{
      borderRadius: `${size * 0.2237}px`,
      boxShadow: `0 ${size * 0.08}px ${size * 0.22}px rgba(0,0,0,0.55), 0 ${size * 0.02}px ${size * 0.06}px rgba(0,0,0,0.35)`,
      display: "block",
    }}
  />
);

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="#FF6B00" strokeWidth="1.5"/>
        <path d="M10 14.5l2.5 2.5 5.5-5.5" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Just talk",
    body: "Tell Gramo what you ate. It understands context, brands, portion sizes, and recipes — no manual entry.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="7" width="18" height="14" rx="2" stroke="#FF6B00" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="3.5" stroke="#FF6B00" strokeWidth="1.5"/>
        <path d="M10 7V5.5M18 7V5.5" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Photo logging",
    body: "Point your camera at a meal, nutrition label, or food scale. Gramo reads and logs it instantly.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 20l4-8 4 5 3-4 5 7" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="8" r="2" stroke="#FF6B00" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Smart targets",
    body: "Built around your body stats and goals. Calories and macros that actually fit your life.",
  },
];

export default function App() {
  return (
    <div className="page">
      {/* Ambient background */}
      <div className="bg-noise" />
      <div className="bg-glow" />

      {/* Nav */}
      <nav className="nav">
        <div className="nav-logo">
          <AppIcon size={28} />
          <span className="nav-name">Gramo</span>
        </div>
        <span className="nav-badge">Coming to iPhone</span>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-logo">
          <AppIcon size={120} />
        </div>

        <h1 className="hero-title">
          Track macros.<br />
          <em>Just talk.</em>
        </h1>

        <p className="hero-sub">
          Gramo is an AI-powered macro tracker that understands you.<br className="br-desktop" />
          Describe your meal. It handles the rest.
        </p>

        <div className="hero-meta">
          <AppleLogo />
          <span>iPhone · iOS 18</span>
          <span className="dot">·</span>
          <span>2026</span>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Features */}
      <section className="features">
        <p className="features-eyebrow">Why Gramo</p>
        <h2 className="features-title">The tracker that gets out of your way.</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-name">{f.title}</h3>
              <p className="feature-body">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="quote-section">
        <blockquote className="quote">
          "Nutrition tracking done right — intelligent, effortless, and designed for real life."
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <AppIcon size={20} />
            <span>Gramo</span>
          </div>
          <div className="footer-links">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </div>
          <span className="footer-copy">Copyright © 2026 Gramo. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

const AppleLogo = () => (
  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" style={{ display: "inline", verticalAlign: "middle" }}>
    <path d="M10.8 8.3c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.6.8-3.2.8-.7 0-1.7-.7-2.8-.7C1.9 3.5 0 4.7 0 7.5c0 1.7.6 3.4 1.4 4.6.8 1.1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7 1.3 0 1.7.7 2.8.7 1.1 0 1.8-.9 2.6-2 .8-1.2 1.1-2.4 1.1-2.4 0 0-1.8-.7-1.6-3.1l.2.5zM8.8 2c.6-.8 1-1.8.9-2.7-.9.1-1.9.6-2.6 1.4-.6.7-1 1.7-.9 2.6.9.1 1.9-.5 2.6-1.3z" fill="currentColor" fillOpacity="0.5"/>
  </svg>
);
