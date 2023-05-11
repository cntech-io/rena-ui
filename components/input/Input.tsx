import React from "react";
import {
  ImageSourcePropType,
  TextInput,
  TextInputProps,
  ViewStyle,
} from "react-native";
import Flex from "../flex/Flex";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import inputStyle from "./input.style";
import { Size } from "../style";

type InputProps = {
  style?: ViewStyle;
  inputProps?: TextInputProps;
  iconSource?: ImageSourcePropType;
  placeholder?: string;
  value: string;
  label?: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  borderColor?: string;
  labelColor?: string;
  iconSize?: Size;
};

const Input = (props: InputProps) => {
  const {
    label,
    inputProps,
    iconSource,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    iconSize,
    ...styleProps
  } = props;

  const _style = inputStyle({ ...styleProps, size: label ? "lg" : "sm" });

  let _inputStyle, _textInputProps;
  if (inputProps) {
    const { style, ...textInputProps } = inputProps;
    _inputStyle = style;
    _textInputProps = textInputProps;
  }
  return (
    <Flex paddingSize="sm" style={_style.root}>
      {label && (
        <Text style={_style.label} size="sm" bold>
          {label}
        </Text>
      )}
      <Flex fill paddingSize="sm" direction="row" style={_style.wrapper}>
        {iconSource && (
          <Icon source={iconSource} size={iconSize ? iconSize : "md"} />
        )}
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
          style={[_style.input, _inputStyle]}
          {..._textInputProps}
        />
      </Flex>
    </Flex>
  );
};

export default Input;

export type { InputProps };
