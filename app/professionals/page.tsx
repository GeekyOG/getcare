import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Box from '@/components/ui/professionals/Box';
import Card from '@/components/ui/professionals/Card';
import Sub from '@/components/ui/Sub';
import SubHeading from '@/components/ui/SubHeading';

export default function professionals() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="mt-20 px-[24px] lg:px-0">
        <div className="mb-[127px]">
          <Heading className="text-center">
            Healing <span className="text-secondary-600">Hearts</span>, One
            Session at a Time.
          </Heading>
          <div className="mt-10 flex justify-center">
            <Button className="bg-secondary-600 ">Become a Professional</Button>
          </div>
        </div>
      </section>
      <section className="w-full overflow-hidden ">
        <Container className="flex flex-col items-center justify-center gap-[20px] px-[24px] lg:flex-row lg:gap-[25px] lg:px-0">
          <Image
            alt=""
            width="261"
            height="420"
            src="/images/professionals/lady-wave.png"
            className="hidden  lg:block"
            quality={100}
          />
          <Image
            alt=""
            width="261"
            height="420"
            src="/images/professionals/mobile.png"
            className="block w-[100%] lg:hidden"
            quality={100}
          />

          <Image
            alt=""
            width="548"
            height="502"
            src="/images/professionals/doc-laptop.png"
            className="hidden lg:block"
            quality={100}
          />
          <div className="flex gap-[20px]  lg:flex-col lg:gap-[25px]">
            <div className="overflow-hidden lg:w-[205px]">
              <Image
                alt=""
                width="461"
                height="205"
                src="/images/professionals/woman-laptop.png"
                quality={100}
              />
            </div>

            <div className="overflow-hidden lg:w-[205px]">
              <Image
                alt=""
                width="461"
                height="205"
                src="/images/professionals/lady-laptop.png"
                quality={100}
              />
            </div>
          </div>
        </Container>
        <div className="-mt-[180px] w-full bg-secondary-200  pb-[124px] pt-[240px] md:-mt-[330px] md:pt-[430px]  lg:-mt-[210px] lg:pt-[330px]">
          <Container>
            <div className="md:max-w-auto mx-auto max-w-[372px] md:max-w-[500px] lg:max-w-[938px]">
              <p className="text-center text-[18px] font-[500] leading-[31.5px] -tracking-[0.18px] text-secondary-800 md:text-[2.5rem]/[170%] md:-tracking-[2px]">
                We are a platform dedicated to helping people
                <br className="hidden lg:block" /> get rid of dist and wellbeing
                through professionals sessions, journaling, relaxation, and
                community support.
              </p>
              <p className="text-[2rem]/[170%] -tracking-[1.6px] text-white"></p>
            </div>
          </Container>
        </div>
      </section>
      <section className="w-full  px-[24px] pt-[138px] lg:px-0">
        <Container>
          <SubHeading className="md:max-w-[666px]">
            Discover Hope, Find Recovery, Reclaim Your Life with Us.
          </SubHeading>
          <div className="mx-auto mt-10 flex max-w-[1120px] flex-col flex-wrap items-center justify-center gap-[28px]  border-neutral-200 md:flex-row md:gap-[26px] md:border-x-2 md:pb-[218px]">
            <Box className="bg-gradient-to-r from-[#f9fafb] to-[#f7fbfc]">
              <Sub className="hidden font-medium md:block">
                Be a Part of the journey to wellness of people
              </Sub>
              <Sub className="md:hidden">
                One on One professionals Sessions with passionate professionals
              </Sub>
              <Image
                src="/images/professionals/head.png"
                alt=""
                width="261"
                height="205"
                className="mx-auto mt-10 block"
              />
            </Box>
            <div className="mx-auto mt-[28px] block max-w-[960px] rounded-[18px] bg-secondary-100 px-[30px] pb-[358px]  pt-[40px] md:hidden md:px-[156px]  md:pb-[169px] md:pt-[69px]">
              <Sub className=" leading-[39.2px] md:leading-[54.4px]">
                Live feeds to educate and guide you on you journey
              </Sub>
            </div>

            <Box className="overflow-auto bg-gradient-to-r from-[#f9fafb] to-[#f7fbfc]">
              <Sub className="font-medium">
                Schedule Session and Monitor Patients Addiction recovery Journey
              </Sub>
              <div className="mt-10 flex flex-col  gap-[19.12px]">
                <Card
                  image="/images/professionals/card1.png"
                  name="John Dalton"
                  time="4:16PM"
                />
                <Card
                  className="opacity-75"
                  image="/images/professionals/card2.png"
                  name="John Dalton"
                  time="4:16PM"
                />
                <Card
                  className="opacity-35"
                  image="/images/professionals/card2.png"
                  name="John Dalton"
                  time="4:16PM"
                />
                <Card
                  className="overflow-hidden opacity-20"
                  image="/images/professionals/card2.png"
                  name="John Dalton"
                  time="4:16PM"
                />
              </div>
            </Box>
            <div className="mx-auto mt-[28px] hidden max-w-[960px] rounded-[18px] bg-secondary-100 px-[30px] pb-[358px]  pt-[40px] md:block md:px-[156px] md:pb-[169px] md:pt-[69px]">
              <h4 className="text-center text-[1.75rem] font-medium leading-[39.2px] -tracking-[1.6px] md:text-[32px]/[140%]  md:leading-[54.4px]">
                We are a platform dedicated to helping people get rid of dist
                and wellbeing through professionals sessions,
              </h4>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="px-[24px] lg:px-0">
          <div className="to-secondary-1000 mx-auto mt-[28px] overflow-hidden rounded-[18px] bg-gradient-to-tr from-secondary-550 text-neutral md:-mt-[28px]">
            <div
              style={{
                backgroundImage:
                  "url('/images/professionals/contact-us-ellipse.svg')",
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
              }}
              className="flex flex-col gap-[34px] px-[36px] py-[56px] md:px-[226px] md:pb-[169px] md:pt-[69px]"
            >
              <SubHeading>
                Be a Part of the Heroes bringing hope and joy to People!
              </SubHeading>
              <p className="mx-auto max-w-[26.3125rem] text-center">
                We are a platform dedicated to helping people get rid of dist
                and wellbeing through
              </p>
              <Button className="mx-auto bg-neutral text-neutral-700">
                Become a Professional
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
