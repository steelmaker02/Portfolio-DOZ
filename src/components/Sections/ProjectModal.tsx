import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Project, ProjectCategory } from '../../types';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {

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

            const handlePopState = () => {
                onClose();
            };

            window.addEventListener('popstate', handlePopState);

            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
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
                        className="absolute top-0 left-0 right-0 pt-12 pb-4 px-4 md:p-6 bg-gradient-to-b from-black/95 to-transparent z-50 flex justify-between items-start pointer-events-none"
                    >
                        <div className="pointer-events-auto pl-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                            <div>
                                <h3 className="text-lg md:text-2xl font-display font-bold text-white drop-shadow-md leading-tight">{project.title}</h3>
                                <p className="text-white/80 text-xs md:text-sm font-mono mt-1">{project.category} • {project.year}</p>
                            </div>

                            {project.brandbookUrl && (
                                <a
                                    href={project.brandbookUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-1.5 md:px-6 md:py-2 bg-white text-black text-xs md:text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-colors shadow-lg self-start mt-2 md:mt-0"
                                >
                                    Brandbuch PDF
                                </a>
                            )}
                        </div>

                        <button
                            onClick={handleManualClose}
                            className="pointer-events-auto p-2 md:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-colors text-white border border-white/10"
                        >
                            <X size={24} />
                        </button>
                    </motion.div>

                    <div
                        className="flex-1 overflow-y-auto p-0 bg-[#0a0a0a]"
                        data-lenis-prevent="true"
                    >
                        {project.category === ProjectCategory.WEB && (
                            <div className="w-full flex flex-col items-center">
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
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {(project.category === ProjectCategory.PHOTOSHOP ||
                            project.category === ProjectCategory.ILLUSTRATOR ||
                            project.category === ProjectCategory.AI) && (

                                <div className="w-full pt-32 md:pt-24 px-4 md:px-10 pb-20">

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
                                                <div key={index} className="space-y-2 md:space-y-4">
                                                    <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-[#050505]">
                                                        <img
                                                            src={src}
                                                            alt={`Detail ${index}`}
                                                            className="w-full h-auto block"
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

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;