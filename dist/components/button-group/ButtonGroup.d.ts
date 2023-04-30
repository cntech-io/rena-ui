import { Direction, Size } from "../style";
import { ButtonProps } from "../button/Button";
type ButtonGroupProps = {
    buttonProps: ButtonProps[];
    paddingSize?: Size;
    direction?: Direction;
};
declare const ButtonGroup: (props: ButtonGroupProps) => void;
export default ButtonGroup;
export type { ButtonGroupProps };
