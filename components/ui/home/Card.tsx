import clsx from 'clsx';
import Image from 'next/image';

interface CardProps {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
  };
  className?: string;
}

export default function Card({ title, image, className }: CardProps) {
  return (
    <div
      className={clsx(
        'w-[100%] rounded-[18px] bg-white pl-8 pt-11 md:pr-[103.82px]',
        className,
      )}
    >
      <h3 className="max-w-[331px] text-[1.75rem] font-medium -tracking-[1.6px] md:text-[32px]/[140%]">
        {title}
      </h3>
      <Image
        alt={image.alt}
        width={image.width}
        height={image.height}
        src={image.src}
        className={image.className}
      />
    </div>
  );
}
