import { forwardRef } from "react";
import { iconStyles, mainStyles } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, children, icon, iconBefore, iconAfter, ...rest } = props;

  if (icon) {
    return (
      <button ref={ref} className={iconStyles({ variant })} {...rest}>
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
