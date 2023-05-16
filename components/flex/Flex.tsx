import React, { ReactNode } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { Direction, Size } from "../style";
import flexStyle from "./flex.style";

type FlexProps = {
  direction?: Direction;
  fill?: boolean;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  paddingSize: Size;
  onLayout?: (event: LayoutChangeEvent) => void;
};

const Flex = (props: FlexProps) => {
  const { children, fill, onLayout, ...styleProps } = props;
  const _style = flexStyle(styleProps);
  const _fill = fill ? { flex: 1 } : {};
  return <View onLayout={onLayout} style={[_style.root, _fill]}>{children}</View>;
};

export default Flex;

export type { FlexProps };
