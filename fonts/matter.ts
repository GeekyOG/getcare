import localFont from 'next/font/local';

const matter = localFont({
  src: [
    {
      path: './Matter-Light.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Matter-LightItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './Matter-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Matter-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Matter-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Matter-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './Matter-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Matter-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './Matter-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Matter-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Matter-Heavy.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Matter-HeavyItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export default matter;
