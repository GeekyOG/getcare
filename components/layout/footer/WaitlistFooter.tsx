'use client';
import Slide from '@/components/ui/creatives/Slide';
import clsx from 'clsx';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

function WaitlistFooter() {
  const pathname = usePathname();

  const getCurrentFooterClassName = () => {
    if (pathname == '/waitlist/for-users') {
      return 'bg-neutral-100';
    } else if (pathname == '/waitlist/for-professionals') {
      return 'bg-secondary-100';
    }
  };

  const usersIcons = [
    { path: '/images/waitlist/x.svg' },
    { path: '/images/waitlist/facebook.svg' },
    { path: '/images/waitlist/instagram.svg' },
    { path: '/images/waitlist/linkedin.svg' },
  ];

  const professionalsIcons = [
    { path: '/images/waitlist/professionals/x.svg' },
    { path: '/images/waitlist/professionals/facebook.svg' },
    { path: '/images/waitlist/professionals/linkedin.svg' },
    { path: '/images/waitlist/professionals/instagram.svg' },
  ];

  const getCurrentIcons = () => {
    if (pathname == '/waitlist/for-users') {
      return usersIcons;
    } else if (pathname == '/waitlist/for-professionals') {
      return professionalsIcons;
    }
  };

  const getCurrentFooter = () => {
    if (pathname == '/waitlist/for-creatives') {
      return true;
    } else {
      return false;
    }
  };

  const images = [
    { path: '/images/creatives/right.png' },
    { path: '/images/creatives/img1.png' },
    { path: '/images/creatives/img2.png' },
    { path: '/images/creatives/img4.png' },
    { path: '/images/creatives/img3.png' },
    { path: '/images/creatives/img5.png' },
    { path: '/images/creatives/left.png' },
  ];

  return (
    <>
      {getCurrentFooter() ? (
        <Slide
          className="pt-[100px]"
          ContentClassName="bg-neutral-100 py-[50px]"
          images={images}
        />
      ) : (
        <footer
          className={clsx(
            'flex justify-center gap-5 pb-[150px] pt-[100px] lg:gap-10',
            getCurrentFooterClassName(),
          )}
        >
          {getCurrentIcons()?.map((icon) => (
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[50%] bg-neutral">
              <div className="relative h-[22px] w-[22px] ">
                <Image src={`${icon.path}`} alt="" fill />
              </div>
            </div>
          ))}
        </footer>
      )}
    </>
  );
}

export default WaitlistFooter;
