import Image from 'next/image';
import React from 'react';

import Container from '@/components/ui/Container';
import Heading from '@/components/ui/footer/Heading';
import Text from '@/components/ui/footer/Text';
import LogoBox from '@/components/ui/LogoBox';

function Footer() {
  return (
    <div className=" px-[24px] pb-[100px]">
      <Container className="flex flex-wrap justify-center">
        <div>
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-[18px]">
              <LogoBox />
              <Text className="md:mr-[113px] md:w-[268px]">
                Create an Unforgettable experience visiting Great Landmarks and
                fun locations in Ghana and Africa at large.
              </Text>
            </div>
            <div className="mt-[56px] flex w-[100%] flex-wrap md:mt-0 md:gap-[20px]">
              <div className="flex w-[50%] flex-col gap-[32px] md:w-[154px]">
                <Heading>PRODUCTS</Heading>
                <div className="flex flex-col gap-[16px]">
                  <Text>For Therapists</Text>
                  <Text>For Creatives</Text>
                  <Text>For You!</Text>
                </div>
              </div>
              <div className="flex w-[50%] flex-col gap-[32px] md:w-[154px]">
                <Heading>COMPANY</Heading>
                <div className="flex flex-col gap-[16px]">
                  <Text>About Us</Text>
                  <Text>Explore Minerals</Text>
                  <Text>Investment</Text>
                </div>
              </div>
              <div className="mt-[48px] flex w-[50%] flex-col gap-[32px] md:mt-0 md:w-[154px]">
                <Heading>SOCIAL MEDIA</Heading>
                <div className="flex flex-col gap-[16px]">
                  <Text>Facebook</Text>
                  <Text>Instagram</Text>
                  <Text>Linkedin</Text>
                </div>
              </div>
              <div className="mt-[48px] flex w-[50%] flex-col gap-[32px] md:mt-0 md:w-[154px]">
                <Heading>SUPPORT</Heading>
                <div className="flex flex-col gap-[16px]">
                  <Text>Contact Us</Text>
                  <Text>Faqs</Text>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex flex-wrap gap-[32px]">
            <div className="w-[100%] rounded-[16px] bg-neutral-100 pb-[40px] pl-[20px] pt-[32px] md:w-auto md:pb-[50px] md:pl-[24px] md:pr-[57px] md:pt-[35px]">
              <p className="max-w-[333px] text-[0.75rem] leading-[200%] -tracking-[0.12px] text-neutral-350 md:max-w-[826px] md:text-[1rem] md:-tracking-[0.16px]">
                To access and use all Apple Card features and products available
                only to Apple Card users, you must add Apple Card to Wallet on
                an iPhone or iPad that supports and has the latest version of
                iOS or iPadOS. <br className="mt-10 block lg:hidden" />
                Apple Card is subject to credit approval, available only for
                qualifying applicants in the United States, and issued by
                Goldman Sachs Bank.
              </p>
            </div>
            <div>
              <Image
                src="/images/home/qr-code.svg"
                height="180"
                width="180"
                alt=""
                className="hidden lg:block"
              />
            </div>
          </div>
        </div>
      </Container>

      <hr className="mt-[67px] bg-neutral-200" />
    </div>
  );
}

export default Footer;
