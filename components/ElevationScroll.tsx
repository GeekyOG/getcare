'use client';

import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from 'react';

interface ElevationScrollProps {
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  threshold?: number;
  elevation?: string;
  shrinkPadding?: boolean;
}

/**
 * ElevationScroll component adds elevation to a scrollable component when scrolled beyond a specified threshold.
 * @param children - The scrollable component to apply elevation to.
 * @param threshold - The scroll position threshold in pixels. Defaults to 50
 * @param elevation - The boxShadow value to apply when scrolled beyond the threshold. Defaults to 0px 2px 4px rgba(0, 0, 0, 0.1)
 * @param shrinkPadding - The padding to apply when scrolled
 * @returns The scrollable component with elevation applied when scrolled beyond the threshold.
 */
const ElevationScroll: React.FC<ElevationScrollProps> = ({
  children,

  threshold = 50,
  elevation = '0px 24px 32px 0px rgba(204, 204, 204, 0.08)',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return React.cloneElement(children, {
    style: {
      boxShadow: isScrolled ? elevation : 'none',
      padding: isScrolled ? '10px 0' : '',
      transition: 'all 0.2s ease-in-out',
    },
  } as React.HTMLAttributes<HTMLElement>);
};

export default ElevationScroll;
