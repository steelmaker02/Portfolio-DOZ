import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { Project, ProjectCategory } from '../../types';

const aiProjects = [
  { id: 1, title: "Biotechnologie", image: "images/ai-lab/Biotechnologie.jpg" },
  { id: 2, title: "Kosmetikstudio", image: "images/ai-lab/Kosmetikstudio.jpg" },
  { id: 3, title: "Autoservice", image: "images/ai-lab/Autoservice.jpg" }
];

const aiFullGalleryProject: Project = {
  id: 'ai-full-gallery',
  title: 'Forschung in KI für UX/UI',
  category: ProjectCategory.AI,
  year: '2025',
  coverImage: '',
  tools: ['KI'],
  tags: ['Research', 'Concept'],
  gallery: [
    { src: 'images/ai-lab/Anwaltskanzlei.jpg', title: 'Anwaltskanzlei' },
    { src: 'images/ai-lab/Bauunternehmen.jpg', title: 'Bauunternehmen' },
    { src: 'images/ai-lab/Business Coach.jpg', title: 'Business Coach' },
    { src: 'images/ai-lab/E-Learning.jpg', title: 'E-Learning Plattform' },
    { src: 'images/ai-lab/Event-Agentur.jpg', title: 'Event Agentur' },
    { src: 'images/ai-lab/Fitnessstudio.jpg', title: 'Fitnessstudio' },
    { src: 'images/ai-lab/Food Delivery.jpg', title: 'Food Delivery App' },
    { src: 'images/ai-lab/Fotograf.jpg', title: 'Fotografie Portfolio' },
    { src: 'images/ai-lab/Immobilienverwaltung.jpg', title: 'Immobilienverwaltung' },
    { src: 'images/ai-lab/Logistik & Spedition.jpg', title: 'Logistik & Spedition' },
    { src: 'images/ai-lab/Medizinische Klinik.jpg', title: 'Medizinische Klinik' },
    { src: 'images/ai-lab/Online-Shop.jpg', title: 'Online Shop' },
    { src: 'images/ai-lab/Reinigungsservice.jpg', title: 'Reinigungsservice' },
    { src: 'images/ai-lab/Reisebüro.jpg', title: 'Reisebüro' },
    { src: 'images/ai-lab/Renovierung.jpg', title: 'Renovierung & Sanierung' },
    { src: 'images/ai-lab/Restaurant.jpg', title: 'Restaurant' },
    { src: 'images/ai-lab/Solarenergie.jpg', title: 'Solarenergie' },
    { src: 'images/ai-lab/Tattoo-Studio.jpg', title: 'Tattoo Studio' },
    { src: 'images/ai-lab/Webagentur.jpg', title: 'Webagentur Concept' },
  ]
};

const AILab: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const updateScrollRange = () => {
      if (scrollContainerRef.current) {
        const fullWidth = scrollContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(fullWidth - viewportWidth + 50);
      }
    };

    updateScrollRange();

    window.addEventListener('resize', updateScrollRange);
    return () => window.removeEventListener('resize', updateScrollRange);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    ["0%", `-${scrollRange}px`, `-${scrollRange}px`]
  );

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerX = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="ai-lab" ref={targetRef} className="relative h-[400vh] bg-[#050505]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          <motion.div
            style={{ opacity: headerOpacity, x: headerX }}
            className="absolute top-24 md:top-1/3 left-6 md:left-20 z-10 pointer-events-none pr-6 w-[85vw] md:max-w-[320px] lg:max-w-[450px] xl:max-w-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-accent font-mono text-xs uppercase tracking-widest">
                KI Labor
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Visualisierung <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                von Gedanken.
              </span>
            </h2>
            <p className="text-base md:text-lg text-secondary leading-relaxed">
              Ich nutze KI zur direkten Visualisierung meiner Ideen, für Moodboards und zur Konkurrenzanalyse –
              parallel zum klassischen Designprozess.
            </p>
          </motion.div>

          <motion.div
            ref={scrollContainerRef}
            style={{ x }}
            className="flex gap-4 md:gap-8 px-6 md:px-20 pl-[100vw] md:pl-[55vw] lg:pl-[50vw] items-center"
          >

            {aiProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => setIsModalOpen(true)}
                className="relative aspect-video h-[30vh] min-h-[220px] md:h-[50vh] w-[85vw] md:w-[auto] flex-shrink-0 rounded-2xl overflow-hidden group shadow-2xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width="1408"
                  height="768"
                  decoding="async"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                  <h3 className="text-lg md:text-2xl font-display font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}

            <div className="h-[30vh] min-h-[220px] md:h-[50vh] w-[60vw] md:w-[40vh] flex-shrink-0 flex items-center justify-center pl-0 pr-8 md:pr-32">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full h-full relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden group hover:border-purple-500/50 transition-all duration-500 flex flex-col items-center justify-center gap-4 md:gap-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <ArrowRight size={24} className="group-hover:-rotate-45 transition-transform duration-300" />
                </div>

                <div className="relative z-10 text-center">
                  <span className="block text-xl sm:text-2xl md:text-4xl font-display font-bold text-white uppercase leading-none tracking-tight group-hover:scale-105 transition-transform duration-300">
                    Alle <br /> Werke
                  </span>
                  <span className="text-xs font-mono text-purple-400 mt-2 block opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    Galerie öffnen
                  </span>
                </div>
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={isModalOpen ? aiFullGalleryProject : null}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default AILab;