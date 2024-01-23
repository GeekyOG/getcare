export default function HamburgerIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="64" height="64" rx="8" fill="#DFF6F5" />
      <path
        d="M43.9987 34H25.332"
        stroke="url(#paint0_linear_1379_12711)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 24H20"
        stroke="url(#paint1_linear_1379_12711)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 44H20"
        stroke="url(#paint2_linear_1379_12711)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1379_12711"
          x1="34.6654"
          y1="34"
          x2="34.6654"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07B6B0" />
          <stop offset="1" stopColor="#069D98" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1379_12711"
          x1="32"
          y1="24"
          x2="32"
          y2="25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07B6B0" />
          <stop offset="1" stopColor="#069D98" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1379_12711"
          x1="32"
          y1="44"
          x2="32"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07B6B0" />
          <stop offset="1" stopColor="#069D98" />
        </linearGradient>
      </defs>
    </svg>
  );
}
