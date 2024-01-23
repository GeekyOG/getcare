import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className,
}) => (
  <div className={clsx('mx-auto max-w-[1120px]', className)}>{children}</div>
);

export default Container;
