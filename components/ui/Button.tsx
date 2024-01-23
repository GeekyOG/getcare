import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'shrink-0',
    'rounded-[14px]',
    'text-center',
    'transition-colors',
    'delay-50',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        solid: [
          'bg-primary',
          'text-white',
          'hover:shadow-1',
          'disabled:opacity-20',
        ],
        outline: [],
        link: [
          'text-[#011f3d]',
          'text-base/[normal]',
          'tracking-3',
          'font-medium',
          'hover:text-primary',
          'hover:underline',
        ],
      },
      size: {
        sm: [
          'min-w-[12.25rem]',
          'h-full',
          'min-h-12',
          'text-sm/none',
          'p-[1.0625rem]',
          'font-medium',
          'tracking-2',
        ],
        md: [
          'min-w-[12.25rem]',
          'h-full',
          'min-h-14',
          'text-base/none',
          'p-[1.0625rem]',
          'font-medium',
          'tracking-3',
        ],
        lg: [
          'min-w-[12.25rem]',
          'h-full',
          'min-h-16',
          'text-base/none',
          'p-[16px]',
          'font-semibold',
          'tracking-3',
          'hover:font-medium',
        ],
      },
      underline: { true: ['hover:underline'], false: [] },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof button> {
  underline?: boolean;
  href?: string;
}

export function Button({
  className,
  variant,
  size,
  underline,
  ...props
}: ButtonProps) {
  return (
    <a
      className={twMerge(button({ variant, size, className, underline }))}
      {...props}
    >
      {props.children}
    </a>
  );
}
