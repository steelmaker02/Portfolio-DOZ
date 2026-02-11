import React, { useEffect, useState } from 'react';

interface AnimatedLogoProps {
    isAtTop?: boolean;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ isAtTop = true }) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        if (!isAtTop) return;

        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 300);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAtTop]);

    const styles = `
    @keyframes glitch-anim-1 {
      0% { clip-path: inset(20% 0 80% 0); transform: translate(-4px, 1px) skew(2deg); }
      20% { clip-path: inset(60% 0 10% 0); transform: translate(4px, -1px) skew(-2deg); }
      40% { clip-path: inset(40% 0 50% 0); transform: translate(-4px, 3px) skew(1deg); }
      60% { clip-path: inset(80% 0 5% 0); transform: translate(4px, -3px) skew(-1deg); }
      80% { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 2px) skew(3deg); }
      100% { clip-path: inset(30% 0 50% 0); transform: translate(4px, -2px) skew(-3deg); }
    }

    @keyframes glitch-anim-2 {
      0% { clip-path: inset(10% 0 60% 0); transform: translate(4px, -1px) skew(-2deg); }
      20% { clip-path: inset(80% 0 5% 0); transform: translate(-4px, 2px) skew(2deg); }
      40% { clip-path: inset(30% 0 20% 0); transform: translate(4px, 1px) skew(-1deg); }
      60% { clip-path: inset(15% 0 80% 0); transform: translate(-4px, -2px) skew(1deg); }
      80% { clip-path: inset(55% 0 10% 0); transform: translate(4px, 2px) skew(-3deg); }
      100% { clip-path: inset(40% 0 30% 0); transform: translate(-4px, 1px) skew(3deg); }
    }
    
    @keyframes glitch-anim-main {
      0% { transform: translate(1px, 1px); }
      20% { transform: translate(-1px, -1px); }
      40% { transform: translate(-1px, 1px); }
      60% { transform: translate(1px, -1px); }
      80% { transform: translate(1px, 1px); }
      100% { transform: translate(-1px, -1px); }
    }

    .glitch-wrapper {
      position: relative;
      width: 48px; 
      height: 48px;
    }

    .glitch-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .glitch-1, .glitch-2 {
      opacity: 0;
    }

    .glitch-1 {
      filter: drop-shadow(2px 0 #ff0055);
    }

    .glitch-2 {
      filter: drop-shadow(-2px 0 #00eaff);
    }

    .glitch-wrapper.active .glitch-1,
    .glitch-wrapper:hover .glitch-1 {
      opacity: 1;
      animation: glitch-anim-1 0.3s infinite linear alternate-reverse;
    }

    .glitch-wrapper.active .glitch-2,
    .glitch-wrapper:hover .glitch-2 {
      opacity: 1;
      animation: glitch-anim-2 0.3s infinite linear alternate-reverse;
    }

    .glitch-wrapper.active .glitch-main,
    .glitch-wrapper:hover .glitch-main {
      animation: glitch-anim-main 0.3s infinite linear;
      opacity: 0.9;
    }
  `;

    return (
        <>
            <style>{styles}</style>

            <div className={`glitch-wrapper ${isGlitching ? 'active' : ''}`}>

                <img
                    src="images/logo.svg"
                    alt=""
                    className="glitch-img glitch-1"
                />

                <img
                    src="images/logo.svg"
                    alt=""
                    className="glitch-img glitch-2"
                />

                <img
                    src="images/logo.svg"
                    alt="Logo"
                    className="glitch-img glitch-main relative z-10"
                />

            </div>
        </>
    );
};

export default AnimatedLogo;