import WaitlistFooter from '@/components/layout/footer/WaitlistFooter';
import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Image from 'next/image';
import React from 'react';

function Waitlist() {
  return (
    <main>
      <section className="mt-20 flex flex-col items-center justify-center px-[24px]">
        <Image
          src="/images/waitlist/professionals.svg"
          alt=""
          width={187}
          height={56}
        />
        <Heading className="text-center">
          Restoring Hope one Therapy at a time
        </Heading>
        <p className="mt-10 max-w-[421px] text-center text-[1.125rem] text-neutral-400">
          We are a platform dedicated to helping people get rid of dist and
          wellbeing through
        </p>
        <div className="mt-10">
          <Button className="bg-secondary-650">
            Join Professional Waitlist
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Waitlist;
