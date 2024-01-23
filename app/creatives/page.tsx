import React from 'react';

import { Button } from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Sub from '@/components/ui/Sub';
import SubHeading from '@/components/ui/SubHeading';

function Creatives() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full  bg-gradient-to-b  from-primary-50 to-neutral pt-20">
        <div className=" mb-[127px] w-full">
          <Heading className="mx-auto text-center">
            Encourage Hope through Work of Art
          </Heading>
          <div className=" mt-10 flex justify-center">
            <Button className="bg-primary">Become a Creative</Button>
          </div>
        </div>
      </section>
      <section className="md:mt-[132px]">
        <div>
          <SubHeading>
            Discover Hope, Find Recovery, Reclaim Your Life with Us.
          </SubHeading>
          <div className="mt-20 border-x-2 border-neutral-200 px-[80px] pb-[218px]">
            <div className="flex flex-wrap md:gap-[26px]">
              <div className="bg-neutral-750 h-[560px] max-w-[467px] rounded-[18px] px-[32px] pr-[72px] pt-[44px]">
                <Sub className="font-medium">
                  Be a Part of the journey to wellness of people
                </Sub>
              </div>
              <div className="bg-neutral-750 h-[560px] max-w-[467px] rounded-[18px] px-[32px] pr-[72px] pt-[44px]">
                <Sub className="font-medium">
                  Schedule Session and Monitor Patients Addiction recovery
                  Journey
                </Sub>
              </div>
            </div>
            <div className="mt-[28px] max-w-[100%] rounded-[18px] bg-secondary-100 px-[158px] pb-[196px] pr-[72px] pt-[68px]">
              <Sub className="max-w-[664px] text-center">
                We are a platform dedicated to helping
                <br /> people get rid of dist and wellbeing through therapy
                sessions,
              </Sub>
            </div>
          </div>
          <div className="-mt-10 flex max-w-[100%] flex-col items-center justify-center gap-[44px] rounded-[18px] bg-primary-950 px-[158px] py-[100px] pr-[72px] pt-[68px]">
            <SubHeading className="max-w-[664px]  text-neutral">
              Be a Part of the Heroes bringing hope and joy to People!
            </SubHeading>
            <p className="max-w-[412px] text-center text-neutral">
              We are a platform dedicated to helping people get rid of dist and
              wellbeing through
            </p>

            <Button className=" w-[160px] bg-neutral text-neutral-700 md:w-[230px]">
              Become a Professional
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Creatives;
