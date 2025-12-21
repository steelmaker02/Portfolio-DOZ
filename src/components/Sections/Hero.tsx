import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
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

      <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-40 will-change-transform" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-blue-900/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none opacity-30 will-change-transform" />

      <div className="container mx-auto max-w-7xl h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 h-full"
        >

          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 xl:col-span-8 xl:row-span-2 bg-surface border border-white/5 rounded-3xl p-6 md:p-12 flex flex-col justify-between group hover:border-white/10 transition-colors"
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

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl xl:text-8xl tracking-tight leading-[0.95] mb-6">
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
                  className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-accent/20 relative z-10"
                >
                  Projekte ansehen
                </a>
              </div>
            </div>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 xl:col-span-4 xl:row-span-2 relative min-h-[350px] md:min-h-[400px] h-full overflow-hidden rounded-3xl border border-white/5 group"
          >
            <img
              src="images/me/portrait.webp"
              alt="Portrait"
              width="800"
              height="1000"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "images/me/portrait.webp";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-display font-bold text-xl md:text-2xl">{USER_INFO.name} {USER_INFO.surname}</p>
              <p className="text-secondary text-sm">Digital Designer</p>
            </div>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 xl:col-span-4"
          >
            <a
              href="#contact"
              onMouseEnter={() => setHoveredElement('status')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo('#contact', { duration: 1.5 });
              }}
              className="h-full min-h-[250px] bg-surface border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300 cursor-pointer group block"
            >
              <div className="flex justify-between items-start h-[50px] md:h-[64px]">
                <div className="p-0 text-white">
                  <AnimatedIcon
                    animationData={locationAnim}
                    size={64}
                    isHovered={hoveredElement === 'status'}
                  />
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-500 text-xs font-bold uppercase tracking-widest">Available</span>
                </div>
              </div>

              <div className="mt-4 md:mt-8">
                <div className="text-secondary text-xs font-mono uppercase tracking-widest mb-2 h-4">Status</div>
                <h2 className="text-lg md:text-xl text-white font-bold leading-tight mb-1 truncate">{USER_INFO.status}</h2>
                <p className="text-green-400 text-sm font-mono">{USER_INFO.availability}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2 text-[10px] font-mono text-secondary uppercase tracking-wider group-hover:text-white transition-colors">
                <span>Neumünster</span> • <span>Kiel</span> • <span>Hamburg</span>
              </div>
            </a>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 xl:col-span-4"
          >
            <a
              href="#skills"
              onMouseEnter={() => setHoveredElement('tech')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo('#skills', { offset: -100, duration: 1.5 });
              }}
              className="h-full min-h-[250px] bg-surface border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start h-[50px] md:h-[64px]">
                <div className="p-0 text-white">
                  <AnimatedIcon
                    animationData={settingsAnim}
                    size={64}
                    isHovered={hoveredElement === 'tech'}
                  />
                </div>
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <ArrowDownRight className="text-secondary group-hover:text-white group-hover:rotate-[-90deg] transition-all duration-300" size={16} />
                </div>
              </div>

              <div className="mt-4 md:mt-8">
                <div className="text-secondary text-xs font-mono uppercase tracking-widest mb-2 h-4">Technologie</div>
                <h2 className="text-lg md:text-xl text-white font-bold leading-tight mb-1">Modern Tech Stack</h2>
                <p className="text-secondary text-sm leading-relaxed line-clamp-1">
                  Aktuelle Tools für performantes Webdesign.
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-secondary uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                <span>Tech Stack ansehen</span>
                <div className="h-[1px] w-8 bg-white/10 group-hover:bg-blue-400 transition-colors" />
              </div>
            </a>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-1 xl:col-span-4"
          >
            <a
              href="#ai-lab"
              onMouseEnter={() => setHoveredElement('ai')}
              onMouseLeave={() => setHoveredElement(null)}
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo('#ai-lab', { duration: 1.5 });
              }}
              className="h-full min-h-[250px] bg-surface border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/30 transition-colors" />

              <div className="flex justify-between items-start relative z-10 h-[50px] md:h-[64px]">
                <div className="p-0 text-white h-full flex items-center">
                  <AnimatedIcon
                    animationData={chemistryAnim}
                    size={48}
                    isHovered={hoveredElement === 'ai'}
                  />
                </div>
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  <ArrowDownRight className="text-secondary group-hover:text-white group-hover:rotate-[-90deg] transition-all duration-300" size={16} />
                </div>
              </div>

              <div className="mt-4 md:mt-8 relative z-10">
                <div className="text-secondary text-xs font-mono uppercase tracking-widest mb-2 h-4">
                  Generative Kunst
                </div>
                <h2 className="text-lg md:text-xl text-white font-bold leading-tight mb-1">
                  KI Labor
                </h2>
                <p className="text-secondary text-sm leading-relaxed line-clamp-1">
                  Experimente mit KI.
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-secondary uppercase tracking-wider group-hover:text-purple-400 transition-colors relative z-10">
                <span>Galerie ansehen</span>
                <div className="h-[1px] w-8 bg-white/10 group-hover:bg-purple-400 transition-colors" />
              </div>

            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;