/// <reference types="react" />
import { ImageSourcePropType, TextInputProps, ViewStyle } from "react-native";
type InputProps = {
    style?: ViewStyle;
    inputProps?: TextInputProps;
    iconSource?: ImageSourcePropType;
    placeholder?: string;
    value: string;
    label?: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
    borderColor?: string;
    labelColor?: string;
};
declare const Input: (props: InputProps) => JSX.Element;
export default Input;
export type { InputProps };
