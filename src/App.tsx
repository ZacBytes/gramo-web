import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.2,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.35 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="root">
      <canvas ref={canvasRef} className="canvas" />
      <div className="glow-center" />
      <div className="glow-orange" />

      <main className="main">
        <div className="logo-wrap">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="32" stroke="white" strokeWidth="4.5" strokeOpacity="0.1"/>
            <circle
              cx="40" cy="40" r="32"
              stroke="#FF6B00" strokeWidth="4.5" strokeLinecap="round"
              strokeDasharray="151" strokeDashoffset="38"
              transform="rotate(-90 40 40)"
            />
            <text x="40" y="47" textAnchor="middle"
              fontFamily="-apple-system, 'SF Pro Rounded', 'Helvetica Neue', sans-serif"
              fontSize="32" fontWeight="700" fill="white">G</text>
          </svg>
        </div>

        <h1 className="wordmark">Gramo</h1>

        <div className="coming-soon-pill">
          <span className="pill-dot" />
          Coming Soon
        </div>

        <p className="tagline">
          Track macros by just talking.<br />
          <span className="tagline-dim">No barcodes. No spreadsheets. Just chat.</span>
        </p>

        <div className="feature-row">
          <div className="feature">
            <span className="feature-icon">🤖</span>
            <span>AI-powered logging</span>
          </div>
          <div className="feature-sep" />
          <div className="feature">
            <span className="feature-icon">📷</span>
            <span>Photo recognition</span>
          </div>
          <div className="feature-sep" />
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <span>Smart macro targets</span>
          </div>
        </div>

        {!submitted ? (
          <form className="notify-form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="email-input"
              required
            />
            <button type="submit" className="notify-btn">
              Notify me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        ) : (
          <div className="success-msg">
            <span>✓</span> You're on the list — we'll let you know when we launch.
          </div>
        )}

        <p className="platform">
          <svg width="14" height="17" viewBox="0 0 14 17" fill="none" style={{display:"inline",verticalAlign:"middle",marginRight:5}}>
            <path d="M11.5 8.8c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8C2 3.5 0 4.8 0 7.8c0 1.8.7 3.7 1.6 4.9.8 1.2 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1 2.8-2.2.9-1.3 1.2-2.6 1.2-2.6-.1 0-2-.8-2-3.4zM9.3 2c.7-.8 1.1-1.9 1-3-.9.1-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.8 1 .1 2-.5 2.8-1.3z" fill="white" fillOpacity="0.5"/>
          </svg>
          iPhone · iOS 18+
        </p>
      </main>

      <footer className="footer">© 2026 Gramo. All rights reserved.</footer>
    </div>
  );
}

export default App;
