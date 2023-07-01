import { ReactNode } from "react";
import { LayoutChangeEvent, ViewStyle } from "react-native";

export type FlexProps = {
  direction?: Direction;
  fill?: boolean;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  paddingSize?: PaddingSize;
  position?: Position;
  onLayout?: (event: LayoutChangeEvent) => void;
};

export type FlexStyleProps = Partial<Omit<FlexProps, "children" | "onLayout">>;
