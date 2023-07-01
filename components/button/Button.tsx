import React from "react";
import { TouchableOpacity } from "react-native";
import buttonStyle from "./button.style";
import Text from "../text/Text";
import { ButtonProps } from "./button.props";
import defaultTheme from "../../theme/default";

const Button = (props: ButtonProps) => {
  const { onLongPress, onPress, label, bold, textSize, ...styleProps } = props;
  const _style = buttonStyle(styleProps);
  return (
    <TouchableOpacity
      style={_style.root}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text
        style={_style.text}
        bold={bold || true}
        size={textSize || defaultTheme.buttonTextSize}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

export type { ButtonProps };
