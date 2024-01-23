import clsx from 'clsx';
import Image from 'next/image';
import type { FunctionComponent } from 'react';

interface CardProps {
  image: string;
  name: string;
  time: string;
  className?: string;
}

const Card: FunctionComponent<CardProps> = ({
  image,
  name,
  time,
  className,
}) => (
  <div
    className={clsx(
      'flex w-[364px] items-center gap-[14px] rounded-[19px] bg-neutral p-[14px] md:w-[100%]',
      className,
    )}
  >
    <div className="">
      <Image width="57" height="57" src={image} alt="" />
    </div>
    <div className="flex flex-col gap-[10px]">
      <p className="text-[1.18rem] font-[500] leading-[26.762px] -tracking-[0.573px]">
        {name}
      </p>
      <p className="leading-[ 20.071px] text-[0.89rem] -tracking-[-0.43px] text-neutral-400">
        Today.{time}
      </p>
    </div>
  </div>
);

export default Card;
