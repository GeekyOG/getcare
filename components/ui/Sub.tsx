import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface SubProps {
  children: React.ReactNode;
  className?: string;
}

const Sub: FunctionComponent<SubProps> = ({ children, className }) => (
  <h3
    className={clsx(
      'max-w-[331px] text-[1.75rem] font-medium -tracking-[1.6px] md:text-[32px]/[140%]',
      className,
    )}
  >
    {children}
  </h3>
);
export default Sub;
