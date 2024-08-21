import { VariantProps } from "tailwind-variants";
import { styles } from "./Icon.styles";

export type IconVariantProps = VariantProps<typeof styles>;

export interface IconProps extends React.SVGAttributes<SVGElement> {
  variant?: Pick<IconVariantProps, "variant">;
  size?: Pick<IconVariantProps, "size">;
}
