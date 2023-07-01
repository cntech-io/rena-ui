import { TextStyle } from "react-native";
import { ReactNode } from "react";
import { MarginSize, TextSize } from "../../theme/theme.type";

export type TextProps = {
  size: TextSize;
  children?: ReactNode;
  bold?: boolean;
  center?: boolean;
  style?: TextStyle | TextStyle[];
  marginSize?: MarginSize;
};

export type TextStyleProps = Partial<Omit<TextProps, "children">>;
