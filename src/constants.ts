import { ProjectCategory, Project, SocialLink } from './types';

export const USER_INFO = {
  name: "Dmytro",
  surname: "Zaiats",
  role: "Mediengestalter i.A. & Creative Dev",
  status: "Suche Pflichtpraktikum",
  availability: "Verfügbar ab 09.2026",
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
    coverImage: 'images/projects/web1_thumb.png',
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
    category: ProjectCategory.WEB,
    year: '2025',
    coverImage: 'images/projects/web5_thumb.webp',
    fullWebImage: 'images/projects/web5_full.webp',
    videoUrl: 'videos/web5_full.mp4',
    tools: ['Figma', 'After Effects'],
    tags: ['Food', 'Landing Page'],
    size: 'wide'
  },
  {
    id: 'web-6',
    title: 'Outdoor-Bekleidung',
    category: ProjectCategory.WEB,
    year: '2025',
    coverImage: 'images/projects/web6_thumb.webp',
    fullWebImage: 'images/projects/web6_full.webp',
    tools: ['Figma', 'Illustrator'],
    tags: ['Fashion', 'Branding'],
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
    size: 'small'
  },

  {
    id: 'ai-1',
    title: 'Horrorreiche',
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