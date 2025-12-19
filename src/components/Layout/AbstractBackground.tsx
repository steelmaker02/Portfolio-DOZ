import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
const AbstractBackground: React.FC = () => {
    const { scrollYProgress } = useScroll();
    code
    Code
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 50 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX - innerWidth / 2);
            mouseY.set(e.clientY - innerHeight / 2);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);


    const scrollY1 = useTransform(scrollYProgress, [0, 1], [0, 800]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 120]);

    const scrollY2 = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const scrollY3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 400]);


    const x1 = useTransform(smoothMouseX, (val) => val * -0.02);
    const y1 = useTransform([scrollY1, smoothMouseY], ([scroll, mouse]) => scroll + mouse * -0.02);

    const x2 = useTransform(smoothMouseX, (val) => val * -0.05);
    const y2 = useTransform([scrollY2, smoothMouseY], ([scroll, mouse]) => scroll + mouse * -0.05);

    const x3 = useTransform(smoothMouseX, (val) => val * -0.08);
    const y3 = useTransform([scrollY3, smoothMouseY], ([scroll, mouse]) => scroll + mouse * -0.08);


    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

            <motion.div
                style={{ x: x1, y: y1, rotate: rotate1 }}
                className="will-change-transform hidden 2xl:block absolute top-[-10%] right-[-20%] w-[800px] h-[800px] opacity-40 mix-blend-screen [mask-image:radial-gradient(closest-side,black_60%,transparent_100%)]"
            >
                <img
                    src="images/shapes/shape1.webp"
                    alt="Abstract 3D Background Shape"
                    loading="lazy"
                    decoding="async"
                    // @ts-ignore
                    fetchPriority="low"
                    className="w-full h-full object-contain blur-sm"
                />
            </motion.div>

            <motion.div
                style={{ x: x2, y: y2, rotate: rotate2 }}
                className="will-change-transform hidden 2xl:block absolute top-[10%] left-[-15%] w-[800px] h-[800px] opacity-30 mix-blend-screen [mask-image:radial-gradient(closest-side,black_70%,transparent_100%)]"
            >
                <img
                    src="images/shapes/shape2.webp"
                    alt="Abstract 3D Background Shape"
                    loading="lazy"
                    decoding="async"
                    // @ts-ignore
                    fetchPriority="low"
                    className="w-full h-full object-contain blur-sm"
                />
            </motion.div>

            <motion.div
                style={{
                    x: x3,
                    y: y3,
                    rotate: rotate3,
                    left: "50%",
                    translateX: "-50%"
                }}
                className="will-change-transform absolute bottom-[-5%] w-[350px] h-[350px] 2xl:w-[720px] 2xl:h-[720px] opacity-20 mix-blend-screen"
            >
                <img
                    src="images/shapes/shape3.webp"
                    alt="Abstract 3D Background Shape"
                    loading="lazy"
                    decoding="async"
                    // @ts-ignore
                    fetchPriority="low"
                    className="w-full h-full object-cover blur-sm"
                />
            </motion.div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

        </div>
    );
};
export default AbstractBackground;