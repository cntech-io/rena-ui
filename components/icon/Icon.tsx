import React from "react";
import { Image, ImageSourcePropType, ViewStyle } from "react-native";
import Flex from "../flex/Flex";
import iconStyle from "./icon.style";
import { IconProps } from "./icon.props";
import defaultTheme from "../../theme/default";

const Icon = (props: IconProps) => {
  const { source, isPlaceholder, ...styleProps } = props;
  const _style = iconStyle(styleProps);
  const _isPlaceholder = props.isPlaceholder ? { opacity: 0 } : {};

  return (
    <Flex
      paddingSize={defaultTheme.flexPaddingSize}
      style={[_style.root, _isPlaceholder]}
    >
      <Image style={_style.image} source={source} />
    </Flex>
  );
};

export default Icon;

export type { IconProps };
