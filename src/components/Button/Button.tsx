import { forwardRef } from "react";
import { iconStyles, mainStyles } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, children, icon, iconBefore, iconAfter, size, ...rest } = props;

  if (icon) {
    return (
      <button ref={ref} className={iconStyles({ size })} {...rest}>
        {icon}
      </button>
    );
  }

  return (
    <button ref={ref} className={mainStyles({ variant })} {...rest}>
      {iconBefore && iconBefore}
      {children}
      {iconAfter && iconAfter}
    </button>
  );
});

export default Button;
