import React from "react";
import { TouchableOpacity } from "react-native";
import Icon, { IconProps } from "../icon/Icon";
import iconButtonStyle from "./icon-button.style";

type IconButtonProps = {
  onPress: () => void;
  onLongPress: () => void;
};

type Props = IconButtonProps & IconProps;

const IconButton = (props: Props) => {
  const { onPress, onLongPress, ...iconProps } = props;
  const _style = iconButtonStyle(iconProps);
  return (
    <TouchableOpacity
      style={_style.root}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon {...iconProps} />
    </TouchableOpacity>
  );
};

export default IconButton;

export type { IconButtonProps };
