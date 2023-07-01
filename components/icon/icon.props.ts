import { ImageSourcePropType, ViewStyle } from "react-native";

export type IconProps = {
  size: IconSize;
  source?: ImageSourcePropType;
  style?: ViewStyle | ViewStyle[];
  isPlaceholder?: boolean;
};

export type IconStyleProps = Partial<
  Omit<IconProps, "source" | "isPlaceholder">
>;
