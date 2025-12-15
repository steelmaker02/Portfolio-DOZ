import React, { useState } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { USER_INFO, SOCIALS } from '../../constants';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const [modalOpen, setModalOpen] = useState<'impressum' | 'privacy' | null>(null);

    const impressumContent = (
        <div className="space-y-6 font-light text-sm md:text-base">

            <div>
                <h3 className="text-white font-bold mb-1">Angaben gemäß § 5 TMG</h3>
                <p className="text-secondary leading-relaxed">
                    Dmytro Zaiats<br />
                    Ringstraße 43<br />
                    24534 Neumünster
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-1">Kontakt</h3>
                <p className="text-secondary leading-relaxed">
                    Telefon: +49 (160) 592 0213<br />
                    E-Mail: zaiats.design@gmail.com
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-1">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p className="text-secondary">
                    Dmytro Zaiats<br />
                    (Anschrift wie oben)
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-1">EU-Streitschlichtung</h3>
                <p className="text-secondary">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        https://ec.europa.eu/consumers/odr/
                    </a>.<br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-1">Urheberrecht</h3>
                <p className="text-secondary">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten (Bilder, Grafiken, Texte) unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
            </div>
        </div>
    );

    const privacyContent = (
        <div className="space-y-8 font-light text-secondary">
            <div>
                <h3 className="text-white font-bold mb-2 text-lg">1. Datenschutz auf einen Blick</h3>
                <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">2. Hosting</h3>
                <p className="mb-2"><strong className="text-white">Hosting durch GitHub</strong></p>
                <p>
                    Wir hosten unsere Website bei GitHub Pages. Anbieter ist die GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA. GitHub erfasst Log-Daten der Besucher (IP-Adresse, Browser-Typ, Betriebssystem, Datum und Uhrzeit des Zugriffs). Dies ist technisch notwendig, um die Stabilität und Sicherheit der Website zu gewährleisten (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                <p className="mb-2"><strong className="text-white">Datenerfassung auf dieser Website</strong></p>
                <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
                <p className="mt-2">
                    Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">4. Kontakt per E-Mail</h3>
                <p>
                    Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, E-Mail-Adresse, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mt-2">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen (z.B. Praktikumsanfrage) erforderlich ist.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">5. Analyse-Tools und Cookies</h3>
                <p>
                    Diese Website verwendet <strong>keine</strong> Tracking-Cookies und <strong>keine</strong> Analyse-Dienste (wie Google Analytics). Es findet keine Auswertung des Nutzerverhaltens statt.
                </p>
            </div>
        </div>
    );

    return (
        <>
            <footer className="relative z-10 py-12 px-6 border-t border-white/10 mt-20 md:mt-32">
                <div className="container mx-auto max-w-7xl">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

                        <div className="text-sm text-tertiary font-mono flex flex-col items-center md:items-start">
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
                                    className="text-secondary hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                                    aria-label={social.label}
                                >
                                    {social.platform === 'LinkedIn' && <Linkedin size={20} />}
                                    {social.platform === 'GitHub' && <Github size={20} />}
                                    {social.platform === 'Instagram' && <Instagram size={20} />}
                                </a>
                            ))}
                        </div>

                        <div className="flex gap-6 text-sm font-mono text-tertiary uppercase tracking-wider justify-center md:justify-end">
                            <button onClick={() => setModalOpen('impressum')} className="hover:text-white transition-colors">
                                Impressum
                            </button>
                            <button onClick={() => setModalOpen('privacy')} className="hover:text-white transition-colors">
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