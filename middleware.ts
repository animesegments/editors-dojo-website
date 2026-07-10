import { rewrite } from '@vercel/functions';

const LINKS_HOST = 'links.editorsdojo.site';

const PASSTHROUGH_PREFIXES = ['/_astro/', '/assets/', '/fonts/', '/links'];

function shouldPassthrough(pathname: string) {
  if (pathname === '/favicon.ico') return true;
  return PASSTHROUGH_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export const config = {
  matcher: [
    {
      source: '/(.*)',
      has: [{ type: 'host', value: LINKS_HOST }],
    },
  ],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (shouldPassthrough(url.pathname)) {
    return;
  }

  return rewrite(new URL('/links', request.url));
}