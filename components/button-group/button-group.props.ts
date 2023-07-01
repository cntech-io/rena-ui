import { Direction, PaddingSize } from "../../theme/theme.type";
import { ButtonProps } from "../button/button.props";

export type ButtonGroupProps = {
  buttonPropsArray: ButtonProps[];
  paddingSize?: PaddingSize;
  direction?: Direction;
};
