import Image from 'next/image';
import React from 'react';

import BigText from '@/components/ui/about/BigText';
import TeamCard from '@/components/ui/about/TeamCard';
import Text from '@/components/ui/about/Text';
import TextContainer from '@/components/ui/about/TextContainer';
import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

function About() {
  return (
    <main className=" flex min-h-screen flex-col items-center ">
      <section className="mt-20">
        <div className="px-[24px] lg:px-0">
          <Heading className="text-center">
            GetCare,
            <br className="block lg:hidden" /> your companion to discovering
            life
          </Heading>
        </div>
      </section>
      <section className="mt-20 flex w-[100vw] flex-col items-center overflow-hidden ">
        <div className="z-10 rounded-[18px] p-5 lg:border-2 lg:border-solid lg:border-primary-250">
          <div className="relative  h-[432px] w-[759px] lg:h-[450px] ">
            <Image alt="" fill={true} src="/images/about/hero.png" />
          </div>
        </div>
        <div className=" md: bg-neutral-750 relative -mt-20 w-[100vw] overflow-hidden pb-20 pt-[100px] md:pt-[130px]">
          <div className="absolute -right-[270px] top-[350px] h-[500px]  w-[500px]  md:right-[50px] md:top-[121px] md:h-[200px] md:w-[200px]">
            <Image
              alt=""
              fill={true}
              src="/images/about/ellipse.png"
              className=""
            />
          </div>
          <Container className="flex flex-col items-center px-[24px] lg:px-0">
            <div className="mx-auto">
              <div>
                <Heading className="z-10 text-left text-[2rem] md:mt-[40px]">
                  A little Back Story?...
                </Heading>
              </div>

              <div className="mt-[40px] flex max-w-[765px] flex-col gap-[40px] ">
                <Text className=" text-neutral-450">
                  We are a platform dedicated to helping people get rid of dist
                  and wellbeing through therapy sessions, journaling,
                  relaxation, and community support.
                </Text>
                <Text className="text-neutral-350">
                  Our goal is to provide a safe and welcoming space where you
                  can find the help and support you need to feel better and live
                  a happier, healthier life.
                </Text>
                <Text className="text-neutral-250">
                  Our goal is to provide a safe and welcoming space where you
                  can find the help and support you need to feel better and live
                  a happier, healthier life.
                </Text>
              </div>
            </div>
          </Container>

          <div className="mt-[240px]  flex flex-nowrap justify-center gap-[24px] text-neutral-200 md:mt-20">
            <TextContainer>
              <BigText>E</BigText>
            </TextContainer>
            <TextContainer>
              <BigText>G</BigText>
            </TextContainer>
            <TextContainer>
              <BigText>E</BigText>
            </TextContainer>
            <TextContainer>
              <BigText>T</BigText>
            </TextContainer>
            <TextContainer>
              <BigText>C</BigText>
            </TextContainer>
            <TextContainer>
              <BigText>A</BigText>
            </TextContainer>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-20 flex w-[100vw] flex-col items-center overflow-hidden ">
          <div>
            <Heading className="text-center">Meet the Team</Heading>
            <p className="-tracking-[ -0.9px] mt-[24px] max-w-[421px] text-center text-[1.125rem] font-[400] leading-[30.6px]">
              We are a platform dedicated to helping people get rid of dist and
              wellbeing through
            </p>
          </div>

          <div className="mt-10 flex grid-cols-3 justify-center gap-[24px]  md:grid md:flex-wrap">
            <TeamCard
              image="/images/about/team.svg"
              name="Chinedu Ofor"
              position="CTO • GetCare"
            />
            <TeamCard
              image="/images/about/team.svg"
              name="Chinedu Ofor"
              position="CTO • GetCare"
            />
            <TeamCard
              image="/images/about/team.svg"
              name="Chinedu Ofor"
              position="CTO • GetCare"
            />
            <TeamCard
              image="/images/about/team.svg"
              name="Chinedu Ofor"
              position="CTO • GetCare"
            />
            <TeamCard
              image="/images/about/team.svg"
              name="Chinedu Ofor"
              position="CTO • GetCare"
            />
            <TeamCard
              image="/images/about/team.svg"
              name="Chinedu Ofor"
              position="CTO • GetCare"
            />
          </div>
        </div>
      </section>
      <section className="relative mt-20 w-[100%] justify-center px-[24px] lg:mt-60 lg:flex">
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
                  <p className="mx-auto mb-20 max-w-[26.3125rem] text-center text-lg/[170%] -tracking-[0.9px] text-primary-100 lg:text-left">
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
                <div className="relative mx-auto h-[294.66px] w-[345px] md:mx-0 md:h-[683px] md:w-[434px] lg:-mt-[200px] ">
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
    </main>
  );
}

export default About;
