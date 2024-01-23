import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/home/Card';
import Heading from '@/components/ui/Heading';

export default function Home() {
  return (
    <div className="mb-[-350px] flex flex-col items-center justify-between">
      <section className="mt-[5.125rem] lg:mt-[4.0625rem]">
        <div className="relative md:mb-[6.625rem]">
          <h1 className="max-w-[49.6875rem] text-center text-[2.5rem]/[140%] font-semibold -tracking-[1.6px] lg:text-7xl/[125%] lg:-tracking-[4.32px]">
            Discover Hope, Find Recovery, Reclaim Your Life with Us.
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
            className="absolute -top-[2.1875rem] right-[120px] lg:-top-[1.5625rem] lg:right-[17.5rem]"
          />
          <Image
            alt=""
            width="334"
            height="482"
            src="/images/home/mockup-mobile.png"
            className="mx-auto mt-[5.125rem] block md:hidden"
          />
        </div>

        <Image
          priority
          alt=""
          width="831"
          height="502"
          src="/images/home/homepage-hero.png"
          className="hidden md:block"
        />
      </section>

      <section className="w-full bg-gradient-to-r from-primary to-[#05807C]">
        <div
          style={{
            backgroundImage:
              "url('/images/home/ellipse-left.svg'), url('/images/home/line-with-ellipse-up.svg'), url('/images/home/ellipse-right.svg'), url('/images/home/line-with-ellipse-down.svg')",
            backgroundPosition:
              'left, top 120px left 148px, right bottom, right 148px bottom 188px',
            backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
          }}
          className="pb-[13.25rem] pt-[9.125rem]"
        >
          <div className="mx-auto max-w-[49.1875rem] px-[24px] lg:px-0 xl:px-0">
            <h2 className="text mb-14 text-[2.5rem]/none font-bold -tracking-[1.6px] text-white md:text-[4rem]/none md:-tracking-[3.2px]">
              Hello Friend!
            </h2>
            <div className="flex max-w-[47.25rem] flex-col gap-10">
              <h3 className="md:leading-0 text-[1.125rem]/none font-semibold leading-[36px] -tracking-[1.18px] text-primary-100 md:text-[2rem]/[170%] md:-tracking-[1.6px]">
                We are a platform dedicated to helping people
                <br className="hidden lg:block" />
                get rid of dist and wellbeing through therapy sessions,
                journaling, relaxation, and community support.
              </h3>

              <h3 className="-tracking-[1.18px text-[1.125rem]/none font-semibold leading-[36px] text-primary-300 md:text-[2rem]/[170%] md:-tracking-[1.6px]">
                Our goal is to provide a safe and welcoming space
                <br className="hidden lg:block" /> where you can find the help
                and support you need to feel better and live a happier,
                healthier life.
              </h3>

              <h3 className="md:leading-0 text-[1.125rem]/none font-semibold leading-[36px] -tracking-[1.18px] text-primary-500 md:text-[2rem]/[170%] md:-tracking-[1.6px]">
                Our goal is to provide a safe and welcoming space where you can
                find the help and support you need to feel better and live a
                happier, healthier life.
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
              title="One on One therapy Sessions with passionate professionals"
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
              title="One on One therapy Sessions with passionate professionals"
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

      <section className="relative -top-[308px] w-[100%] justify-center px-[24px] lg:flex">
        <div className="relative block rounded-3xl bg-gradient-to-r from-primary to-[#069d98] lg:max-w-[70rem]">
          <div
            style={{
              backgroundImage: "url('/images/home/use-get-care-ellipse.svg')",
              backgroundPosition: 'right bottom',
              backgroundRepeat: 'no-repeat',
            }}
            className="px-[18px] pt-[4.875rem] lg:pb-[6.5rem]"
          >
            <div className="flex flex-col justify-between gap-[14.4304px] lg:flex-row">
              <div>
                <div className="lg:ml-16 lg:mr-[31.9375rem]">
                  <h2 className="mb-6 text-center text-[2rem] font-bold  -tracking-[1.28px] text-white lg:max-w-[34.0625rem] lg:text-left lg:text-[3.5rem]/[135%] lg:-tracking-[2.8px]">
                    Use GetCare anywhere, anytime!
                  </h2>
                  <p className="mx-auto mb-20 max-w-[26.3125rem]  text-center text-lg/[170%] -tracking-[0.9px] text-primary-100 lg:mx-0 lg:text-left">
                    We are a platform dedicated to helping people{' '}
                    <br className="hidden lg:block" /> get rid of dist and
                    wellbeing through
                  </p>
                </div>
                <div className="flex justify-center lg:ml-[3.75rem] lg:block">
                  <Button
                    className="bg-primary-500 p-4 hover:shadow-none"
                    href="#"
                  >
                    Download App
                  </Button>
                </div>
              </div>

              <div className="bottom-0 right-[3.905rem] mx-auto lg:absolute lg:mx-0">
                <div className="relative mx-auto h-[294.66px] w-[345px] max-w-[75vw] md:mx-0 md:h-[683px] md:w-[434px] lg:-mt-[200px] ">
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
    </div>
  );
}
