import { rewrite } from '@vercel/functions';

function shouldPassthrough(pathname: string) {
  if (pathname === '/favicon.ico') return true;
  return (
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/fonts/') ||
    pathname.startsWith('/links')
  );
}

export const config = {
  matcher: [
    {
      source: '/(.*)',
      has: [{ type: 'host', value: 'links.editorsdojo.site' }],
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