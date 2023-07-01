import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native";

export type HeaderProps = {
  iconSources: ImageSourcePropType[];
  headerLayout: HeaderLayout;
  paddingSize: PaddingSize;
  style?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle | TextStyle[];
  title?: string;
  iconSize?: IconSize;
  onRightButtonPress?: () => void;
  onLeftButtonPress?: () => void;
  gradientColors?: string[];
};

export type HeaderStyleProps = Partial<
  Pick<HeaderProps, "style" | "titleStyle">
>;
