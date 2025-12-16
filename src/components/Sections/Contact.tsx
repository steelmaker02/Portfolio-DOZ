import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { USER_INFO } from '../../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(USER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
                Lassen Sie uns darüber sprechen, wie ich Ihr Team unterstützen kann.
              </p>

              <div className="pt-6">
                <p className="text-xs font-mono uppercase text-secondary mb-3">Standort</p>
                <p className="text-white text-lg">Neumünster • Kiel • Hamburg</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 h-full min-h-[350px] lg:min-h-[450px]">
            <a
              href={`mailto:${USER_INFO.email}?subject=Bewerbung%20Pflichtpraktikum`}
              className="group relative w-full h-full bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white/60 text-[10px] font-mono uppercase tracking-widest">
                    Antworte schnell
                  </span>
                </div>

                <div className="p-3 rounded-full bg-white text-black group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="relative z-10 my-auto">
                <h3 className="text-6xl md:text-8xl font-display font-bold text-white/10 group-hover:text-white transition-colors duration-500 select-none">
                  HELLO.
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-xs font-mono text-accent mb-2 uppercase tracking-wider">
                  E-Mail schreiben
                </p>
                <div className="flex items-center justify-between group/email">
                  <span className="text-xl md:text-2xl text-white font-bold group-hover:underline decoration-accent underline-offset-4 break-all">
                    {USER_INFO.email}
                  </span>

                  <button
                    onClick={handleCopy}
                    className="p-2 text-secondary hover:text-white transition-colors opacity-0 group-hover/email:opacity-100"
                    title="E-Mail kopieren"
                  >
                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  </button>
                </div>
              </div>

            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;