import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { USER_INFO } from '../../constants';
import AnimatedIcon from '../UI/AnimatedIcon';

import emailAnim from '../../assets/icons/Email.json';

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCardClick = () => {
    window.location.href = `mailto:${USER_INFO.email}?subject=Bewerbung%20Pflichtpraktikum%20-%20Anfrage`;
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(USER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-24 md:pt-32 pb-16 px-4 md:px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">

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
                Lassen Sie uns darüber sprechen, wie ich Ihr Team unterstützen kann.
              </p>

              <div className="pt-6">
                <p className="text-xs font-mono uppercase text-secondary mb-3">Standort</p>
                <p className="text-white text-lg">Neumünster • Kiel • Hamburg</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-full min-h-[300px] lg:min-h-[400px]">
            <div
              onClick={handleCardClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative w-full h-full bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between transition-all duration-300 cursor-pointer hover:border-green-500/30 hover:bg-green-500/5"
            >

              <div
                className={`absolute inset-0 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}
              >
                <span className="bg-white text-black text-sm font-bold px-6 py-3 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] flex items-center gap-2 transform scale-100 transition-transform">
                  <Check size={18} className="text-green-600" />
                  Kopiert!
                </span>
              </div>


              <div className="flex justify-between items-start relative z-10">
                <div className="p-0 text-white">
                  <AnimatedIcon
                    animationData={emailAnim}
                    size={54}
                    isHovered={isHovered}
                  />
                </div>

                <div className="p-3 rounded-full bg-white/5 text-secondary group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <h3 className="text-secondary text-xs font-mono uppercase tracking-widest mb-2">
                  Direkt Kontakt
                </h3>
                <p className="text-3xl md:text-5xl font-display font-bold text-white mb-6 group-hover:translate-x-2 transition-transform duration-300">
                  E-Mail schreiben
                </p>

                <div
                  onClick={handleEmailClick}
                  className="pt-6 border-t border-white/5 flex items-center gap-3 text-sm font-mono text-secondary group-hover:text-green-400 transition-colors cursor-copy select-text w-fit"
                  title="Klicken zum Kopieren"
                >
                  <span className="break-all">{USER_INFO.email}</span>
                  {copied ? <Check size={14} /> : <Copy size={14} className="opacity-50" />}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;