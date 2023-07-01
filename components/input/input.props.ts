import { TextInputProps, TextStyle, ViewStyle } from "react-native";
import { MarginSize } from "../../theme/theme.type";

interface BorderStyle {
  borderRadius: number;
  borderColor: string;
  borderWidth: number;
}

export type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle | ViewStyle[];
  inputProps?: TextInputProps;
  inputStyle?: TextStyle | TextStyle[];
  placeholder?: string;
  secureTextEntry?: boolean;
  borderStyle?: BorderStyle;
  rightComponent?: JSX.Element;
  leftComponent?: JSX.Element;
  titleComponent?: JSX.Element;
  marginSize?: MarginSize;
};

export type InputStyleProps = Partial<
  Pick<InputProps, "style" | "borderStyle" | "inputStyle" | "marginSize">
>;
