import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface ContactCardProps {
  subText?: string;
  contact?: string;
  text?: string;
  className?: string;
}

const ContactCard: FunctionComponent<ContactCardProps> = ({
  className,
  subText,
  contact,
  text,
}) => (
  <div className="w-[100%] overflow-hidden rounded-[16px] md:max-h-[358px] md:max-w-[351px] ">
    <div className="bg-secondary-200 px-[74px]  pt-[58px]">
      <div
        className={clsx('relative h-[150px] w-[200px] bg-cover', className)}
      ></div>
    </div>

    <div className="w-[100%] bg-secondary-150 pb-[45px] pl-[20px] pt-[20px]">
      <p className="text-[1rem] font-[500] md:leading-[22.4px] ">{text}</p>
      <p className="text-[0.95rem] font-[500] leading-[21.2px] text-neutral-800">
        {subText}
      </p>
      <p className="mt-[26.5px] text-[1.5rem] font-bold leading-[33.6px] text-secondary-950">
        {contact}
      </p>
    </div>
  </div>
);

export default ContactCard;
