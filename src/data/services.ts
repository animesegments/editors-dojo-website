export interface EditingStyle {
  title: string;
  description: string;
  vimeoId: string;
}

export interface Service {
  number: string;
  title: string;
  homeDescription: string;
  shortLine?: string;
  pageDescription?: string;
  bestFor?: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Viral Cinematic Reels',
    homeDescription:
      'Fast, cinematic short-form edits with strong hooks, clean cuts, captions, sound design, and a premium look that helps your content hold attention.',
    shortLine: 'Cinematic edits for Reels, TikTok, and YouTube Shorts.',
    pageDescription:
      'I turn raw clips into short-form videos with stronger pacing, cleaner cuts, captions, sound design, and a premium feel.',
    bestFor:
      'Talking-head videos, podcasts, personal brand content, creator content, value-based videos, and short clips from long-form content.',
  },
  {
    number: '02',
    title: 'White Minimal Animation',
    homeDescription:
      'Clean white-style edits with smooth text animation, simple motion, and a modern look. Perfect for educational, business, and personal brand content.',
    shortLine: 'Clean white-style edits with smooth text animation and simple motion.',
    pageDescription:
      'This style is built for content that needs to feel clear, professional, and easy to follow without too much noise on screen.',
    bestFor:
      'Educational videos, business content, coaching content, explainers, tips, tutorials, and clean storytelling.',
  },
  {
    number: '03',
    title: 'Free Sample Edit',
    homeDescription:
      'Send me one raw clip and I\'ll create a short sample edit, so you can see the style before working together.',
    shortLine: 'See the editing style before working together.',
    pageDescription:
      'Send me one raw clip and I\'ll create a short sample edit for free. You\'ll see how your content can look before deciding anything.',
  },
];

export const editingStyles: EditingStyle[] = [
  {
    title: 'Viral Cinematic Reels',
    description:
      'Fast, cinematic short-form edits with strong hooks, clean cuts, captions, sound design, and a premium look that helps your content hold attention.',
    vimeoId: '1205256586',
  },
  {
    title: 'White Minimal Animation',
    description:
      'Clean white-style edits with smooth text animation, simple motion, and a modern look. Perfect for educational, business, and personal brand content.',
    vimeoId: '1205256584',
  },
];