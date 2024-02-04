import Image from 'next/image';
import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface props {
  className?: string;
  images: Array<any>;
  ContentClassName?: string;
}

const Slide: FunctionComponent<props> = ({
  className,
  ContentClassName,
  images,
}) => {
  return (
    <section
      className={clsx(
        '-mt-[75px] overflow-x-scroll overflow-y-scroll xl:overflow-visible',
        className,
      )}
    >
      <div className="flex">
        <div
          className={clsx('flex justify-between gap-[25px]', ContentClassName)}
        >
          {images.map((image, index) => {
            if (
              image.path == '/images/creatives/green.png' ||
              image.path == '/images/creatives/pink.png' ||
              image.path == '/images/creatives/right.png' ||
              image.path == '/images/creatives/left.png'
            ) {
              return (
                <div className="relative h-[363px] w-[130px] flex-none">
                  <Image src={image.path} alt="" fill quality={100} />
                </div>
              );
            } else if (index == images.length - 2) {
              return (
                <div className="relative relative h-[363px] w-[261px] flex-none">
                  <Image src={image.path} alt="" fill quality={100} />
                  <Image
                    src="/images/creatives/ellipse.png"
                    alt=""
                    height={200}
                    width={200}
                    quality={100}
                    className="z-5 absolute -top-[150px] right-[0px]"
                  />
                </div>
              );
            } else {
              return (
                <div className="relative relative h-[363px] w-[261px] flex-none">
                  <Image src={image.path} alt="" fill quality={100} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Slide;
