/// <reference types="react" />
import { TextStyle, ViewStyle } from "react-native";
import { Size } from "../style";
type ButtonProps = {
    onPress: () => void;
    onLongPress?: () => void;
    style?: ViewStyle;
    label: string;
    bold?: boolean;
    textSize?: Size;
    textStyle?: TextStyle;
};
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
