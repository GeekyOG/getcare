'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import WaitlistFooter from '@/components/layout/footer/WaitlistFooter';
import Footer from '@/components/layout/footer/Footer';

function WhatFooter() {
  const pathname = usePathname();

  const getCurrentFooter = () => {
    if (pathname == '/waitlist/for-users') {
      return true;
    } else if (pathname == '/waitlist/for-professionals') {
      return true;
    } else if (pathname == '/waitlist/for-creatives') {
      return true;
    } else {
      return false;
    }
  };
  return <div> {getCurrentFooter() ? <WaitlistFooter /> : <Footer />} </div>;
}

export default WhatFooter;
