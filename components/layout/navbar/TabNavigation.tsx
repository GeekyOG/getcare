'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TabNavigation() {
  const routes = [
    { path: '/professionals', title: 'For Professionals' },
    { path: '/creatives', title: 'For Creatives' },
    { path: '/about-us', title: 'About Us' },
    { path: '/contact-us', title: 'Contact Us' },
    { path: '/faqs', title: 'FAQs' },
  ];

  const pathname = usePathname();

  const getActiveLinkClassName = (pathname: string) => {
    const commonActiveClassName = 'rounded-[12px] bg-white font-bold ';

    if (pathname === '/professionals') {
      return clsx(commonActiveClassName, 'text-secondary-750');
    } else if (pathname === '/about-us') {
      return clsx(commonActiveClassName, 'text-primary-550');
    } else if (pathname === '/creatives' || pathname === '/contact-us') {
      return clsx(commonActiveClassName, 'text-secondary-650');
    }

    return commonActiveClassName;
  };

  const getActiveTabClassName = () => {
    if (pathname === '/creatives') {
      return 'bg-secondary-100';
    } else if (pathname === '/contact-us') {
      return 'bg-secondary-100';
    }
  };

  return (
    <div
      className={clsx(
        'hidden h-14 items-center gap-2.5 rounded-xl bg-neutral-100 p-2 -tracking-[0.42px] lg:flex',
        getActiveTabClassName(),
      )}
    >
      {routes.map((route) => {
        const isActivePath = pathname === route.path;

        return (
          <div
            key={route.path}
            className={clsx(
              'flex h-full items-center justify-center px-3 text-sm/[140%] tracking-1 text-neutral-400 transition-all',
              isActivePath ? getActiveLinkClassName(pathname) : '',
            )}
          >
            <Link href={route.path}>{route.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
