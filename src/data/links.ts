import { SITE } from './site';

export type LinkIconName = 'instagram' | 'x' | 'portfolio' | 'email';

export interface LinkItem {
  label: string;
  subtext: string;
  href: string;
  external?: boolean;
  icon: LinkIconName;
  social?: boolean;
}

export const linksProfile = {
  name: SITE.name,
  role: 'Freelance Video Editor',
  bio: 'Cinematic short-form edits for personal brands, creators, and entrepreneurs.',
  accent: 'Raw footage in. Premium content out.',
} as const;

export const mainLinks: LinkItem[] = [
  {
    label: 'Instagram',
    subtext: 'Follow my editing work',
    href: SITE.instagram.editorsdojo,
    external: true,
    icon: 'instagram',
    social: true,
  },
  {
    label: 'X',
    subtext: 'Thoughts, updates & content',
    href: SITE.social.x,
    external: true,
    icon: 'x',
    social: true,
  },
  {
    label: 'Email',
    subtext: 'Work with me / request a free sample',
    href: `mailto:${SITE.email}`,
    icon: 'email',
    social: true,
  },
  {
    label: 'Portfolio',
    subtext: 'View my video editing work',
    href: `${SITE.url}/portfolio`,
    icon: 'portfolio',
  },
];

export const achievementLinks: LinkItem[] = [
  {
    label: '@anime.segments',
    subtext: 'Theme page — 9K+ followers',
    href: SITE.instagram.animeSegments,
    external: true,
    icon: 'instagram',
  },
];