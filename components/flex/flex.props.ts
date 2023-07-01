import { ReactNode } from "react";
import { LayoutChangeEvent, ViewStyle } from "react-native";
import {
  Direction,
  MarginSize,
  PaddingSize,
  Position,
} from "../../theme/theme.type";

export type FlexProps = {
  direction?: Direction;
  fill?: boolean;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  paddingSize: PaddingSize;
  marginSize?: MarginSize;
  position?: Position;
  onLayout?: (event: LayoutChangeEvent) => void;
};

export type FlexStyleProps = Partial<Omit<FlexProps, "children" | "onLayout">>;
