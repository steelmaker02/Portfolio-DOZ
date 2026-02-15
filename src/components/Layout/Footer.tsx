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
                <h3 className="text-white font-bold mb-1">Verantwortlich für den Inhalt</h3>
                <p className="text-secondary">
                    Dmytro Zaiats<br />
                    (Anschrift wie oben)
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-1">Urheberrecht & Bildnachweise</h3>
                <p className="text-secondary">
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten (Designs, Codes, Texte) unterliegen dem deutschen Urheberrecht.
                    <br /><br />
                    <strong>Bildquellen:</strong> Soweit die Inhalte auf dieser Seite nicht vom Betreiber selbst erstellt wurden (z.B. Fotos in Design-Entwürfen), werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Genutzte Bilder stammen aus eigenen Quellen, KI-Generierung oder lizenzfreien Datenbanken (Unsplash, Pexels, Adobe Stock).
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-1">Hinweis zum Portfolio</h3>
                <p className="text-secondary">
                    Die in diesem Portfolio dargestellten Projekte dienen teilweise zu Demonstrationszwecken (Konzeptarbeiten/Studienprojekte) im Rahmen der Ausbildung und beruflichen Weiterentwicklung. Marken- oder Firmennamen in diesen Konzepten werden nur zur Veranschaulichung des Designs verwendet.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-1">EU-Streitschlichtung</h3>
                <p className="text-secondary">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        https://ec.europa.eu/consumers/odr/
                    </a>.
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
                <h3 className="text-white font-bold mb-2 text-lg">2. Verantwortlicher</h3>
                <p>
                    Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist die im Impressum genannte Person.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">3. Hosting</h3>
                <p className="mb-2"><strong className="text-white">Hosting bei GitHub Pages</strong></p>
                <p>
                    Diese Website wird bei GitHub Pages gehostet. Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.
                </p>
                <p className="mt-2">
                    Beim Besuch dieser Website erfasst GitHub unter anderem Ihre IP-Adresse sowie Informationen über den verwendeten Browser und das Betriebssystem. Diese Daten werden in sogenannten Server-Log-Dateien gespeichert und dienen der Gewährleistung von Sicherheit und Stabilität der Website.
                </p>
                <p className="mt-2">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und stabilen Bereitstellung der Website).
                </p>
                <p className="mt-2">
                    Da GitHub seinen Sitz in den USA hat, kann es zu einer Übermittlung personenbezogener Daten in ein Drittland kommen. Die Datenübertragung erfolgt auf Grundlage der von der Europäischen Kommission genehmigten Standardvertragsklauseln (SCC).
                </p>
                <p className="mt-4 mb-2"><strong className="text-white">Domain-Hosting bei Strato</strong></p>
                <p>
                    Die Domain dieser Website wird von der <strong>Strato AG</strong> (Otto-Ostrowski-Straße 7, 10249 Berlin, Deutschland) verwaltet. Wenn Sie unsere Website aufrufen, werden technische Daten (z. B. IP-Adresse) über die DNS-Server von Strato geleitet, um die Verbindung herzustellen.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">4. Kontakt per E-Mail</h3>
                <p>
                    Auf dieser Website wird kein Kontaktformular verwendet. Wenn Sie per E-Mail Kontakt aufnehmen, werden Ihre Angaben inklusive der von Ihnen übermittelten personenbezogenen Daten ausschließlich zur Bearbeitung der Anfrage gespeichert.
                </p>
                <p className="mt-2">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Eine Weitergabe der Daten an Dritte erfolgt nicht.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">5. Cookies und Tracking</h3>
                <p>
                    Diese Website verwendet keine Cookies, kein Tracking und keine Analyse-Tools (z. B. Google Analytics). Es werden ausschließlich technisch notwendige Daten zur Bereitstellung der Website verarbeitet.
                </p>
            </div>

            <div>
                <h3 className="text-white font-bold mb-2 text-lg">6. Rechte der betroffenen Personen</h3>
                <p className="mb-2">Sie haben jederzeit das Recht:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO),</li>
                    <li>die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO),</li>
                    <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO),</li>
                    <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO),</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen (Art. 21 DSGVO),</li>
                    <li>eine erteilte Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3 DSGVO).</li>
                </ul>
                <p className="mt-4">
                    Zudem haben Sie das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO).
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

                        <div className="flex flex-col gap-2 text-sm font-mono text-secondary uppercase tracking-wider items-center md:items-end">
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