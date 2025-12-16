import React, { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { USER_INFO } from '../../constants';

const Contact: React.FC = () => {
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
            <a
              href={`mailto:${USER_INFO.email}?subject=Bewerbung%20Pflichtpraktikum%20-%20Anfrage`}
              className="group relative w-full h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-accent/10"
            >

              <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-accent/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-accent/30 group-hover:scale-125 transition-all duration-700 ease-in-out" />

              <div className="absolute bottom-[-20%] left-[-20%] w-[200px] h-[200px] bg-purple-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700 ease-in-out" />

              <div className="relative z-10 flex justify-between items-start">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/5 flex items-center justify-center text-white backdrop-blur-md group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail size={28} />
                </div>

                <div className="p-3 text-secondary group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight size={28} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="relative z-10 my-auto">
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  E-Mail schreiben
                </h3>
                <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-accent/50 transition-colors duration-500" />
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