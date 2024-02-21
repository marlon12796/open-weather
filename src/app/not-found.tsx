import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page not found',
  description: 'Page not found',
  robots: {
    index: false,
    follow: false,
  },
};

const NotFound = () => {
  return (
    <main className="p-8 mx-auto h-screen flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <header className="flex flex-col items-center">
        <h1 className="text-center text-3xl text-balance leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Page not found
        </h1>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold shadow mt-7 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9"
        >
          Go back to homepage
        </Link>
      </header>
    </main>
  );
}

export default NotFound;
