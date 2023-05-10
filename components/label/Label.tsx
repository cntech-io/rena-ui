import React, { ReactNode } from "react";
import { TextStyle, Text } from "react-native";
import { Size } from "../style";
import textStyle from "./label.style";

type LabelProps = {
  children?: ReactNode;
  size: Size;
  bold?: boolean;
  style?: TextStyle;
};

const Label = (props: LabelProps) => {
  const { children, ...styleProps } = props;
  const _style = textStyle(styleProps);
  return <Text style={_style.root}>{children}</Text>;
};

export default Label;

export type { LabelProps };
