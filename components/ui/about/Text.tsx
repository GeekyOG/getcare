import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: FunctionComponent<TextProps> = ({ children, className }) => (
  <p
    className={clsx(
      'font-[400 ] z-10 text-[1.125rem] leading-[36px] -tracking-[-0.18px] md:text-[2rem] md:leading-[54.4px] md:-tracking-[0.96px]',
      className,
    )}
  >
    {children}
  </p>
);
export default Text;
