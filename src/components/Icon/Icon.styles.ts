import { tv } from "tailwind-variants";

export const styles = tv({
  base: "fill-none transition-all disabled:stroke-inherit dark:disabled:stroke-inherit",
  variants: {
    variant: {
      default: "enabled:stroke-inherit dark:enabled:stroke-inherit",
      primary:
        "enabled:stroke-primary-text-light dark:enabled:stroke-primary-text-dark",
      secondary:
        "enabled:stroke-secondary-text-light dark:enabled:stroke-secondary-text-dark",
      tertiary:
        "enabled:stroke-tertiary-text-light dark:enabled:stroke-tertiary-text-dark",
      success: "enabled:stroke-success dark:enabled:stroke-success-emphasis",
      warning: "enabled:stroke-warning dark:enabled:stroke-warning-emphasis",
      error: "enabled:stroke-error dark:enabled:stroke-error-emphasis",
    },
    size: {
      xs: "",
      sm: "",
      lg: "",
      xl: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});
