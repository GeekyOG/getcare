'use client';

import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="m-auto flex min-h-[70vh] max-w-xl flex-col">
      <div className="my-auto rounded-lg border border-neutral-200 bg-white p-8 text-center md:p-12">
        <h2 className="text-xl font-bold">Oops!</h2>
        <p className="mb-8 mt-2">
          The page you are looking for doesn&apos;t appear to be available
        </p>
        <Button size="sm" href="./">
          Go Home
        </Button>
      </div>
    </div>
  );
}
