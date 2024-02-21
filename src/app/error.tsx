'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Error = ({
  error,
}: {
  error: (Error & { digest?: string }) | any;
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="p-8 mx-auto h-screen flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <header className="flex flex-col items-center">
        <h1 className="text-center text-3xl text-balance leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] mb-2">
          Something went wrong
        </h1>
        <p className="mb-3">Did you try to reload the page?</p>

        <Button onClick={() => window.location.reload()}>Reload</Button>
      </header>
    </main>
  );
};

export default Error;
