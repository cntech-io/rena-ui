import { TextInputProps, TextStyle, ViewStyle } from "react-native";

export type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle | ViewStyle[];
  inputProps?: TextInputProps;
  inputStyle?: TextStyle;
  placeholder?: string;
  secureTextEntry?: boolean;
  borderStyle?: ViewStyle;
  rightComponent?: React.JSX.Element;
  leftComponent?: React.JSX.Element;
  titleComponent?: React.JSX.Element;
};
