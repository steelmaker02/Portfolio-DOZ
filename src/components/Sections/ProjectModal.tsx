import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Image, ArrowDown } from 'lucide-react';
import { Project, ProjectCategory } from '../../types';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {

    const contentRef = useRef<HTMLDivElement>(null);
    const [canScrollDown, setCanScrollDown] = useState(false);

    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    useEffect(() => {
        if (project) {
            window.history.pushState({ modal: true }, '', window.location.href);
            const handlePopState = () => { onClose(); };
            window.addEventListener('popstate', handlePopState);
            return () => { window.removeEventListener('popstate', handlePopState); };
        }
    }, [project]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') handleManualClose();
        };
        if (project) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [project]);

    const [showHeader, setShowHeader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setShowHeader(false), 2500);
        return () => clearTimeout(timer);
    }, [project]);

    const checkScroll = () => {
        if (!contentRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const isScrollable = scrollHeight > clientHeight;
        const isNotAtBottom = scrollTop + clientHeight < scrollHeight - 20;
        setCanScrollDown(isScrollable && isNotAtBottom);
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        const timer = setTimeout(checkScroll, 500);
        return () => {
            window.removeEventListener('resize', checkScroll);
            clearTimeout(timer);
        };
    }, [project]);

    const handleManualClose = () => {
        if (window.history.state?.modal) {
            window.history.back();
        } else {
            onClose();
        }
    };

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-0 md:p-4"
                onClick={handleManualClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="bg-[#121212] w-full max-w-7xl h-full md:h-[95vh] rounded-none md:rounded-2xl overflow-hidden flex flex-col relative border border-white/10 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                    onMouseMove={() => setShowHeader(true)}
                    onTouchStart={() => setShowHeader(true)}
                >

                    <motion.div
                        initial={{ y: -100 }}
                        animate={{ y: showHeader ? 0 : -100 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 right-0 pt-12 pb-4 px-4 md:p-6 bg-gradient-to-b from-black/95 to-transparent z-50 flex flex-col md:flex-row justify-between items-start md:items-center pointer-events-none gap-4"
                    >
                        <div className="pointer-events-auto pl-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-wrap">
                            <div>
                                <h3 className="text-lg md:text-2xl font-display font-bold text-white drop-shadow-md leading-tight">{project.title}</h3>
                                <p className="text-white/80 text-xs md:text-sm font-mono mt-1">{project.category} • {project.year}</p>
                            </div>

                            <div className="flex gap-2 mt-2 md:mt-0">
                                {project.brandbookUrl && (
                                    <a
                                        href={project.brandbookUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center h-10 md:h-12 px-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-xs md:text-sm font-bold transition-all hover:bg-accent hover:border-accent hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                    >
                                        Brandbuch PDF
                                    </a>
                                )}

                                {project.instagramUrl && (
                                    <a
                                        href={project.instagramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center h-10 md:h-12 px-5 gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-xs md:text-sm font-bold transition-all hover:bg-pink-600 hover:border-pink-600 hover:shadow-[0_0_15px_rgba(219,39,119,0.5)]"
                                    >
                                        <Instagram size={18} />
                                        <span className="hidden sm:inline">Instagram</span>
                                    </a>
                                )}

                                {project.adobestockUrl && (
                                    <a
                                        href={project.adobestockUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center h-10 md:h-12 px-5 gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-xs md:text-sm font-bold transition-all hover:bg-orange-600 hover:border-orange-600 hover:shadow-[0_0_15px_rgba(234,88,12,0.5)]"
                                    >
                                        <Image size={18} />
                                        <span className="hidden sm:inline">Adobe Stock</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        <button
                            onClick={handleManualClose}
                            className="pointer-events-auto flex items-center justify-center h-10 w-10 md:h-12 md:w-12 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white transition-all hover:bg-accent hover:border-accent"
                        >
                            <X size={24} />
                        </button>
                    </motion.div>

                    <div
                        ref={contentRef}
                        onScroll={checkScroll}
                        className="flex-1 overflow-y-auto p-0 bg-[#0a0a0a]"
                        data-lenis-prevent="true"
                    >
                        {project.category === ProjectCategory.WEB && (
                            <div className="w-full flex flex-col items-center pt-24 md:pt-28 pb-10">
                                {project.videoUrl && (
                                    <video
                                        src={project.videoUrl}
                                        autoPlay loop muted playsInline
                                        className="w-full h-auto block"
                                    />
                                )}
                                {project.fullWebImage && (
                                    <div className="w-full">
                                        <img
                                            src={project.fullWebImage}
                                            alt="Full Design"
                                            className="w-full h-auto block"
                                            loading="eager"
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {(project.category === ProjectCategory.PHOTOSHOP ||
                            project.category === ProjectCategory.ILLUSTRATOR ||
                            project.category === ProjectCategory.AI) && (

                                <div className="w-full pt-24 md:pt-28 px-4 md:px-10 pb-20">

                                    <div className="max-w-4xl mx-auto mb-10 md:mb-16">
                                        <p className="text-base md:text-2xl text-gray-300 leading-relaxed border-l-4 border-accent pl-4 md:pl-6">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-8 md:gap-16 max-w-6xl mx-auto">
                                        {project.gallery?.map((item, index) => {
                                            const src = typeof item === 'string' ? item : item.src;
                                            const title = typeof item === 'string' ? null : item.title;

                                            return (
                                                <div key={index} className="space-y-4">
                                                    <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-[#050505]">
                                                        <img
                                                            src={src}
                                                            alt={`Detail ${index}`}
                                                            className="w-full h-auto block"
                                                            loading={index < 2 ? "eager" : "lazy"}
                                                            decoding="async"
                                                        />
                                                    </div>

                                                    {title && (
                                                        <h4 className="text-white/70 font-mono text-xs md:text-sm tracking-widest uppercase pl-2">
                                                            {title}
                                                        </h4>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                    </div>

                    <AnimatePresence>
                        {canScrollDown && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                            >
                                <div className="bg-black/60 backdrop-blur-md border border-white/10 text-white rounded-full p-3 shadow-lg">
                                    <motion.div
                                        animate={{ y: [0, 4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                    >
                                        <ArrowDown size={20} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;