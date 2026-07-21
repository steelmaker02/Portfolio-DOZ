export enum ProjectCategory {
  WEB = 'Web Design',
  GRAFIKDESIGN = 'Designkonzepte',
  ILLUSTRATOR = 'Logofolio',
  AI = 'AI Gen',
  FOTO = 'Fotos'
}

export type CardSize = 'small' | 'wide' | 'tall' | 'large';

export type GalleryItem = string | { src: string; title: string };

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;

  fullWebImage?: string;
  videoUrl?: string;

  gallery?: GalleryItem[];

  brandbookUrl?: string;
  instagramUrl?: string;
  adobestockUrl?: string;
  workoutUrl?: string;
  peppapigUrl?: string;
  alvarezchocolatUrl?: string;
  lenaweberfotografieUrl?: string;
  musikmagazinUrl?: string;
  theactUrl?: string;
  plakateUrl?: string,

  description?: string;

  liveUrl?: string;
  liveButtonColor?: string;

  tools: string[];
  tags: string[];
  size?: CardSize;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SocialLink {
  platform: 'LinkedIn' | 'GitHub' | 'Email' | 'Instagram';
  url: string;
  label: string;
}