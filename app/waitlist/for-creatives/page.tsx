import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Slide from '@/components/ui/creatives/Slide';
import Image from 'next/image';
import React from 'react';

function Waitlist() {
  return (
    <main className="px-[24px] lg:px-0">
      <section className="mt-20 flex flex-col items-center justify-center">
        <Image
          src="/images/waitlist/professionals.svg"
          alt=""
          width={187}
          height={56}
        />
        <Heading className="text-center">
          Create and Share <br />
          Positivity
        </Heading>
        <p className="mt-10 max-w-[421px] text-center text-[1.125rem] text-neutral-400">
          We are a platform dedicated to helping people get rid of dist and
          wellbeing through
        </p>
        <div className="mt-10">
          <Button className="bg-neutral-900">Join Creatives Waitlist</Button>
        </div>
      </section>
    </main>
  );
}

export default Waitlist;
