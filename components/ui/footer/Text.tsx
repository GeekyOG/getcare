import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: FunctionComponent<TextProps> = ({ children, className }) => (
  <p
    className={clsx(
      'text-[1rem] font-[400] leading-[28.8px] -tracking-[0.16px] text-neutral-400 md:text-[0.875rem] md:leading-[25.2px] md:-tracking-[0.14px]',
      className,
    )}
  >
    {children}
  </p>
);
export default Text;
