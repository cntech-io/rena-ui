import { ReactNode } from "react";
import { LayoutChangeEvent, ViewStyle } from "react-native";
import { Direction, PaddingSize, Position } from "../../theme/theme.type";

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
