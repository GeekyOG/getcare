import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface BigTextProps {
  children: React.ReactNode;
  className?: string;
}

const BigText: FunctionComponent<BigTextProps> = ({ children, className }) => (
  <p className={clsx('font-[900 ] text-[180px] ', className)}>{children}</p>
);
export default BigText;
