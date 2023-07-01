import React from "react";
import { TextInput } from "react-native";
import Flex from "../flex/Flex";
import inputStyle from "./input.style";
import { InputProps } from "./input.props";
import defaultTheme from "../../theme/default";

const Input = (props: InputProps) => {
  const {
    leftComponent,
    rightComponent,
    titleComponent,
    inputProps,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    ...styleProps
  } = props;

  const _style = inputStyle({ ...styleProps });

  return (
    <Flex
      paddingSize={defaultTheme.inputContainerPadding}
      style={titleComponent ? _style.rootLabelled : _style.root}
    >
      {titleComponent}
      <Flex
        fill
        paddingSize={defaultTheme.inputContainerPadding}
        direction="row"
        style={leftComponent ? _style.wrapperWithIcon : _style.wrapper}
      >
        {leftComponent}
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
          style={[_style.input, props.inputStyle]}
          {...props.inputProps}
        />
      </Flex>
    </Flex>
  );
};

export default Input;

export type { InputProps };
