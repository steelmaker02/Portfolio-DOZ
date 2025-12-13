import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { USER_INFO } from '../../constants';
import AnimatedIcon from '../UI/AnimatedIcon';
import { useLenis } from '../Layout/SmoothScroll';
import locationAnim from '../../assets/icons/Location.json';
import settingsAnim from '../../assets/icons/Setting.json';
import chemistryAnim from '../../assets/icons/Chemistry.json';

const Hero: React.FC = () => {
  const lenis = useLenis();
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 md:pt-32 md:pb-16 md:px-6 flex flex-col justify-center relative overflow-hidden">

      <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-40" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-blue-900/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none opacity-30" />

      <div className="container mx-auto max-w-7xl h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 h-full"
        >

          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2 bg-surface border border-white/5 rounded-3xl p-6 md:p-12 flex flex-col justify-between group hover:border-white/10 transition-colors"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] md:text-xs font-mono uppercase tracking-wider">
                  Umschulung
                </span>
                <span className="text-secondary text-xs md:text-sm font-mono">
                  Mediengestalter Digital & Print
                </span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6">
                DIGITAL & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  WEB DESIGN
                </span>
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 md:mb-10">
                Ich gestalte benutzerfreundliche Interfaces und visuelle Konzepte.
                Mein Fokus liegt auf modernem <strong>UI/UX Design</strong> mit dem nötigen
                technischen Verständnis für eine saubere Umsetzung.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-accent/20"
                >
                  Projekte ansehen
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-3 lg:col-span-4 lg:row-span-2 relative min-h-[350px] h-full overflow-hidden rounded-3xl border border-white/5 group"
          >
            <img
              src="/images/me/portrait.webp"
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-display font-bold text-xl md:text-2xl">{USER_INFO.name} {USER_INFO.surname}</p>
              <p className="text-secondary text-sm">Digital Designer</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 lg:col-span-4">
            <div
              onMouseEnter={() => setHoveredElement('status')}
              onMouseLeave={() => setHoveredElement(null)}
              className="h-full min-h-[250px] bg-surface border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300 cursor-default group"
            >
              <div className="flex justify-between items-start h-[50px] md:h-[64px]">
                <AnimatedIcon
                  animationData={locationAnim}
                  size={64}
                  isHovered={hoveredElement === 'status'}
                />
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-500 text-[10px] font-bold uppercase tracking-wide">Available</span>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <div className="text-secondary text-xs font-mono uppercase tracking-widest mb-2 h-4">Status</div>
                <p className="text-lg md:text-xl text-white font-bold leading-tight mb-1 truncate">{USER_INFO.status}</p>
                <p className="text-green-400 text-sm font-mono">{USER_INFO.availability}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 text-[10px] font-mono uppercase tracking-wider">
                Neumünster • Kiel • Hamburg
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 lg:col-span-4">
            <a
              href="#skills"
              onMouseEnter={() => setHoveredElement('tech')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo('#skills', { offset: -100, duration: 1.5 });
              }}
              className="h-full min-h-[250px] bg-surface border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start h-[50px] md:h-[64px]">
                <AnimatedIcon
                  animationData={settingsAnim}
                  size={64}
                  isHovered={hoveredElement === 'tech'}
                />
                <ArrowDownRight size={16} />
              </div>

              <div className="mt-6 md:mt-8">
                <div className="text-secondary text-xs font-mono uppercase tracking-widest mb-2 h-4">Workflow</div>
                <p className="text-lg md:text-xl text-white font-bold leading-tight mb-1">State-of-the-Art</p>
                <p className="text-secondary text-sm leading-relaxed line-clamp-1">
                  Aktuelle Tools für effiziente Web-Erlebnisse.
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 text-[10px] font-mono uppercase tracking-wider">
                View Tech Stack
              </div>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 lg:col-span-4">
            <a
              href="#ai-lab"
              onMouseEnter={() => setHoveredElement('ai')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo('#ai-lab', { duration: 1.5 });
              }}
              className="h-full min-h-[250px] bg-surface border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex justify-between items-start h-[50px] md:h-[64px]">
                <AnimatedIcon
                  animationData={chemistryAnim}
                  size={40}
                  isHovered={hoveredElement === 'ai'}
                />
                <ArrowDownRight size={16} />
              </div>

              <div className="mt-6 md:mt-8">
                <div className="text-secondary text-xs font-mono uppercase tracking-widest mb-2 h-4">Generative Kunst</div>
                <p className="text-lg md:text-xl text-white font-bold leading-tight mb-1">KI Labor</p>
                <p className="text-secondary text-sm leading-relaxed line-clamp-1">
                  Experimente mit KI.
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 text-[10px] font-mono uppercase tracking-wider">
                Galerie ansehen
              </div>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
