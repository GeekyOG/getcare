import clsx from 'clsx';
import Image from 'next/image';
import type { FunctionComponent } from 'react';

interface TeamCardProps {
  className?: string;
  image: string;
  name: string;
  position: string;
}

const TeamCard: FunctionComponent<TeamCardProps> = ({
  className,
  image,
  name,
  position,
}) => (
  <div
    className={clsx(
      'flex w-[365px] flex-none flex-col items-center justify-center gap-[64.24px] rounded-[16px] bg-neutral-100 p-[2rem] md:w-[calc(45%)] lg:w-[365px]',
      className,
    )}
  >
    <Image src={image} alt="" width="240" height="176" />
    <div className="w-[100%] rounded-[12px] bg-neutral p-[26px]">
      <p className="text-[1.5rem]/140% font-medium">{name}</p>
      <p className="text-[1rem] font-[400] text-primary">{position}</p>
    </div>
  </div>
);

export default TeamCard;
