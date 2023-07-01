import { ImageSourcePropType, ViewStyle } from "react-native";
import { IconSize } from "../../theme/theme.type";

export type IconProps = {
  size: IconSize;
  source?: ImageSourcePropType;
  style?: ViewStyle | ViewStyle[];
  isPlaceholder?: boolean;
};

export type IconStyleProps = Partial<
  Omit<IconProps, "source" | "isPlaceholder">
>;
