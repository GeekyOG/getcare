import Image from 'next/image';
import React from 'react';

import CallToAction from '@/components/ui/CallToAction';
import ContactCard from '@/components/ui/contact/ContactCard';
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';

function Contact() {
  return (
    <main className="-mt-10 flex min-h-screen flex-col items-center justify-between">
      <section className="w-full bg-secondary-50 pt-20 ">
        <div className=" mb-[127px]">
          <div className="px-[24px] lg:px-0">
            <Heading className="mx-auto text-center">
              Get in touch, we
              <br className="block md:hidden" /> are never far from you ❤️.
            </Heading>
          </div>
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
      <CallToAction className="-top-[308px] -mb-[308px]" />
    </main>
  );
}

export default Contact;
