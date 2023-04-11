import React, { ReactNode } from "react";
import { Text as T, TextStyle } from "react-native";
import { Size } from "../style";
import textStyle from "./text.style";

type TextProps = {
  children?: ReactNode;
  size: Size;
  bold?: boolean;
  style?: TextStyle;
};

const Text = (props: TextProps) => {
  const { children, ...styleProps } = props;
  const _style = textStyle(styleProps);
  return <T style={_style.root}>{children}</T>;
};

export default Text;

export type { TextProps };
