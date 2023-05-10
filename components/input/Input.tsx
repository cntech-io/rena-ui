import React from "react";
import {
  ImageSourcePropType,
  TextInput,
  TextInputProps,
  ViewStyle,
} from "react-native";
import Flex from "../flex/Flex";
import Icon from "../icon/Icon";
import Label from "../label/Label";
import inputStyle from "./input.style";

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
        <Label style={_style.label} size="sm" bold>
          {label}
        </Label>
      )}
      <Flex fill paddingSize="md" direction="row" style={_style.wrapper}>
        {iconSource && <Icon source={iconSource} size="sm" />}
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
