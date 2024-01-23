import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: FunctionComponent<HeadingProps> = ({ children, className }) => (
  <p
    className={clsx(
      'max-w-[795px] text-[2.5rem] font-semibold -tracking-[1.6px] md:text-7xl/[125%] md:-tracking-[4.32px]',
      className,
    )}
  >
    {children}
  </p>
);
export default Heading;
