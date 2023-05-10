import React from "react";
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { Size } from "../style";
import buttonStyle from "./button.style";
import Label from "../label/Label";

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
      <Label style={_style.text} bold={bold || true} size={textSize || "md"}>
        {label}
      </Label>
    </TouchableOpacity>
  );
};

export default Button;

export type { ButtonProps };
