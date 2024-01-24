'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ElevationScroll from '@/components/ElevationScroll';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import LogoBox from '@/components/ui/LogoBox';

import TabNavigation from './TabNavigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  const getCurrentHeadingClassName = () => {
    if (pathname === '/creatives') {
      return 'bg-white lg:border-none';
    } else if (pathname === '/contact-us') {
      return 'bg-[#fffbf9] lg:border-none';
    } else {
      return 'bg-white';
    }
  };

  const getCurrentHeadingIconClassName = () => {
    if (pathname === '/creatives') {
      return 'bg-primary-200';
    } else if (pathname === '/contact-us') {
      return 'bg-secondary-200';
    } else {
      return 'bg-primary-100';
    }
  };

  const getCurrentIconClassName = () => {
    if (pathname === '/contact-us') {
      return '/images/home/contactmenu-icon.svg';
    } else {
      return '/images/home/menu.svg';
    }
  };

  const getCurrentIconWrapperClassName = () => {
    if (pathname === '/creatives') {
      return 'bg-primary-50';
    } else if (pathname === '/contact-us') {
      return 'bg-secondary-100';
    } else {
      return 'bg-primary-50';
    }
  };

  return (
    <ElevationScroll>
      <nav
        className={clsx(
          'fixed z-50 w-full border-[1px] border-neutral-150 lg:py-[2.3125rem] lg:py-[2rem]',
          getCurrentHeadingClassName(),
        )}
      >
        <Container className="pl-6 md:pl-0">
          <div className="flex items-center justify-between gap-5">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <LogoBox />
              </Link>
            </div>

            <TabNavigation />

            <Button size="md" className="hidden min-w-[147px] lg:flex">
              Get Started
            </Button>

            <div
              className={`px-[1.75rem]  pb-[24px] pt-[2rem] lg:hidden ${getCurrentIconWrapperClassName()}`}
            >
              <div
                className={`rounded-[8px]  p-[1rem] ${getCurrentHeadingIconClassName()}`}
              >
                <div className="relative h-[2rem] w-[2rem]">
                  <Image src={`${getCurrentIconClassName()}`} fill alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </ElevationScroll>
  );
}
