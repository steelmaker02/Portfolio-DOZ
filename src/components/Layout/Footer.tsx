import React, { useState } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { USER_INFO, SOCIALS } from '../../constants';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const [modalOpen, setModalOpen] = useState<'impressum' | 'privacy' | null>(null);

    const impressumContent = (
        <div className="space-y-8 font-light">
            <div>
                <h3 className="text-white font-bold mb-2 text-lg">Angaben gemäß § 5 TMG</h3>
                <p className="text-secondary">
                    {USER_INFO.name} {USER_INFO.surname}<br />
                    Ringstraße 43 <br />
                    24534 Neumünster <br />
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">Kontakt</h3>
                <p className="text-secondary">
                    E-Mail: {USER_INFO.email}<br />
                    Telefon: +49 (160) 592 0213
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p className="text-secondary">
                    {USER_INFO.name} {USER_INFO.surname}<br />
                    (Anschrift wie oben)
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">EU-Streitschlichtung</h3>
                <p className="text-secondary">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
            </div>
        </div>
    );

    const privacyContent = (
        <div className="space-y-8 font-light text-secondary">
            <div>
                <h3 className="text-white font-bold mb-2 text-lg">1. Datenschutz auf einen Blick</h3>
                <p className="mb-2"><strong className="text-white">Allgemeine Hinweise</strong></p>
                <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">2. Hosting</h3>
                <p className="mb-2"><strong className="text-white">Hosting bei GitHub Pages</strong></p>
                <p>
                    Diese Website wird bei GitHub Pages gehostet. Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.
                </p>
                <p className="mt-2">
                    Wenn Sie unsere Website besuchen, erfasst GitHub Ihre IP-Adresse sowie Informationen über den Browser und das genutzte Gerät, um die Sicherheit und Stabilität der Website zu gewährleisten. Diese Daten werden in Server-Log-Dateien gespeichert.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">3. Kontakt per E-Mail</h3>
                <p className="mb-2"><strong className="text-white">Kein Kontaktformular</strong></p>
                <p>
                    Wir verzichten auf unserer Website auf ein Kontaktformular. Wenn Sie uns per E-Mail kontaktieren, wird Ihre E-Mail inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mt-2 mb-2"><strong className="text-white">Cookies</strong></p>
                <p>
                    Diese Seite verwendet keine Tracking-Cookies oder Analyse-Tools (wie Google Analytics). Es werden lediglich technisch notwendige Daten zur Bereitstellung der Seite geladen.
                </p>
            </div>
        </div>
    );

    return (
        <>
            <footer className="relative z-10 py-12 px-6 border-t border-white/10 mt-20 md:mt-32">
                <div className="container mx-auto max-w-7xl">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

                        <div className="text-sm text-secondary font-mono flex flex-col items-center md:items-start">
                            <p>© {currentYear} {USER_INFO.name} {USER_INFO.surname}</p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-secondary">Verfügbar für Projekte</span>
                            </div>
                        </div>

                        <div className="flex gap-6 justify-center md:justify-start">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-secondary hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
                                    aria-label={social.label}
                                >
                                    {social.platform === 'LinkedIn' && <Linkedin size={20} />}
                                    {social.platform === 'GitHub' && <Github size={20} />}
                                    {social.platform === 'Instagram' && <Instagram size={20} />}
                                </a>
                            ))}
                        </div>

                        <div className="flex gap-6 text-sm font-mono text-secondary uppercase tracking-wider justify-center md:justify-end">
                            <button onClick={() => setModalOpen('impressum')} className="hover:text-accent transition-colors">
                                Impressum
                            </button>
                            <button onClick={() => setModalOpen('privacy')} className="hover:text-accent transition-colors">
                                Datenschutz
                            </button>
                        </div>

                    </div>
                </div>
            </footer>

            <LegalModal
                isOpen={modalOpen === 'impressum'}
                onClose={() => setModalOpen(null)}
                title="Impressum"
                content={impressumContent}
            />
            <LegalModal
                isOpen={modalOpen === 'privacy'}
                onClose={() => setModalOpen(null)}
                title="Datenschutzerklärung"
                content={privacyContent}
            />
        </>
    );
};

export default Footer;