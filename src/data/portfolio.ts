export interface PortfolioItem {
  vimeoId: string;
  title: string;
  type: 'Sample Edit' | 'Practice Edit' | 'Portfolio Piece' | 'Concept Edit';
}

export function vimeoEmbedUrl(vimeoId: string): string {
  const params = new URLSearchParams({
    badge: '0',
    autopause: '0',
    title: '0',
    byline: '0',
    portrait: '0',
    player_id: '0',
    app_id: '58479',
  });
  return `https://player.vimeo.com/video/${vimeoId}?${params.toString()}`;
}

export const portfolioItems: PortfolioItem[] = [
  {
    vimeoId: '1205256586',
    title: 'Cinematic Talking Head Edit',
    type: 'Sample Edit',
  },
  {
    vimeoId: '1205256584',
    title: 'Before / After Visual Upgrade',
    type: 'Portfolio Piece',
  },
  {
    vimeoId: '1205256587',
    title: 'Conceptual Short-Form Edit',
    type: 'Concept Edit',
  },
  {
    vimeoId: '1205256582',
    title: 'Personal Brand Reel',
    type: 'Practice Edit',
  },
];