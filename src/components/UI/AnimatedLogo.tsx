import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
    isAtTop?: boolean;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ isAtTop = true }) => {
    const glitchStyles = `
    @keyframes glitch-anim-1 {
      0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
      20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
      40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
      60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
      80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
      100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
    }
    @keyframes glitch-anim-2 {
      0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
      20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
      40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 1px); }
      60% { clip-path: inset(15% 0 80% 0); transform: translate(-1px, -2px); }
      80% { clip-path: inset(55% 0 10% 0); transform: translate(1px, 2px); }
      100% { clip-path: inset(40% 0 30% 0); transform: translate(-2px, 1px); }
    }
    
    /* Классы для активации анимации */
    .glitch-layer-1 {
      animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
      opacity: 0;
    }
    .glitch-layer-2 {
      animation: glitch-anim-2 3s infinite linear alternate-reverse;
      opacity: 0;
    }

    /* Включаем анимацию при наведении ИЛИ автоматически каждые пару секунд */
    .logo-container:hover .glitch-layer-1,
    .logo-container.auto-glitch .glitch-layer-1 {
      opacity: 0.8;
    }
    .logo-container:hover .glitch-layer-2,
    .logo-container.auto-glitch .glitch-layer-2 {
      opacity: 0.8;
    }
  `;

    return (
        <>
            <style>{glitchStyles}</style>

            <motion.div
                className="logo-container relative w-12 h-12 flex items-center justify-center"
                initial="idle"
                animate={isAtTop ? "glitch" : "idle"}
                variants={{
                    idle: { opacity: 1 },
                    glitch: {
                        opacity: 1,
                        transition: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 4,
                            duration: 0.2
                        }
                    }
                }}
            >

                <motion.img
                    src="images/logo.svg"
                    alt=""
                    className="glitch-layer-1 absolute inset-0 w-full h-full object-contain"
                    style={{
                        filter: "drop-shadow(2px 0 red)",
                        mixBlendMode: "screen",
                    }}
                    variants={{
                        idle: { opacity: 0 },
                        glitch: { opacity: [0, 1, 0, 1, 0] }
                    }}
                />

                <motion.img
                    src="images/logo.svg"
                    alt=""
                    className="glitch-layer-2 absolute inset-0 w-full h-full object-contain"
                    style={{
                        filter: "drop-shadow(-2px 0 blue)",
                        mixBlendMode: "screen"
                    }}
                    variants={{
                        idle: { opacity: 0 },
                        glitch: { opacity: [0, 1, 0, 0, 1] }
                    }}
                />

                <img
                    src="images/logo.svg"
                    alt="Logo"
                    className="relative z-10 w-full h-full object-contain"
                />

            </motion.div>
        </>
    );
};

export default AnimatedLogo;