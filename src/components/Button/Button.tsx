import { forwardRef } from "react";
import styles from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps) => {
    const { children, variant, ref, ...rest } = props;

    return (
      <button ref={ref} className={styles({ ...variant })} {...rest}>
        {children}
      </button>
    );
  },
);

export default Button;
