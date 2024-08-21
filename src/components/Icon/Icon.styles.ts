import { tv } from "tailwind-variants";

export const styles = tv({
  variants: {
    variant: {
      primary: "fill-none stroke-blue-500",
      secondary: "fill none stroke-red-500",
      tertiary: "",
      success: "",
      warning: "",
      error: "",
    },
    outline: "fill-none",
    size: {},
  },
});
