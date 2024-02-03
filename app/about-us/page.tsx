import Image from 'next/image';
import React from 'react';

import BigText from '@/components/ui/about/BigText';
import TeamCard from '@/components/ui/about/TeamCard';
import Text from '@/components/ui/about/Text';
import TextContainer from '@/components/ui/about/TextContainer';
import CallToAction from '@/components/ui/CallToAction';
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
                  and wellbeing through professionals sessions, journaling,
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

          <div className="mt-10 flex w-[100vw] justify-center gap-[24px] overflow-scroll px-[24px] md:flex-wrap md:overflow-visible lg:w-auto lg:px-[100px]">
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
      <CallToAction className="mt-[100px] lg:mt-[308px]" />
    </main>
  );
}

export default About;
