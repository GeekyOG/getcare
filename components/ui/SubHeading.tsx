import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SubHeading: FunctionComponent<SubHeadingProps> = ({
  children,
  className,
}) => (
  <p
    className={clsx(
      'mx-auto text-center text-[2rem] font-[600] leading-[44.8px] -tracking-[1.28px] md:max-w-[666px] md:text-[48px]/none md:leading-[67.5px] md:-tracking-[1.9px]',
      className,
    )}
  >
    {children}
  </p>
);
export default SubHeading;
