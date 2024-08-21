import { VariantProps } from "tailwind-variants";
import { iconStyles, mainStyles } from "./Button.styles";

export type ButtonVariants = VariantProps<
  typeof mainStyles | typeof iconStyles
>;

type BaseButtonProps = {
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export type ButtonProps = BaseButtonProps & ButtonVariants;
