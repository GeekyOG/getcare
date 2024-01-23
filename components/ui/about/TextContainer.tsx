import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface TextContainerProps {
  children: React.ReactNode;
  className?: string;
}

const TextContainer: FunctionComponent<TextContainerProps> = ({
  children,
  className,
}) => (
  <div
    className={clsx(
      'to-neutral-750 flex w-[210px] flex-none items-center justify-center rounded-[14px] bg-gradient-to-b from-neutral-150 pb-[146px] md:w-[262px]',
      className,
    )}
  >
    {children}
  </div>
);
export default TextContainer;
