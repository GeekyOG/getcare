import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface SubProps {
  children: React.ReactNode;
  className?: string;
}

const Sub: FunctionComponent<SubProps> = ({ children, className }) => (
  <p
    className={clsx(
      'text-[1.75rem] font-[500] leading-[32.9px] -tracking-[1.4px] md:text-[2rem] md:leading-[44.8px] md:-tracking-[1.6px]',
      className,
    )}
  >
    {children}
  </p>
);
export default Sub;
