import { TextStyle, ViewStyle } from "react-native";
import { MarginSize, TextSize } from "../../theme/theme.type";

export type ButtonProps = {
  onPress: () => void;
  label: string;
  onLongPress?: () => void;
  style?: ViewStyle | ViewStyle[];
  bold?: boolean;
  textSize?: TextSize;
  textStyle?: TextStyle | TextStyle[];
  marginSize?: MarginSize;
};

export type ButtonStyleProps = Partial<
  Pick<ButtonProps, "textStyle" | "style" | "marginSize">
>;
