import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo: React.FC = () => {
    const particles = [
        { id: 1, x: [0, 15, -10, 0], y: [0, -10, 10, 0], size: 2, delay: 0 },
        { id: 2, x: [0, -20, 15, 0], y: [0, 15, -15, 0], size: 3, delay: 0.5 },
        { id: 3, x: [0, 10, -20, 0], y: [0, -20, 5, 0], size: 2, delay: 1 },
    ];

    return (
        <div className="relative flex items-center justify-center group cursor-pointer">

            <motion.div
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 bg-accent/20 blur-xl rounded-full"
            />

            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    animate={{
                        x: p.x,
                        y: p.y,
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: 5 + p.id,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                    className="absolute bg-accent rounded-full"
                    style={{ width: p.size, height: p.size }}
                />
            ))}

            <motion.img
                src="images/logo.svg"
                alt="Logo"
                width="48"
                height="48"
                animate={{
                    rotateY: [0, 10, -10, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative z-10 h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />

            <div className="absolute inset-0 z-20 overflow-hidden rounded-lg pointer-events-none">
                <motion.div
                    animate={{
                        x: ['-200%', '200%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                    }}
                    className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />
            </div>
        </div>
    );
};

export default AnimatedLogo;