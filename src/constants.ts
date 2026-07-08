import { ProjectCategory, Project, SocialLink } from './types';

export const USER_INFO = {
  name: "Dmytro",
  surname: "Zaiats",
  role: "Digital Designer & Creative Developer",
  status: "Digital Designer",
  availability: "Jetzt kontaktieren",
  location: "Neumünster - Kiel - Hamburg",
  email: "zaiats.design@gmail.com",
  cv_link: "images/documents/Lebenslauf-Zaiats_Dmytro.pdf",
  bio_short: "Ich gestalte digitale Erlebnisse an der Schnittstelle von klassischem Grafikdesign, modernem Web-Development und generativer KI.",
};

export const SKILLS = [
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
    items: ["HTML5 & CSS3", "JavaScript (Basis)", "React / Tailwind", "GitHub / Git"]
  },
  {
    category: "AI & Innovation",
    items: ["Stable Diffusion", "Online AI Models", "Prompt Engineering", "ComfyUI"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'web-1',
    title: 'Online Bildungsplatform',
    category: ProjectCategory.WEB,
    year: '2025',
    coverImage: 'images/projects/web1_thumb.webp',
    fullWebImage: 'images/projects/web1_full.webp',
    tools: ['Figma', 'Photoshop', 'Illustrator'],
    tags: ['Education', 'UI/UX'],
    size: 'large'
  },
  {
    id: 'web-2',
    title: 'Odessa Balletttheater',
    category: ProjectCategory.WEB,
    year: '2025',
    coverImage: 'images/projects/web2_thumb.webp',
    fullWebImage: 'images/projects/web2_full.webp',
    tools: ['Figma', 'Photoshop'],
    tags: ['Culture', 'Minimal'],
    size: 'wide'
  },
  {
    id: 'web-3',
    title: 'Hörgeräteshop',
    category: ProjectCategory.WEB,
    year: '2025',
    coverImage: 'images/projects/web3_thumb.webp',
    fullWebImage: 'images/projects/web3_full.webp',
    tools: ['Figma', 'Shopify'],
    tags: ['E-Commerce', 'Medical'],
    size: 'small'
  },
  {
    id: 'web-4',
    title: 'Cargo aus China',
    category: ProjectCategory.WEB,
    year: '2025',
    coverImage: 'images/projects/web4_thumb.webp',
    fullWebImage: 'images/projects/web4_full.webp',
    tools: ['Figma', 'Illustrator'],
    tags: ['Fashion', 'Branding'],
    size: 'small'
  },
  {
    id: 'web-5',
    title: 'Alvarez Chocolat',
    liveUrl: "https://steelmaker02.github.io/Alvarez/",
    liveButtonColor: "#784830",
    category: ProjectCategory.WEB,
    year: '2025',
    coverImage: 'images/projects/web5_thumb.webp',
    fullWebImage: 'images/projects/web5_full.webp',
    description: 'Diese Beispiel-Website zeigt die reale Umsetzung des Designs. Über den Button können Sie die Seite live besuchen.',
    tools: ['Figma', 'After Effects'],
    tags: ['Food', 'Landing Page'],
    size: 'wide'
  },
  {
    id: 'web-6',
    title: 'Cardio Training',
    liveUrl: "https://steelmaker02.github.io/WORKOUT-Cardio-Training/",
    liveButtonColor: "#3fd47d",
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web6_thumb.webp',
    fullWebImage: 'images/projects/web6_full.webp',
    description: 'Diese Beispiel-Website zeigt die reale Umsetzung des Designs. Über den Button können Sie die Seite live besuchen.',
    tools: ['Figma', 'Illustrator'],
    tags: ['Sport', 'Workout'],
    size: 'small'
  },
  {
    id: 'web-7',
    title: 'Programmierschule',
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web7_thumb.webp',
    fullWebImage: 'images/projects/web7_full.webp',
    tools: ['Figma', 'Illustrator'],
    tags: ['IT', 'Onlineschule'],
    size: 'small'
  },
  {
    id: 'web-8',
    title: 'Peppa Pig — Fan-Seite',
    liveUrl: "https://steelmaker02.github.io/Peppa-Fan/",
    liveButtonColor: "#ff8a80",
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web8_thumb.webp',
    fullWebImage: 'images/projects/web8_full.webp',
    description: 'Diese Beispiel-Website zeigt die reale Umsetzung des Designs. Über den Button können Sie die Seite live besuchen.',
    tools: ['Figma', 'Illustrator'],
    tags: ['Kinder', 'Peppa'],
    size: 'small'
  },
  {
    id: 'web-9',
    title: 'Mandy Aquagrim',
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web9_thumb.webp',
    fullWebImage: 'images/projects/web9_full.webp',
    tools: ['Figma', 'Illustrator'],
    tags: ['Kinder', 'Aquagrim'],
    size: 'small'
  },
  {
    id: 'web-10',
    title: 'Tattoo Artist',
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web10_thumb.webp',
    fullWebImage: 'images/projects/web10_full.webp',
    tools: ['Figma', 'Illustrator'],
    tags: ['Tattoo', 'Studio'],
    size: 'wide'
  },
  {
    id: 'web-11',
    title: 'Gipfelglück — Outdoor Bekleidung',
    category: ProjectCategory.WEB,
    year: '2025',
    coverImage: 'images/projects/web11_thumb.webp',
    fullWebImage: 'images/projects/web11_full.webp',
    tools: ['Figma', 'Photoshop'],
    tags: ['Shop', 'Outdoor'],
    size: 'small'
  },
  {
    id: 'web-12',
    title: 'Lena Weber — Fotografie',
    liveUrl: "https://steelmaker02.github.io/lena-weber-fotografie/",
    liveButtonColor: "#cf987c",
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web12_thumb.webp',
    fullWebImage: 'images/projects/web12_full.webp',
    description: 'Diese Beispiel-Website zeigt die reale Umsetzung des Designs. Über den Button können Sie die Seite live besuchen.',
    tools: ['Figma', 'Photoshop'],
    tags: ['Portfolio', 'Foto'],
    size: 'small'
  },

  {
    id: 'web-13',
    title: 'Studio DOZ — Fotogalerie',
    liveUrl: "https://steelmaker02.github.io/studio-doz-portfolio/",
    liveButtonColor: "#ca9d9d",
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web13_thumb.webp',
    fullWebImage: 'images/projects/web13_full.webp',
    description: 'Diese Beispiel-Website zeigt die reale Umsetzung des Designs. Über den Button können Sie die Seite live besuchen.',
    tools: ['Figma', 'Photoshop'],
    tags: ['Portfolio', 'Foto'],
    size: 'wide'
  },

  {
    id: 'ps-1',
    title: 'Futurelab — Zukunftsmesse',
    category: ProjectCategory.GRAFIKDESIGN,
    year: '2025',
    coverImage: 'images/projects/ps1_thumb.webp',
    gallery: [
      'images/projects/ps1_detail1.webp',
      'images/projects/ps1_detail2.webp',
      'images/projects/ps1_detail3.webp',
      'images/projects/ps1_detail4.webp'
    ],
    tools: ['Photoshop'],
    tags: ['Compositing', 'Retouch'],
    size: 'tall'
  },
  {
    id: 'ps-2',
    title: 'The Horrors — Konzertplakat',
    category: ProjectCategory.GRAFIKDESIGN,
    year: '2025',
    coverImage: 'images/projects/ps2_thumb.webp',
    gallery: [
      'images/projects/ps2_detail1.webp',
      'images/projects/ps2_detail2.webp',
      'images/projects/ps2_detail3.webp',
      'images/projects/ps2_detail4.webp',
      'images/projects/ps2_detail5.webp',
      'images/projects/ps2_detail6.webp',
      'images/projects/ps2_detail7.webp',
      'images/projects/ps2_detail8.webp'
    ],
    tools: ['Photoshop', 'Midjourney'],
    tags: ['Concept Art', 'Matte Painting'],
    size: 'wide'
  },

  {
    id: 'ps-4',
    title: 'SOUNDSPHERE — Musikmagazin',
    category: ProjectCategory.GRAFIKDESIGN,
    year: '2026',
    coverImage: 'images/projects/ps4_thumb.webp',
    musikmagazinUrl: 'images/documents/SOUNDSPHERE_Musikmagazin.pdf',
    gallery: [
      'images/projects/ps4_detail1.webp',
      'images/projects/ps4_detail2.webp',
      'images/projects/ps4_detail3.webp',
      'images/projects/ps4_detail4.webp'
    ],
    description: 'Dieses Magazinlayout wurde mit Adobe InDesign entworfen und umgesetzt.',
    tools: ['InDesign', 'Musikmagazin'],
    tags: ['Magazin', 'Musikschule'],
    size: 'wide'
  },

  {
    id: 'ps-5',
    title: '52 Grafikdesign-Stile für Plakate',
    category: ProjectCategory.GRAFIKDESIGN,
    year: '2026',
    coverImage: 'images/projects/ps5_thumb.webp',
    plakateUrl: 'images/documents/52_Plakatdesign.pdf',
    gallery: [
      'images/projects/ps5_detail1.webp',
      'images/projects/ps5_detail2.webp',
      'images/projects/ps5_detail3.webp',
      'images/projects/ps5_detail4.webp',
      'images/projects/ps5_detail5.webp',
      'images/projects/ps5_detail6.webp',
      'images/projects/ps5_detail7.webp',
      'images/projects/ps5_detail8.webp',
      'images/projects/ps5_detail9.webp',
      'images/projects/ps5_detail10.webp',
      'images/projects/ps5_detail11.webp',
      'images/projects/ps5_detail12.webp',
      'images/projects/ps5_detail13.webp'
    ],
    description: 'Ein visuelles Archiv aus 52 Designrichtungen — Layout / InDesign, Entwicklung / KI.',
    tools: ['InDesign', 'Photoshop'],
    tags: ['Archiv', 'Plakate'],
    size: 'wide'
  },

  {
    id: 'logo-1',
    title: 'Gipfelglück — Outdoor Bekleidung',
    category: ProjectCategory.ILLUSTRATOR,
    year: '2025',
    coverImage: 'images/projects/logo1_thumb.webp',
    brandbookUrl: 'images/documents/Gipfelglueck_Brandbook.pdf',
    gallery: [
      'images/projects/logo1_mockup1.webp',
      'images/projects/logo1_mockup2.webp',
      'images/projects/logo1_mockup3.webp',
      'images/projects/logo1_mockup4.webp'
    ],
    description: 'Ganzheitliche Brand Identity mit klarer visueller Ausrichtung und funktionalem Designansatz.',
    tools: ['Illustrator', 'Photoshop'],
    tags: ['Branding', 'Vector'],
    size: 'small'
  },
  {
    id: 'logo-2',
    title: 'Nachteule — Moderner Verlag',
    category: ProjectCategory.ILLUSTRATOR,
    year: '2025',
    coverImage: 'images/projects/logo2_thumb.webp',
    gallery: [
      'images/projects/logo2_mockup1.webp',
      'images/projects/logo2_mockup2.webp',
      'images/projects/logo2_mockup3.webp'
    ],
    tools: ['Illustrator', 'Photoshop'],
    tags: ['Branding', 'Vector'],
    size: 'small'
  },
  {
    id: 'logo-3',
    title: 'PUR Biomarkt',
    category: ProjectCategory.ILLUSTRATOR,
    year: '2025',
    coverImage: 'images/projects/logo3_thumb.webp',
    gallery: [
      'images/projects/logo3_mockup1.webp',
      'images/projects/logo3_mockup2.webp',
      'images/projects/logo3_mockup3.webp'
    ],
    tools: ['Illustrator', 'Photoshop'],
    tags: ['Branding', 'Vector'],
    size: 'tall'
  },

  {
    id: 'ai-1',
    title: 'Horrorreiche',
    instagramUrl: "https://instagram.com/horror.realms/",
    category: ProjectCategory.AI,
    year: '2025',
    coverImage: 'images/projects/ai1.webp',
    gallery: [
      'images/projects/ai2.webp',
      'images/projects/ai3.webp',
      'images/projects/ai4.webp',
      'images/projects/ai5.webp',
      'images/projects/ai6.webp',
      'images/projects/ai7.webp'
    ],
    tools: ['Stable Diffusion'],
    tags: ['AI Art'],
    size: 'small'
  },
  {
    id: 'ai-2',
    title: '8k Muster zum Drucken',
    adobestockUrl: "https://stock.adobe.com/de/contributor/212996395/dmytro?load_type=author&prev_url=detail/",
    category: ProjectCategory.AI,
    year: '2025',
    coverImage: 'images/projects/ai11.webp',
    gallery: [
      'images/projects/ai12.webp',
      'images/projects/ai13.webp',
      'images/projects/ai14.webp',
      'images/projects/ai15.webp',
      'images/projects/ai16.webp',
      'images/projects/ai17.webp',
      'images/projects/ai18.webp',
      'images/projects/ai19.webp',
      'images/projects/ai20.webp'
    ],
    tools: ['Stable Diffusion'],
    tags: ['AI Art'],
    size: 'small'
  },
  {
    id: 'ai-3',
    title: 'Luxusproduktfotografie',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai21.webp',
    gallery: [
      'images/projects/ai22.webp',
      'images/projects/ai23.webp',
      'images/projects/ai24.webp',
      'images/projects/ai25.webp',
      'images/projects/ai26.webp',
      'images/projects/ai27.webp',
      'images/projects/ai28.webp',
      'images/projects/ai29.webp',
      'images/projects/ai30.webp',
      'images/projects/ai31.webp',
      'images/projects/ai32.webp',
      'images/projects/ai33.webp',
      'images/projects/ai34.webp',
      'images/projects/ai35.webp',
      'images/projects/ai36.webp',
      'images/projects/ai37.webp',
      'images/projects/ai38.webp',
      'images/projects/ai39.webp',
      'images/projects/ai40.webp',
      'images/projects/ai41.webp',
      'images/projects/ai42.webp',
      'images/projects/ai43.webp',
      'images/projects/ai44.webp',
      'images/projects/ai45.webp',
      'images/projects/ai46.webp',
      'images/projects/ai47.webp',
      'images/projects/ai48.webp',
      'images/projects/ai49.webp',
      'images/projects/ai50.webp',
      'images/projects/ai51.webp',
      'images/projects/ai52.webp',
      'images/projects/ai53.webp',
      'images/projects/ai54.webp',
      'images/projects/ai55.webp',
      'images/projects/ai56.webp',
      'images/projects/ai57.webp',
      'images/projects/ai58.webp'
    ],
    tools: ['Stable Diffusion'],
    tags: ['AI Art'],
    size: 'small'
  },

  {
    id: 'ai-4',
    title: 'Next-Gen Männerporträts',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai64.webp',
    gallery: [
      'images/projects/ai60.webp',
      'images/projects/ai61.webp',
      'images/projects/ai62.webp',
      'images/projects/ai63.webp',
      'images/projects/ai65.webp',
      'images/projects/ai66.webp',
      'images/projects/ai67.webp',
      'images/projects/ai68.webp',
      'images/projects/ai69.webp',
      'images/projects/ai70.webp',
      'images/projects/ai71.webp',
      'images/projects/ai72.webp',
      'images/projects/ai73.webp',
      'images/projects/ai74.webp'
    ],
    description: 'Visuelle Ideen, umgesetzt mit kreativer Freiheit und KI.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'tall'
  },

  {
    id: 'ai-5',
    title: 'Brand-Kollaborationen',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai100.webp',
    gallery: [
      'images/projects/ai101.webp',
      'images/projects/ai102.webp',
      'images/projects/ai103.webp',
      'images/projects/ai104.webp',
      'images/projects/ai105.webp',
      'images/projects/ai106.webp',
      'images/projects/ai107.webp',
      'images/projects/ai108.webp',
      'images/projects/ai109.webp',
      'images/projects/ai110.webp',
      'images/projects/ai111.webp',
      'images/projects/ai112.webp',
      'images/projects/ai113.webp',
      'images/projects/ai114.webp',
      'images/projects/ai115.webp',
      'images/projects/ai116.webp'

    ],
    description: 'Zwei Marken, eine Idee – neu gedacht und visuell interpretiert.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'tall'
  },
  {
    id: 'ai-6',
    title: 'Fashion Editorial — Frauenporträts',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai200.webp',
    gallery: [
      'images/projects/ai201.webp',
      'images/projects/ai202.webp',
      'images/projects/ai203.webp',
      'images/projects/ai204.webp',
      'images/projects/ai205.webp',
      'images/projects/ai206.webp',
      'images/projects/ai207.webp',
      'images/projects/ai208.webp',
      'images/projects/ai209.webp',
      'images/projects/ai210.webp',
      'images/projects/ai211.webp',
      'images/projects/ai212.webp',
      'images/projects/ai213.webp',
      'images/projects/ai214.webp',
      'images/projects/ai215.webp',
      'images/projects/ai216.webp',
      'images/projects/ai217.webp',
      'images/projects/ai218.webp'
    ],
    description: 'Jeder Stil eines Modehauses lässt sich präzise nach Referenz visuell umsetzen.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'tall'
  },

  {
    id: 'ai-7',
    title: 'Die Zukunft der Performance.',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai300.webp',
    gallery: [
      'images/projects/ai301.webp',
      'images/projects/ai302.webp',
      'images/projects/ai303.webp',
      'images/projects/ai304.webp'
    ],
    description: 'Mit der richtigen Idee lässt sich jedes Produkt zur Realität entwickeln.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'tall'
  },

  {
    id: 'ai-8',
    title: 'Handcrafted Felt Worlds mit KI',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai020.webp',
    gallery: [
      'images/projects/ai021.webp',
      'images/projects/ai022.webp'
    ],
    description: 'Stilisierte Filzästhetik, die Szenen in eine warme, taktile Märchenwelt übersetzt.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'tall'
  },

  {
    id: 'ai-9',
    title: 'Next-Gen Product Staging',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai030.webp',
    gallery: [
      'images/projects/ai031.webp',
      'images/projects/ai032.webp'
    ],
    description: 'Visuelle Produktwelten, die Marken hochwertig und begehrenswert inszenieren.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'small'
  },

  {
    id: 'ai-10',
    title: 'Digital Beverage Aesthetics',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai011.webp',
    gallery: [
      'images/projects/ai012.webp',
      'images/projects/ai013.webp'
    ],
    description: 'Visuelle Welten, die Getränke stilvoll und begehrenswert inszenieren.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'tall'
  },

  {
    id: 'ai-11',
    title: 'Deconstructed Food Aesthetics',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai040.webp',
    gallery: [
      'images/projects/ai041.webp'
    ],
    description: 'Visuelle Food-Kompositionen, die Zutaten und Strukturen präzise inszenieren.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'tall'
  },

  {
    id: 'ai-12',
    title: 'Conceptual Food Staging',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai01.webp',
    gallery: [
      'images/projects/ai02.webp',
      'images/projects/ai03.webp'
    ],
    description: 'Kontrastreiche Food-Visuals, die Alltag und Inszenierung neu verbinden.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'tall'
  },

  {
    id: 'ai-13',
    title: 'Cinematic Product Sequences',
    category: ProjectCategory.AI,
    year: '2026',
    coverImage: 'images/projects/ai050.webp',
    gallery: [
      'images/projects/ai051.webp',
      'images/projects/ai052.webp',
      'images/projects/ai053.webp',
      'images/projects/ai054.webp',
      'images/projects/ai055.webp',
      'images/projects/ai056.webp',
      'images/projects/ai057.webp',
      'images/projects/ai058.webp',
      'images/projects/ai059.webp'
    ],
    description: 'KI erschafft visuelle Sequenzen für narrative Markeninszenierung.',
    tools: ['Nano Banana'],
    tags: ['AI Art'],
    size: 'wide'
  },

  {
    id: 'foto-1',
    title: 'ROHE STILLE',
    category: ProjectCategory.FOTO,
    year: '2026',
    coverImage: 'images/projects/f01.avif',
    gallery: [
      'images/projects/f02.webp',
      'images/projects/f03.avif',
      'images/projects/f04.avif',
      'images/projects/f05.avif',
      'images/projects/f06.avif',
      'images/projects/f07.avif',
      'images/projects/f08.avif',
      'images/projects/f09.webp',
      'images/projects/f10.avif'
    ],
    tools: ['Canon 77D, Lightroom'],
    tags: ['Bildbearbeitung'],
    size: 'small'
  },
  {
    id: 'foto-2',
    title: 'Nature',
    category: ProjectCategory.FOTO,
    year: '2017 — 2025',
    coverImage: 'images/projects/foto6.webp',
    gallery: [
      'images/projects/foto7.webp',
      'images/projects/foto8.webp',
      'images/projects/foto9.webp',
      'images/projects/foto13.webp',
      'images/projects/foto30.webp',
      'images/projects/foto31.webp',
      'images/projects/foto10.webp',
      'images/projects/foto33.webp',
      'images/projects/foto34.webp',
      'images/projects/foto24.webp',
      'images/projects/foto35.webp',
      'images/projects/foto36.webp',
      'images/projects/foto32.webp',
      'images/projects/foto11.webp',
      'images/projects/foto37.webp',
      'images/projects/foto12.webp',
      'images/projects/foto27.webp'
    ],
    tools: ['Canon 77D, Lightroom'],
    tags: ['Bildbearbeitung'],
    size: 'small'
  },
  {
    id: 'foto-3',
    title: 'Stadt',
    category: ProjectCategory.FOTO,
    year: '2017 — 2025',
    coverImage: 'images/projects/foto14.webp',
    gallery: [
      'images/projects/foto15.webp',
      'images/projects/foto16.webp',
      'images/projects/foto17.webp',
      'images/projects/foto18.webp',
      'images/projects/foto19.webp',
      'images/projects/foto40.webp',
      'images/projects/foto41.webp',
      'images/projects/foto20.webp',
      'images/projects/foto21.webp',
      'images/projects/foto22.webp',
      'images/projects/foto23.webp',
      'images/projects/foto25.webp',
      'images/projects/foto26.webp'
    ],
    tools: ['Canon 77D, Lightroom'],
    tags: ['Bildbearbeitung'],
    size: 'small'
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/dmytro-zaiats/', label: 'LinkedIn' },
  { platform: 'GitHub', url: 'https://github.com/steelmaker02', label: 'GitHub' },
  { platform: 'Instagram', url: 'https://www.instagram.com/horror.realms/', label: 'Instagram' }
];

export const NAV_ITEMS = [
  { label: 'Projekte', href: '#portfolio' },
  { label: 'Profil', href: '#about' },
  { label: 'KI Labor', href: '#ai-lab' },
  { label: 'Kontakt', href: '#contact' },
];