import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, GraduationCap, Check } from 'lucide-react';
import { USER_INFO } from '../../constants';

const About: React.FC = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  const timeline = [
    {
      year: "06.2025 – Heute",
      title: "Umschulung: Mediengestalter Digital & Print",
      place: "cimdata Bildungsakademie",
      desc: "Intensive duale Ausbildung mit Fokus auf Konzeption und Realisierung.",
      details: [
        "Digital: Web-Interfaces, Interaktivität & CMS",
        "Print: Layout, Farbmanagement & Qualitätsstandards",
        "Crossmedia: Datenaufbereitung",
        "Branding: Logo-Entwicklung & Corporate Design"
      ]
    },
    {
      year: "2022 – 2025",
      title: "Integration & Sprachqualifizierung (C1)",
      place: "Deutschland",
      desc: "Intensive Weiterbildung und Erreichung des C1-Niveaus in Deutsch."
    },
    {
      year: "2014 – 2022",
      title: "Internationales Management & Gastronomie",
      place: "Kiew & Dubai",
      desc: "Führungserfahrung als Restaurantleiter und Sommelier. Organisation, Teamleitung und Kundenkommunikation."
    },
    {
      year: "2010 – 2014",
      title: "Bachelor: Elektromechanik",
      place: "Universität für Verkehr, Kiew",
      desc: "Technische Grundausbildung. Entwicklung von strukturiertem und logischem Denken."
    }
  ];

  const skills = [
    {
      category: "Design & Photo",
      items: ["Figma", "Photoshop", "Lightroom", "Illustrator", "InDesign"]
    },
    {
      category: "Motion & Video",
      items: ["After Effects", "DaVinci Resolve", "Cinema 4D", "Premiere Pro"]
    },
    {
      category: "Development",
      items: ["HTML5 & CSS3", "JavaScript", "React / Tailwind", "GitHub"]
    },
    {
      category: "AI & Innovation",
      items: ["Stable Diffusion", "Online KI", "Prompt Engineering", "ComfyUI"]
    },
  ];

  return (
    <section id="about" className="py-16 md:py-32 px-4 md:px-6 relative bg-[#080808]">
      <div className="container mx-auto max-w-7xl">

        <div className="mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block"
          >
            Profil
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white max-w-3xl leading-tight"
          >
            Vom Ingenieurwesen zum <br />
            <span className="text-secondary">Digitalen Design.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          <div className="lg:col-span-6 space-y-12">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary text-base md:text-lg leading-relaxed space-y-6"
            >
              <p>
                Mein Weg zum Design war keine gerade Linie, sondern eine bewusste Entscheidung.
                Mit einem Hintergrund in Elektromechanik und jahrelanger Führungserfahrung in der
                internationalen Gastronomie habe ich gelernt, komplexe Prozesse zu strukturieren.
              </p>
              <p>
                Was als Hobby begann – Webdesign, Fotografie und KI-Kunst – mache ich nun durch meine
                Umschulung bei Cimdata zu meinem Beruf.
                Ich verbinde technisches Verständnis mit ästhetischem Gespür.
              </p>
            </motion.div>

            <div id="skills" className="pt-4">
              <h3 className="text-white font-bold text-lg mb-6">
                Kompetenzen & Tools
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {skills.map((group, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-surface border border-white/5 p-5 rounded-2xl hover:border-white/10 transition-colors h-full"
                  >
                    <h4 className="text-white font-mono text-[10px] uppercase mb-3 opacity-50 tracking-widest">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2 gap-y-3">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[12px] text-gray-300 cursor-default whitespace-nowrap"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <div className="col-span-1 h-fit w-full">
                  <a
                    href={USER_INFO.cv_link}
                    download
                    onClick={handleDownload}
                    className={`
                      relative w-full flex items-center justify-center px-6 py-3 font-bold rounded-xl transition-all duration-500 shadow-lg cursor-pointer overflow-hidden text-sm
                      ${isDownloaded
                        ? 'bg-green-500 text-white hover:shadow-green-500/20'
                        : 'bg-white text-black hover:bg-accent hover:text-white hover:shadow-accent/20'
                      }
                    `}
                  >
                    <div className="relative z-10 flex items-center gap-2">
                      <AnimatePresence mode="wait">
                        {isDownloaded ? (
                          <motion.span
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                          >
                            <Check size={18} />
                            Vielen Dank!
                          </motion.span>
                        ) : (
                          <motion.span
                            key="default"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            Lebenslauf herunterladen
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-white font-bold text-lg mb-8">
              Werdegang
            </h3>

            <div className="space-y-8 border-l border-white/10 pl-6 md:pl-8 ml-3 relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-[33px] md:-left-[41px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-[#080808] ${index === 0 ? 'bg-accent' : 'bg-white/20'}`} />

                  <span className="text-xs font-mono text-accent uppercase tracking-wider block">
                    {item.year}
                  </span>

                  <h4 className="text-white font-bold text-lg leading-tight mt-1">{item.title}</h4>

                  <p className="text-sm text-white/60 mb-2">{item.place}</p>

                  <p className="text-sm text-secondary leading-relaxed mb-2">
                    {item.desc}
                  </p>

                  {item.details && (
                    <ul className="grid grid-cols-1 gap-1 mt-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-white/50 flex items-start gap-2">
                          <span className="text-accent mt-px">▹</span> {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;