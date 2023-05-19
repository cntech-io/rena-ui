import React, { ReactNode } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { Direction, Position, Size } from "../style";
import flexStyle from "./flex.style";

type FlexProps = {
  direction?: Direction;
  fill?: boolean;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  paddingSize: Size;
  position?: Position;
  onLayout?: (event: LayoutChangeEvent) => void;
};

const Flex = (props: FlexProps) => {
  const { children, fill, onLayout, position, ...styleProps } = props;
  const _style = flexStyle(styleProps);
  const _fill: ViewStyle = fill ? { flex: 1 } : {};
  const _position: ViewStyle =
    position == "middle"
      ? { justifyContent: "center", alignItems: "center" }
      : {};
  return (
    <View onLayout={onLayout} style={[_style.root, _fill, _position]}>
      {children}
    </View>
  );
};

export default Flex;

export type { FlexProps };
