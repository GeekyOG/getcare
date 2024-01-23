import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading: FunctionComponent<HeadingProps> = ({ children, className }) => (
  <h3
    className={clsx(
      'leading-[25.2px]/[180%] text-[0.875rem] font-[700] -tracking-[0.14px] text-primary-550 ',
      className,
    )}
    style={{
      backgroundImage: 'linear-gradient(180deg, #07B6B0 0%, #069D98 100%)',
      backgroundClip: 'text',
      color: 'transparent',
    }}
  >
    {children}
  </h3>
);
export default Heading;
