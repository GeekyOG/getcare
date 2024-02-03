import './homepage.css';

import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import CallToAction from '@/components/ui/CallToAction';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/home/Card';

export default function Home() {
  return (
    <div className="mb-[-350px] flex flex-col items-center justify-between">
      <section className="mt-[5.125rem] px-[24px] lg:mt-[4.5625rem]">
        <div className="relative md:mb-[6.625rem]">
          <h1 className="max-w-[49.6875rem] text-center text-[2.5rem]/[140%] font-semibold -tracking-[1.6px] lg:text-7xl/[125%] lg:-tracking-[4.32px]">
            Discover A New Chapter With Therapy And Support At Your Fingertip
          </h1>
          <div className="mt-[40px] flex justify-center md:hidden">
            <Button>Download the App</Button>
          </div>

          <Image
            alt=""
            width="80"
            height="80"
            src="/images/home/light-grey-ellipse.svg"
            className="absolute -right-[10rem] top-[1.25rem] hidden xl:block"
          />
          <Image
            alt=""
            width="80"
            height={52.5}
            src="/images/home/butterfly.svg"
            className="absolute -top-[2.1875rem] right-[120px] lg:-top-[22px] lg:right-[297px]"
          />
          <Image
            alt=""
            width="434"
            height="482"
            src="/images/home/mockup-mobile.png"
            className="mx-auto mt-[3rem] block md:hidden"
          />
          <Image
            alt=""
            width="434"
            height="482"
            src="/images/home/mockup-mobile.png"
            className="mx-auto mt-[3rem] block md:hidden"
          />
        </div>

        <Image
          priority
          alt=""
          width="836"
          height="449"
          quality={100}
          src="/images/home/homepage-hero.png"
          className="hidden md:block"
        />
      </section>

      <section className="w-full bg-gradient-to-r from-primary to-[#05807C]">
        <div className="hero-background-container pb-[10.375rem] pt-[9.125rem] lg:pb-[13.25rem]">
          <div className="mx-auto max-w-[49.1875rem] px-[24px] lg:px-0 xl:px-0">
            <h2 className="text mb-14 text-[2.5rem]/none font-bold -tracking-[1.6px] text-white md:text-[4rem]/none md:-tracking-[3.2px]">
              Hello Friend!
            </h2>
            <div className="flex max-w-[47.25rem] flex-col gap-8">
              <h3 className="md:leading-0 text-[1.125rem]/none font-medium leading-[36px] -tracking-[1.18px] text-primary-100 md:text-[2rem]/[170%] md:-tracking-[1.6px]">
                Here we understand the struggle. The fight
                <br className="hidden lg:block" /> to break free and quit.
              </h3>

              <h3 className="text-[1.125rem]/none font-medium leading-[36px] -tracking-[1.18px] text-primary-300 md:text-[2rem]/[170%] md:-tracking-[1.6px]">
                Here we see the light at the end of the tunnel and{' '}
                <br className="hidden lg:block" /> we are dedicated to helping
                you reach it.
              </h3>

              <h3 className="md:leading-0 text-[1.125rem]/none font-medium leading-[36px] -tracking-[1.18px] text-primary-500 md:text-[2rem]/[170%] md:-tracking-[1.6px]">
                Our goal is to provide the support and care{' '}
                <br className="hidden lg:block" /> you need to help you regain
                your confidence <br className="hidden lg:block" /> and live
                better.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-[#f6f8f8] to-[#f7fbfc] pb-[24.25rem] pt-[8.25rem]">
        <Heading className="mx-auto mb-[4.5rem] max-w-[41.625rem] text-center text-5xl/[140%] font-semibold -tracking-[1.92px]">
          Discover Hope, Find Recovery, Reclaim Your Life with Us.
        </Heading>

        <div className="mx-auto max-w-[70rem] border-x border-solid border-neutral-200  px-[24px] pb-[5.25rem] pt-0 md:px-80 md:pl-[5rem] md:pr-20">
          <div className="grid gap-x-[1.625rem] gap-y-[1.75rem] md:grid-cols-1 lg:grid-cols-2">
            <Card
              title="One on One professionals Sessions with passionate professionals"
              image={{
                src: '/images/home/doctor-img.svg',
                alt: 'man-woman-smiling-phone-call',
                width: 328.18,
                height: 290.41,
              }}
            />
            <Card
              title="Live feeds to educate and guide you on your journey"
              image={{
                src: '/images/home/card-img-2.svg',
                alt: 'man-woman-smiling-phone-call',
                width: 328.18,
                height: 290.41,
              }}
            />
            <Card
              title="Join Communities filled with love and similar reasoning"
              image={{
                src: '/images/home/card-img-3.svg',
                alt: 'man-woman-smiling-phone-call',
                width: 328.18,
                height: 290.41,
                className: 'pt-[2.375rem]',
              }}
            />
            <Card
              title="One on One professionals Sessions with passionate professionals"
              image={{
                src: '/images/home/card-img-1.svg',
                alt: 'man-woman-smiling-phone-call',
                width: 328.18,
                height: 290.41,
              }}
            />
          </div>
        </div>
      </section>

      <CallToAction className="-top-[308px] lg:mt-[150px]" />
    </div>
  );
}
