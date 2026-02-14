import { ProjectCategory, Project, SocialLink } from './types';

export const USER_INFO = {
  name: "Dmytro",
  surname: "Zaiats",
  role: "Mediengestalter i.A. & Creative Dev",
  status: "Suche Pflichtpraktikum",
  availability: "ab 09.2026",
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
    alvarezchocolatUrl: "https://steelmaker02.github.io/Alvarez/",
    category: ProjectCategory.WEB,
    year: '2025',
    coverImage: 'images/projects/web5_thumb.webp',
    fullWebImage: 'images/projects/web5_full.webp',
    tools: ['Figma', 'After Effects'],
    tags: ['Food', 'Landing Page'],
    size: 'wide'
  },

  {
    id: 'web-6',
    title: 'Cardio Training',
    workoutUrl: "https://steelmaker02.github.io/WORKOUT-Cardio-Training/",
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web6_thumb.webp',
    fullWebImage: 'images/projects/web6_full.webp',
    tools: ['Figma', 'Illustrator'],
    tags: ['Sport', 'Workout'],
    size: 'small'
  },

  {
    id: 'web-7',
    title: 'Programmiershule',
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web7_thumb.webp',
    fullWebImage: 'images/projects/web7_full.webp',
    tools: ['Figma', 'Illustrator'],
    tags: ['IT', 'Onlineshule'],
    size: 'small'
  },

  {
    id: 'web-8',
    title: 'Peppa Pig — Fan-Seite',
    peppapigUrl: "https://steelmaker02.github.io/Peppa-Fan/",
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web8_thumb.webp',
    fullWebImage: 'images/projects/web8_full.webp',
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
    lenaweberfotografieUrl: "https://steelmaker02.github.io/lena-weber-fotografie/",
    category: ProjectCategory.WEB,
    year: '2026',
    coverImage: 'images/projects/web12_thumb.webp',
    fullWebImage: 'images/projects/web12_full.webp',
    tools: ['Figma', 'Photoshop'],
    tags: ['Portfolio', 'Foto'],
    size: 'small'
  },

  {
    id: 'ps-1',
    title: 'Futurelab',
    category: ProjectCategory.PHOTOSHOP,
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
    category: ProjectCategory.PHOTOSHOP,
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
    id: 'ps-3',
    title: 'Der Kreis – Gruppenpräsentation',
    category: ProjectCategory.PHOTOSHOP,
    year: '2025',
    coverImage: 'images/projects/ps3_thumb.webp',
    gallery: [
      'images/projects/ps3_detail1.webp',
      'images/projects/ps3_detail2.webp',
      'images/projects/ps3_detail3.webp',
      'images/projects/ps3_detail4.webp',
      'images/projects/ps3_detail5.webp',
      'images/projects/ps3_detail6.webp',
      'images/projects/ps3_detail7.webp',
      'images/projects/ps3_detail8.webp',
      'images/projects/ps3_detail9.webp',
      'images/projects/ps3_detail10.webp',
      'images/projects/ps3_detail11.webp'
    ],
    tools: ['Photoshop', 'Canva'],
    tags: ['Präsentation', 'Gruppenarbeit'],
    size: 'wide'
  },

  {
    id: 'logo-1',
    title: 'Gipfelglück',
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
    tools: ['Illustrator', 'Photoshop'],
    tags: ['Branding', 'Vector'],
    size: 'small'
  },

  {
    id: 'logo-2',
    title: 'Nachteule',
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