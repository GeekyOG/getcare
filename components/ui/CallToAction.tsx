import clsx from 'clsx';
import Image from 'next/image';
import type { FunctionComponent } from 'react';
import { Button } from './Button';

interface Props {
  className?: string;
}

const CallToAction: FunctionComponent<Props> = ({ className }) => (
  <section
    className={clsx(
      'relative  w-[100%] justify-center px-[24px] lg:flex',
      className,
    )}
  >
    <div className="relative block rounded-3xl bg-gradient-to-b from-primary to-[#069d98] lg:max-w-[70rem]">
      <div className="bg-right-bottom bg-no-repeat px-[18px] pt-[4.875rem] lg:bg-[url('/images/home/use-get-care-ellipse.svg')] lg:pb-[6.5rem]">
        <div className="flex flex-col gap-[14.4304px] lg:flex-row">
          <div>
            <div className="lg:ml-16 lg:mr-[31.9375rem]">
              <h2 className="mb-6 text-center text-[2rem] font-bold -tracking-[1.28px] text-white lg:max-w-[34.0625rem] lg:text-left lg:text-[3.5rem]/[135%] lg:-tracking-[2.8px]">
                Use GetCare
                <br className="lg:hidden" /> anywhere, anytime!
              </h2>
              <p className="mx-auto mb-[2rem] max-w-[26.3125rem]  text-center text-lg/[170%] -tracking-[0.9px] text-primary-100 lg:mx-0 lg:text-left">
                We are a platform dedicated to helping people
                <br className="hidden lg:block" /> get rid of dist and wellbeing
                through
              </p>
            </div>
            <div className="flex justify-center lg:ml-[3.75rem] lg:block">
              <Button
                className="bg-neutral p-4 text-neutral-950 hover:shadow-none lg:bg-primary-500"
                href="#"
              >
                Download App
              </Button>
            </div>
          </div>

          <div className="bottom-0 right-[3.905rem] mx-auto mt-[2rem] lg:absolute lg:mx-0">
            <div className="relative z-10 mx-auto h-[294.66px] w-[21.563rem] max-w-[70vw] md:mx-0 md:h-[683px] md:w-[434px] lg:-mt-[200px]">
              <Image
                src="/images/about/MockUp.png"
                alt=""
                fill={true}
                className="hidden lg:block"
              />
              <Image
                src="/images/home/change.png"
                alt=""
                fill={true}
                className="lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default CallToAction;
