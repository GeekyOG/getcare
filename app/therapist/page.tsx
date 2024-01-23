import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
import Sub from '@/components/ui/Sub';
import SubHeading from '@/components/ui/SubHeading';
import Box from '@/components/ui/therapy/Box';
import Card from '@/components/ui/therapy/Card';

export default function Therapist() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="mt-20">
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
      <section className="w-full">
        <Container className="flex flex-col items-center justify-center gap-[20px] md:flex-row md:gap-[25px] ">
          <Image
            alt=""
            width="261"
            height="420"
            src="/images/therapy/lady-wave.svg"
            className="hidden  md:block"
          />
          <Image
            alt=""
            width="261"
            height="420"
            src="/images/therapy/mobile.png"
            className="block w-[100%] md:hidden"
          />

          <Image
            alt=""
            width="548"
            height="502"
            src="/images/therapy/doctor-laptop.svg"
            className="hidden md:block"
          />
          <div className="flex gap-[20px]  md:flex-col md:gap-[25px]">
            <div className="overflow-hidden md:w-[205px]">
              <Image
                alt=""
                width="261"
                height="205"
                src="/images/therapy/lady-laptop.svg"
              />
            </div>

            <div className="overflow-hidden md:w-[205px]">
              <Image
                alt=""
                width="261"
                height="205"
                src="/images/therapy/lady-pen.svg"
              />
            </div>
          </div>
        </Container>
        <div className="-mt-[180px] w-full bg-secondary-200  pb-[124px] pt-[330px] md:-mt-[210px]">
          <Container>
            <div className="mx-auto max-w-[938px] ">
              <p className="text-center text-[18px] font-[500] leading-[31.5px] -tracking-[0.18px] text-secondary-800 md:text-[2.5rem]/[170%] md:-tracking-[2px]">
                We are a platform dedicated to helping people <br />
                get rid of dist and wellbeing through therapy sessions,
                journaling, relaxation, and community support.
              </p>
              <p className="text-[2rem]/[170%] -tracking-[1.6px] text-white"></p>
            </div>
          </Container>
        </div>
      </section>
      <section className="w-full  pt-[138px]">
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
                One on One therapy Sessions with passionate professionals
              </Sub>
              <Image
                src="/images/therapy/head.png"
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
                  image="/images/therapy/card1.png"
                  name="John Dalton"
                  time="4:16PM"
                />
                <Card
                  className="opacity-75"
                  image="/images/therapy/card2.png"
                  name="John Dalton"
                  time="4:16PM"
                />
                <Card
                  className="opacity-35"
                  image="/images/therapy/card2.png"
                  name="John Dalton"
                  time="4:16PM"
                />
                <Card
                  className="overflow-hidden opacity-20"
                  image="/images/therapy/card2.png"
                  name="John Dalton"
                  time="4:16PM"
                />
              </div>
            </Box>
            <div className="mx-auto mt-[28px] hidden max-w-[960px] rounded-[18px] bg-secondary-100 px-[30px] pb-[358px]  pt-[40px] md:block md:px-[156px] md:pb-[169px] md:pt-[69px]">
              <Sub className=" text-center leading-[39.2px]  md:leading-[54.4px]">
                We are a platform dedicated to helping people get rid of dist
                and wellbeing through therapy sessions,
              </Sub>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="to-secondary-1000 mx-auto mt-[28px] rounded-[18px] bg-gradient-to-tr from-secondary-550 text-neutral md:-mt-[28px]">
            <div
              style={{
                backgroundImage:
                  "url('/images/therapy/contact-us-ellipse.svg')",
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

              <Button className="mx-auto w-[160px] bg-neutral text-neutral-700 md:w-[230px]">
                Become a Professional
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
