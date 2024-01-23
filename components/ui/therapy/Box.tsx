import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: FunctionComponent<BoxProps> = ({ children, className }) => (
  <div
    className={clsx(
      'bg-neutral-750  w-[100%] rounded-[18px] px-[32px] py-[44px] md:h-[560px] md:w-[467px]',
      className,
    )}
  >
    {children}
  </div>
);

export default Box;
