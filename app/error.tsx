'use client';

import { Button } from '@/components/ui/Button';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="m-auto flex min-h-[70vh] max-w-xl flex-col">
      <div className="my-auto rounded-lg border border-neutral-200 bg-white p-8 text-center md:p-12">
        <h2 className="text-xl font-bold">Oops!</h2>
        <p className="mb-4 mt-2">
          An error occurred on our app. This could be a temporary issue, please
          try again
        </p>
        <Button variant="link" size="sm" onClick={() => reset()}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
