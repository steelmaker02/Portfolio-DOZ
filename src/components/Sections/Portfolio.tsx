import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layers, Image as ImageIcon, PenTool, Monitor, Sparkles } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { Project, ProjectCategory } from '../../types';
import ProjectModal from './ProjectModal';

const TABS = [
  { id: 'ALL', label: 'Alle', icon: Layers },
  { id: ProjectCategory.WEB, label: 'Webseiten', icon: Monitor },
  { id: ProjectCategory.PHOTOSHOP, label: 'Photoshop', icon: ImageIcon },
  { id: ProjectCategory.ILLUSTRATOR, label: 'Logos', icon: PenTool },
  { id: ProjectCategory.AI, label: 'KI Kunst', icon: Sparkles },
];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeTab === 'ALL') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="portfolio" className="py-16 md:py-32 px-4 md:px-6 relative min-h-screen">
      <div className="container mx-auto max-w-7xl">

        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 md:mb-8">
            Ausgewählte <span className="text-secondary">Arbeiten</span>
          </h2>

          <div className="flex flex-wrap gap-2 md:gap-4 border-b border-white/10 pb-4">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-all text-xs md:text-sm font-bold font-mono uppercase tracking-wider ${isActive
                    ? 'bg-accent text-black shadow-[0_0_20px_rgba(59,130,246,0.6)]'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                >
                  {Icon && <Icon size={14} />}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => {

              const isHovered = hoveredId === project.id;
              const isDimmed = hoveredId !== null && hoveredId !== project.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}

                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedProject(project)}

                  className={`relative break-inside-avoid mb-6 rounded-2xl overflow-hidden cursor-pointer group bg-[#050505] border transition-all duration-500 ease-out ${isHovered
                    ? 'z-10 scale-[1.02] border-accent/50 shadow-2xl shadow-black/50 grayscale-0 opacity-100'
                    : isDimmed
                      ? 'scale-[0.96] border-transparent blur-[2px] opacity-40 grayscale'
                      : 'scale-100 border-transparent opacity-100 grayscale-0'
                    }`}
                >
                  <div className="relative">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      width="800"
                      height="600"
                      loading="lazy"
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>


                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/90 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/10 group-hover:border-accent/40 shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">

                      <h3 className="text-white group-hover:text-white font-bold text-sm md:text-lg flex justify-between items-center transition-colors">
                        {project.title}

                        <ArrowUpRight
                          size={18}
                          className="text-white transition-all duration-300 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110"
                        />
                      </h3>

                      <div className="relative h-4 overflow-hidden mt-1">
                        <p className="text-white/60 text-[10px] md:text-xs font-mono uppercase transition-transform duration-300 group-hover:-translate-y-full">
                          {project.category}
                        </p>

                        <p className="absolute inset-0 text-accent text-[10px] md:text-xs font-mono uppercase font-bold transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                          Projekt ansehen
                        </p>
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};

export default Portfolio;