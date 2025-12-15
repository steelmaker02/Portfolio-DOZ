import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { USER_INFO } from '../../constants';
import AnimatedIcon from '../UI/AnimatedIcon';

import emailAnim from '../../assets/icons/Email.json';

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="pt-24 md:pt-32 pb-16 px-4 md:px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          <div className="order-2 lg:order-1">
            <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">
              Kontakt
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-8 leading-[1.1] text-white">
              Bereit für <br />
              Zusammenarbeit.
            </h2>

            <div className="space-y-6 text-secondary text-base md:text-lg">
              <p className="leading-relaxed max-w-lg">
                Ich suche ab <span className="text-white font-bold">September 2026</span> ein anspruchsvolles
                <br className="hidden md:block" />
                <span className="text-white"> 6-monatiges Pflichtpraktikum</span> im Bereich Web Design.
                <br /><br />
                Lassen Sie uns darüber sprechen, wie ich Ihr Team mit meiner Kombination aus Design, Technik und Management-Erfahrung unterstützen kann.
              </p>

              <div className="pt-6">
                <p className="text-xs font-mono uppercase text-secondary mb-3">Standort</p>
                <p className="text-white text-lg">Neumünster • Kiel • Hamburg</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-full min-h-[300px] lg:min-h-[400px]">
            <a
              href={`mailto:${USER_INFO.email}?subject=Bewerbung%20Pflichtpraktikum%20-%20Anfrage`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative w-full h-full bg-surface border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden hover:border-accent/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <AnimatedIcon
                    animationData={emailAnim}
                    size={40}
                    isHovered={isHovered}
                  />
                </div>
                <div className="p-3 rounded-full border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  E-Mail schreiben
                </h3>
                <p className="text-secondary font-mono text-sm md:text-base group-hover:text-white transition-colors duration-300 break-all">
                  {USER_INFO.email}
                </p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;