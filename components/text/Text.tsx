import React from "react";
import { Text as RNText } from "react-native";
import textStyle from "./text.style";
import { TextProps } from "./text.props";

const Text = (props: TextProps) => {
  const { children, ...textStyleProps } = props;
  const _style = textStyle(textStyleProps);
  return <RNText style={_style.root}>{children}</RNText>;
};

export default Text;
