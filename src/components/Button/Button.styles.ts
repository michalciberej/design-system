import { tv } from "tailwind-variants";

const styles = tv({
  base: "rounded-1 border-none bg-red-400 px-[15px] py-[11px]",
  variants: {
    variant: {
      primary: "bg-blue-500",
      secondary: "bg-red-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default styles;
