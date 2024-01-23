import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/Button';
import ContactCard from '@/components/ui/contact/ContactCard';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full bg-secondary-50 pt-20">
        <div className=" mb-[127px]">
          <Heading className="mx-auto text-center ">
            Get in touch, we
            <br className="block md:hidden" /> are never far from you ❤️.
          </Heading>

          <Container className="mt-[56.3px] flex flex-wrap justify-center gap-[26px] px-[24px] md:mt-40 md:px-0">
            <ContactCard
              subText="Speak to our friendly team."
              contact="hello@getcare.africa"
              text=" Send us a Mail"
              className="bg-[url('/images/contact/Message.png')]"
            />
            <ContactCard
              subText="Speak to our friendly team."
              contact="+234 - 701 - 5263 - 711"
              text="Put a Call Through"
              className="bg-[url('/images/contact/phone.png')]"
            />
            <ContactCard
              subText="Speak to our friendly team."
              contact="Click to talk to Support"
              text="Talk to Support"
              className="bg-[url('/images/contact/Chatmobile.png')] md:bg-[url('/images/contact/Chat.png')] "
            />
          </Container>
        </div>
      </section>
      <section>
        <div
          className="relative -mx-[8px] h-[913px]  w-[100vw] bg-cover bg-top pt-[40px]  md:h-[956px] md:w-[calc(100vw-17px)] md:pt-[100px]"
          style={{ backgroundImage: "url('/images/contact/map.png')" }}
        >
          <Container className="px-[24px]">
            <div
              className="mx-auto flex max-w-[530px] items-center gap-1 rounded-[16px] px-[20px] py-[8px]"
              style={{ background: 'rgba(255, 255, 255, 0.12)' }}
            >
              <div className="w-28px relative h-[28px] w-[28px] md:w-[32px]">
                <Image src="/images/contact/Discovery.png" alt="" fill />
              </div>
              <p className="leading-[28px] -tracking-[0.14] text-neutral md:leading-[36px] md:-tracking-[0.18px]">
                20, theQuad Office, layi Yusuf Crescent, Lekki, Lagos, Nigeria
              </p>
            </div>
          </Container>
        </div>
      </section>
      <section className="relative -top-[308px] -mb-[308px] w-[100%] justify-center px-[24px] lg:flex">
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
    </main>
  );
}

export default Contact;
