import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9000]"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed inset-4 md:inset-10 md:max-w-4xl mx-auto bg-[#121212] border border-white/10 rounded-2xl z-[9001] overflow-hidden flex flex-col shadow-2xl max-h-[90vh]"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-white/5 bg-[#121212] shrink-0">
                            <h2 className="text-xl font-display font-bold text-white">{title}</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-accent hover:text-white rounded-full transition-colors text-white/70"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div
                            className="p-6 md:p-10 overflow-y-auto text-secondary text-sm leading-relaxed"
                            data-lenis-prevent
                        >
                            {content}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LegalModal;