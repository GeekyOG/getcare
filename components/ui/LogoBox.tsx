import clsx from 'clsx';

import LogoIcon from '../icons/logo';

export default function LogoBox({ size }: { size?: 'sm' }) {
  return (
    <LogoIcon
      className={clsx({
        'h-[56px] w-[154px]': !size,
        'h-[48px] w-[139px]': size === 'sm',
      })}
    />
  );
}
