import React, { ReactNode } from "react";
import { TextStyle, Text as RNText } from "react-native";
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
  return <RNText style={_style.root}>{children}</RNText>;
};

export default Text;

export type { TextProps };
