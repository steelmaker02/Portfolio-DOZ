import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLenis } from '../Layout/SmoothScroll';

const ScrollProgress: React.FC = () => {
    const lenis = useLenis();
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isTop, setIsTop] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.05 && isTop) {
            setIsTop(false);
        } else if (latest <= 0.05 && !isTop) {
            setIsTop(true);
        }
    });

    const handleClick = () => {
        if (isTop) {
            lenis?.scrollTo(window.innerHeight, { duration: 1.5 });
        } else {
            lenis?.scrollTo(0, { duration: 2 });
        }
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={handleClick}
            aria-label={isTop ? "Nach unten scrollen" : "Nach oben scrollen"}
            className="fixed bottom-6 right-4 md:bottom-32 md:right-8 xl:bottom-10 xl:right-10 z-40 group active:scale-90 transition-transform duration-200"
        >
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full border border-white/10 group-hover:border-white/30 transition-colors cursor-pointer shadow-lg shadow-black/20">

                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="4"
                        fill="none"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#3B82F6"
                        strokeWidth="4"
                        fill="none"
                        pathLength={scaleX}
                        style={{ pathLength: scrollYProgress }}
                    />
                </svg>

                <motion.div
                    animate={{
                        rotate: isTop ? 180 : 0,
                        y: isTop ? [0, 3, 0] : 0
                    }}
                    transition={{
                        rotate: { duration: 0.5 },
                        y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
                    }}
                >
                    <ArrowUp
                        size={20}
                        className={`transition-colors duration-300 ${isTop ? 'text-white/70' : 'text-accent'}`}
                    />
                </motion.div>

            </div>
        </motion.button>
    );
};

export default ScrollProgress;