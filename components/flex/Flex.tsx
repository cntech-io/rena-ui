import React from "react";
import flexStyle from "./flex.style";
import { FlexProps } from "./flex.props";
import { View } from "react-native";

const Flex = (props: FlexProps) => {
  const { children, onLayout, ...styleProps } = props;
  const _style = flexStyle(styleProps);

  return (
    <View onLayout={onLayout} style={_style.root}>
      {children}
    </View>
  );
};

export default Flex;
