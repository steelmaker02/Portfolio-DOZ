import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [isLogoVisible, setIsLogoVisible] = useState(true);

    useEffect(() => {
        const timerHideLogo = setTimeout(() => {
            setIsLogoVisible(false);
        }, 2500);

        const timerOpenCurtain = setTimeout(() => {
            onComplete();
        }, 3300);

        return () => {
            clearTimeout(timerHideLogo);
            clearTimeout(timerOpenCurtain);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{
                y: "100%",
                transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden will-change-transform"
        >

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLogoVisible ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full z-50"
            >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.9)_20%,rgba(255,255,255,0.9)_80%,transparent_100%)] opacity-90" />
                <div className="absolute top-[-1px] left-0 w-full h-[3px] bg-[linear-gradient(90deg,transparent_0%,#3B82F6_10%,#3B82F6_90%,transparent_100%)] blur-[1px]" />
                <div className="absolute top-[-15px] left-0 w-full h-[30px] bg-[linear-gradient(90deg,transparent_0%,rgba(37,99,235,0.6)_5%,rgba(37,99,235,0.6)_95%,transparent_100%)] blur-xl opacity-70" />
            </motion.div>

            <div className="relative flex items-center justify-center">
                <motion.img
                    src="images/logo_big.svg"
                    alt="Loading..."

                    width="200"
                    height="200"
                    fetchPriority="high"
                    loading="eager"

                    className="w-32 md:w-48 object-contain relative z-10"
                    variants={{
                        hidden: {
                            opacity: 0,
                            scale: 0.95,
                            filter: "blur(10px)",
                            transition: { duration: 0.8, ease: "easeInOut" }
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                            transition: { duration: 1.5, ease: "easeOut" }
                        }
                    }}
                    initial="hidden"
                    animate={isLogoVisible ? "visible" : "hidden"}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;