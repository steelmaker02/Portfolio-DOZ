import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AbstractBackground: React.FC = () => {
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 800]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 120]);

    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 400]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

            <motion.div
                style={{ y: y1, rotate: rotate1 }}
                className="hidden 2xl:block absolute top-[-10%] right-[-20%] w-[800px] h-[800px] opacity-40 mix-blend-screen [mask-image:radial-gradient(closest-side,black_60%,transparent_100%)]"
            >
                <img
                    src="/images/shapes/shape1.webp"
                    alt=""
                    className="w-full h-full object-contain blur-sm"
                />
            </motion.div>

            <motion.div
                style={{ y: y2, rotate: rotate2 }}
                className="hidden 2xl:block absolute top-[10%] left-[-15%] w-[800px] h-[800px] opacity-30 mix-blend-screen [mask-image:radial-gradient(closest-side,black_70%,transparent_100%)]"
            >
                <img
                    src="/images/shapes/shape2.webp"
                    alt=""
                    className="w-full h-full object-contain blur-sm"
                />
            </motion.div>

            <motion.div
                style={{
                    y: y3,
                    rotate: rotate3,
                    x: "-50%"
                }}

                className="absolute bottom-[-5%] left-1/2 w-[350px] h-[350px] 2xl:w-[720px] 2xl:h-[720px] opacity-20 mix-blend-screen"
            >
                <img
                    src="/images/shapes/shape3.webp"
                    alt=""
                    className="w-full h-full object-cover blur-sm"
                />
            </motion.div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

        </div>
    );
};

export default AbstractBackground;