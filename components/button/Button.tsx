import React from "react";
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { Size } from "../style";
import buttonStyle from "./button.style";
import Text from "../text/Text";

type ButtonProps = {
  onPress: () => void;
  onLongPress?: () => void;
  style?: ViewStyle;
  label: string;
  bold?: boolean;
  textSize?: Size;
  textStyle?: TextStyle;
};

const Button = (props: ButtonProps) => {
  const { onLongPress, onPress, label, bold, textSize, ...styleProps } = props;
  const _style = buttonStyle(styleProps);
  return (
    <TouchableOpacity
      style={_style.root}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={_style.text} bold={bold || true} size={textSize || "md"}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

export type { ButtonProps };
