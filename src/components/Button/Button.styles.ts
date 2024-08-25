import { tv } from "tailwind-variants";

const base =
  "rounded-1 flex items-center justify-center duration-300 gap-2 max-w-content transition-all font-main disabled:bg-input-disabled-light disabled:text-input-text-disabled-light disabled:dark:text-input-text-disabled-dark dark:disabled:bg-input-disabled-dark hover:enabled:shadow-lg-light dark:hover:enabled:shadow-lg-dark disabled:stroke-input-text-disabled-light dark:disabled:stroke-input-text-disabled-dark disabled:cursor-not-allowed ";

export const mainStyles = tv({
  base: `px-[15px] py-[10px] [&>svg]:aspect-square [&>svg]:w-4 ${base}`,
  variants: {
    variant: {
      primary:
        "dark:text-primary-text-light bg-primary-light dark:bg-primary-dark dark:text-white",
      secondary:
        "text-secondary-text-light dark:text-secondary-text-dark bg-secondary-light dark:bg-secondary-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const iconStyles = tv({
  base: `enabled:ring-border-light dark:enabled:ring-border-dark bg-transparent p-[10px] enabled:ring-1 enabled:ring-inset hover:enabled:ring-2 hover:enabled:ring-primary-light dark:hover:enabled:ring-primary-dark ${base}`,
  variants: {
    variant: {
      default:
        "[&>svg]:enabled:stroke-border-light [&>svg]:dark:enabled:stroke-border-dark [&>svg]:enabled:hover:stroke-primary-light [&>svg]:dark:enabled:hover:stroke-primary-dark",
    },
    size: {
      small: "h-8 w-8 [&>svg]:aspect-square [&>svg]:w-3.5",
      large: "h-10 w-10 [&>svg]:aspect-square [&>svg]:w-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "large",
  },
});
