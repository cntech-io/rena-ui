import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { HeaderHeightSize, PaddingSize } from "../../theme/theme.type";

export type ContainerProps = {
  safeAreaFlag?: boolean;
  children?: ReactNode;
  paddingSize: PaddingSize;
  headerSize?: HeaderHeightSize;
  style?: ViewStyle | ViewStyle[];
  headerComponent?: ReactNode;
  gradientColors?: string[];
};

export type ContainerStyleProps = Partial<
  Pick<ContainerProps, "style" | "headerSize" | "paddingSize">
>;

export type ContainerState = {};
