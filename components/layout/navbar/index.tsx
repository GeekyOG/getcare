'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ElevationScroll from '@/components/ElevationScroll';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import LogoBox from '@/components/ui/LogoBox';

import TabNavigation from './TabNavigation';

export default function Navbar() {
  const pathname = usePathname();

  const getCurrentHeadingClassName = () => {
    if (pathname === '/creatives') {
      return 'bg-primary-50 border-none';
    } else if (pathname === '/contact-us') {
      return 'bg-[#fffbf9] border-none';
    } else {
      return 'bg-white';
    }
  };

  return (
    <ElevationScroll>
      <nav
        className={clsx(
          'fixed z-50 w-full border-[1px] border-neutral-150 py-[2rem] lg:py-[2.3125rem]',
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
          </div>
        </Container>
      </nav>
    </ElevationScroll>
  );
}
