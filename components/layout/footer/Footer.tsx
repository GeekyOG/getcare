import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Heading from '@/components/ui/footer/Heading';
import Text from '@/components/ui/footer/Text';
import LogoBox from '@/components/ui/LogoBox';

function Footer() {
  return (
    <div className="pb-[100px]">
      <div className="flex flex-wrap justify-center px-[24px] ">
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
                  <Link href="/professionals">
                    <Text>For professionalss</Text>
                  </Link>
                  <Link href="/creatives">
                    <Text>For Creatives</Text>
                  </Link>

                  <Link href="">
                    <Text>For You!</Text>
                  </Link>
                </div>
              </div>
              <div className="flex w-[50%] flex-col gap-[32px] md:w-[154px]">
                <Heading>COMPANY</Heading>
                <div className="flex flex-col gap-[16px]">
                  <Link href="/about-us">
                    <Text>About Us</Text>
                  </Link>
                  <Link href="">
                    <Text>Explore Minerals</Text>
                  </Link>
                  <Link href="">
                    <Text>Investment</Text>
                  </Link>
                </div>
              </div>
              <div className="mt-[48px] flex w-[50%] flex-col gap-[32px] md:mt-0 md:w-[154px]">
                <Heading>SOCIAL MEDIA</Heading>
                <div className="flex flex-col gap-[16px]">
                  <Link href="">
                    <Text>Facebook</Text>
                  </Link>
                  <Link href="">
                    <Text>Instagram</Text>
                  </Link>
                  <Link href="">
                    <Text>Linkedin</Text>
                  </Link>
                </div>
              </div>
              <div className="mt-[48px] flex w-[50%] flex-col gap-[32px] md:mt-0 md:w-[154px]">
                <Heading>SUPPORT</Heading>
                <div className="flex flex-col gap-[16px]">
                  <Link href="/contact-us">
                    <Text>Contact Us</Text>
                  </Link>
                  <Link href="/faqs">
                    <Text>Faqs</Text>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 flex flex-wrap gap-[32px]">
            <div className="w-[100%] rounded-[16px] bg-neutral-100 pb-[40px] pl-[20px] pt-[32px] md:w-auto md:pb-[50px] md:pl-[24px] md:pr-[57px] md:pt-[35px] lg:flex-none">
              <p className="max-w-[333px] text-[0.75rem] leading-[200%] -tracking-[0.12px] text-neutral-350 md:max-w-[826px] md:text-[1rem] md:-tracking-[0.16px]">
                To access and use all Apple Card features and products available
                only to Apple Card users, you must add Apple Card to Wallet on
                an iPhone or iPad that supports and has the latest version of
                iOS or iPadOS. <span className="mt-10 block lg:hidden"></span>
                Apple Card is subject to credit approval, available only for
                qualifying applicants in the United States, and issued by
                Goldman Sachs Bank.
              </p>
            </div>
            <div className="hidden flex-none lg:block">
              <Image
                src="/images/home/qr-code.svg"
                height="180"
                width="180"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-[67px] bg-neutral-200" />
    </div>
  );
}

export default Footer;
