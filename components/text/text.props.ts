import { TextStyle } from "react-native";
import { ReactNode } from "react";
import { TextSize } from "../../theme/theme.type";

export type TextProps = {
  size: TextSize;
  children?: ReactNode;
  bold?: boolean;
  center?: boolean;
  style?: TextStyle | TextStyle[];
};

export type TextStyleProps = Partial<Omit<TextProps, "children">>;
