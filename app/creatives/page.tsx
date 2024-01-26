import React from 'react';

import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Sub from '@/components/ui/Sub';
import SubHeading from '@/components/ui/SubHeading';
import Image from 'next/image';

function Creatives() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between">
      <section className="w-full pt-20">
        <div className="mb-[px] w-full">
          <Heading className="mx-auto text-center">
            Encourage Hope
            <br /> through
            <span
              className="ml-2"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #07B6B0 53.21%, #81C5BB 67.11%, #C8CDC1 73.68%, #FBD4C6 82.61%, #D5AEA0 91.5%, #AE8779 107.21%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Work of Art
            </span>
          </Heading>
          <div className="mt-10 flex justify-center">
            <Button className="z-10 bg-primary-950 text-neutral">
              Become a Creative
            </Button>
          </div>
        </div>
      </section>
      <section className="-mt-[75px] overflow-x-scroll overflow-y-scroll pt-[150px] xl:overflow-visible">
        <div className="flex w-[100vw] justify-between gap-[25px]">
          <div className="flex-none">
            <Image
              src="/images/creatives/green.png"
              alt=""
              height={363}
              width={130}
              quality={100}
            />
          </div>

          <div className="flex-none">
            <Image
              src="/images/creatives/img1.png"
              alt=""
              height={363}
              width={261}
              quality={100}
            />
          </div>
          <div className="flex-none">
            <Image
              src="/images/creatives/img2.png"
              alt=""
              height={363}
              width={261}
              quality={100}
            />
          </div>
          <div className="flex-none">
            <Image
              src="/images/creatives/img3.png"
              alt=""
              height={363}
              width={261}
              quality={100}
            />
          </div>
          <div className="relative flex-none">
            <Image
              src="/images/creatives/img4.png"
              alt=""
              height={363}
              width={261}
              quality={100}
            />
            <Image
              src="/images/creatives/ellipse.png"
              alt=""
              height={200}
              width={200}
              quality={100}
              className="z-5 absolute -top-[150px] right-[0px]"
            />
          </div>

          <div className="flex-none">
            <Image
              src="/images/creatives/pink.png"
              alt=""
              height={363}
              width={130}
              quality={100}
            />
          </div>
        </div>
      </section>
      <section className="mt-[100px]  px-[24px]">
        <div>
          <SubHeading>
            Feeling inspired? Create something positive for people to focus
            their mind on.
          </SubHeading>
          <div className="mt-20 border-neutral-200 lg:border-x-2 lg:px-[80px]">
            <div className="flex flex-wrap gap-[26px] lg:flex-nowrap">
              <div
                style={{
                  background:
                    ' linear-gradient(180deg, #F9FAFB 0%, #F7FBFC 100%)',
                }}
                className="w-[100%]"
              >
                <div
                  className="h-[560px]  rounded-[18px] px-[32px] pt-[44px] lg:max-w-[467px]"
                  style={{
                    backgroundImage:
                      "url('/images/creatives/ellipse.svg'), url('/images/creatives/doc.svg'), url('/images/creatives/doc.svg'), url('/images/creatives/doc.svg'), url('/images/creatives/doc.svg",

                    backgroundPosition:
                      'left bottom, left 0px bottom 260px, left 100px bottom 250px, left 200px bottom 200px, left 260px bottom 100px',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Sub className="font-medium">
                    Explore the boundaries of your creativity. Create content
                    and share experiences.
                  </Sub>
                </div>
              </div>

              <div className=" h-[560px] w-[100%] rounded-[18px] bg-primary-50 px-[32px] pt-[44px] lg:max-w-[467px] lg:pr-[120px]">
                <Sub className="font-medium">
                  Its a digital community. <br />A world built with art and love
                </Sub>
              </div>
            </div>
            <div className="mt-[28px] max-w-[100%] rounded-[18px] bg-secondary-100 px-[32px] pb-[196px] pt-[44px] pt-[68px] lg:px-[158px] lg:pr-[72px]">
              <Sub className=" text-center lg:max-w-[664px]">
                Sip up the creative juice and inspire an ever-growing audience
                with art that comes from the heart.
              </Sub>
            </div>
          </div>
          <div className="mt-[100px] flex max-w-[100%] flex-col items-center justify-center gap-[44px] rounded-[18px] bg-primary-950 px-[30px] py-[100px] pt-[68px] lg:px-[158px]">
            <SubHeading className="text-neutral  lg:max-w-[664px]">
              Together we can create a balanced world
            </SubHeading>

            <Button className="w-[160px] bg-neutral text-neutral-700 md:w-[230px]">
              Become a Creator
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Creatives;
