import React, { useEffect, useRef } from 'react';
import './LandingPage.css';

function LandingPage({ onEnter }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        for (let i = 0; i < 120; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 0.5,
                dx: (Math.random() - 0.5) * 0.4,
                dy: (Math.random() - 0.5) * 0.4,
                alpha: Math.random() * 0.7 + 0.3,
                color: Math.random() > 0.6 ? '#e62429' : '#ffffff'
            });
        }

        let animId;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            ctx.globalAlpha = 1;
            animId = requestAnimationFrame(draw);
        };
        draw();

        const onResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', onResize);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div className="landing-page">
            <canvas ref={canvasRef} className="particle-canvas" />

            {/* Background red glow */}
            <div className="red-glow" />

            {/* Top MARVEL logo */}
            <div className="marvel-logo-bar">
                <span className="marvel-logo-text">MARVEL</span>
            </div>

            {/* Hero silhouettes */}
            <div className="hero-silhouettes">
                {/* Iron Man */}
                <div className="hero-figure hero-ironman">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="22" rx="16" ry="18" fill="#8B0000" />
                        <rect x="24" y="38" width="32" height="58" rx="4" fill="#8B0000" />
                        <rect x="10" y="42" width="14" height="40" rx="4" fill="#8B0000" />
                        <rect x="56" y="42" width="14" height="40" rx="4" fill="#8B0000" />
                        <rect x="24" y="96" width="12" height="50" rx="3" fill="#8B0000" />
                        <rect x="44" y="96" width="12" height="50" rx="3" fill="#8B0000" />
                        <ellipse cx="40" cy="55" rx="7" ry="7" fill="#e62429" opacity="0.8" />
                    </svg>
                    <span className="hero-name">Iron Man</span>
                </div>

                {/* Captain America */}
                <div className="hero-figure hero-cap">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="22" rx="16" ry="18" fill="#4a4a8a" />
                        <rect x="24" y="38" width="32" height="58" rx="4" fill="#4a4a8a" />
                        <rect x="10" y="42" width="14" height="40" rx="4" fill="#4a4a8a" />
                        <rect x="56" y="42" width="14" height="40" rx="4" fill="#4a4a8a" />
                        <rect x="24" y="96" width="12" height="50" rx="3" fill="#4a4a8a" />
                        <rect x="44" y="96" width="12" height="50" rx="3" fill="#4a4a8a" />
                        <circle cx="40" cy="58" r="10" fill="none" stroke="#ffffff" strokeWidth="2" />
                        <path d="M40 49 L40 67" stroke="#ffffff" strokeWidth="2" />
                        <path d="M31 58 L49 58" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                    <span className="hero-name">Cap. America</span>
                </div>

                {/* Thor */}
                <div className="hero-figure hero-thor">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="22" rx="16" ry="18" fill="#5a5a2a" />
                        <rect x="22" y="38" width="36" height="58" rx="5" fill="#5a5a2a" />
                        <rect x="8" y="42" width="14" height="40" rx="4" fill="#5a5a2a" />
                        <rect x="58" y="42" width="14" height="40" rx="4" fill="#5a5a2a" />
                        <rect x="24" y="96" width="12" height="50" rx="3" fill="#5a5a2a" />
                        <rect x="44" y="96" width="12" height="50" rx="3" fill="#5a5a2a" />
                        <rect x="58" y="30" width="14" height="22" rx="3" fill="#aaa" />
                        <rect x="62" y="52" width="6" height="30" rx="2" fill="#888" />
                    </svg>
                    <span className="hero-name">Thor</span>
                </div>

                {/* Hulk */}
                <div className="hero-figure hero-hulk">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="20" rx="19" ry="18" fill="#2d6a2d" />
                        <rect x="20" y="36" width="40" height="60" rx="6" fill="#2d6a2d" />
                        <rect x="4" y="38" width="18" height="50" rx="5" fill="#2d6a2d" />
                        <rect x="58" y="38" width="18" height="50" rx="5" fill="#2d6a2d" />
                        <rect x="22" y="96" width="14" height="48" rx="4" fill="#2d6a2d" />
                        <rect x="44" y="96" width="14" height="48" rx="4" fill="#2d6a2d" />
                    </svg>
                    <span className="hero-name">Hulk</span>
                </div>

                {/* Black Widow */}
                <div className="hero-figure hero-widow">
                    <svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="40" cy="22" rx="14" ry="17" fill="#1a1a1a" />
                        <rect x="26" y="37" width="28" height="58" rx="4" fill="#1a1a1a" />
                        <rect x="12" y="42" width="14" height="36" rx="4" fill="#1a1a1a" />
                        <rect x="54" y="42" width="14" height="36" rx="4" fill="#1a1a1a" />
                        <rect x="26" y="95" width="11" height="52" rx="3" fill="#1a1a1a" />
                        <rect x="43" y="95" width="11" height="52" rx="3" fill="#1a1a1a" />
                        <circle cx="40" cy="60" r="5" fill="#e62429" opacity="0.9" />
                    </svg>
                    <span className="hero-name">Black Widow</span>
                </div>
            </div>

            {/* Center content */}
            <div className="landing-center">
                <div className="avengers-a-logo">A</div>
                <h1 className="landing-title">
                    <span className="title-avengers">AVENGERS</span>
                    <span className="title-sub">LANGUAGE LEARNER</span>
                </h1>
                <p className="landing-quote">"Whatever it takes."</p>
                <p className="landing-desc">
                    Translate across the Multiverse. Use the power of JARVIS to speak and be understood in any language.
                </p>
                <button className="enter-btn" onClick={onEnter}>
                    <span className="enter-btn-inner">
                        ENTER THE PORTAL
                        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </button>
            </div>

            
        </div>
    );
}

export default LandingPage;
