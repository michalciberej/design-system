import { ComponentPropsWithRef } from "react";
import { VariantProps } from "tailwind-variants";
import styles from "./Button.styles";

export type ButtonVariants = VariantProps<typeof styles>;

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariants;
} & ComponentPropsWithRef<"button">;
