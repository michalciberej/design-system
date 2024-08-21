import { tv } from "tailwind-variants";

const base = "rounded-1 flex items-center justify-center gap-2 max-w-content";

export const mainStyles = tv({
  base: `px-[15px] py-[10px] ${base}`,
  variants: {
    variant: {
      primary: "bg-primaryL dark:bg-primaryD",
      secondary: "bg-secondaryL dark:bg-secondaryD",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const iconStyles = tv({
  base: `p-[10px] ${base}`,
  variants: {
    variant: {
      primary: "bg-primaryL dark:bg-primaryD",
      secondary: "bg-primaryL dark:bg-primaryD",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
