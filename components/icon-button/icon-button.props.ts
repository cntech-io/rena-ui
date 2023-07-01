import { IconProps } from "../icon/icon.props";

export type IconButtonProps = {
  onPress: () => void;
  onLongPress?: () => void;
} & IconProps;

export type IconButtonStyleProps = Partial<
  Pick<IconButtonProps, "size" | "style">
>;
