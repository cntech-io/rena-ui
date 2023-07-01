import { StyleSheet } from "react-native";
import { flattenStyle } from "../../utils";
import { InputStyleProps } from "./input.props";
import { ThemeSystem } from "../../theme";
import defaultTheme from "../../theme/default";

const inputStyle = (props: InputStyleProps) => {
  const _style = flattenStyle(props.style);
  const _inputStyle = flattenStyle(props.inputStyle);
  return StyleSheet.create({
    root: {
      height: defaultTheme.inputRowHeightSize,
      padding: defaultTheme.inputPaddingSize,
      minWidth: defaultTheme.inputMinWidth,
    },
    rootLabelled: {
      height: defaultTheme.inputRowHeightSizeWithTitle,
      padding: defaultTheme.inputPaddingSize,
      minWidth: defaultTheme.inputMinWidth,
    },
    wrapper: {
      borderWidth:
        props.borderStyle?.borderWidth || defaultTheme.inputBorderWidth,
      borderColor:
        props.borderStyle?.borderColor || defaultTheme.inputBorderColor,
      borderRadius:
        props.borderStyle?.borderRadius ||
        ThemeSystem.borderRadiusSize[defaultTheme.inputBorderRadius],
      alignItems: "center",
      paddingLeft: ThemeSystem.padding[defaultTheme.inputPaddingLeftSize],
      ..._style,
    },
    wrapperWithIcon: {
      borderWidth:
        props.borderStyle?.borderWidth || defaultTheme.inputBorderWidth,
      borderColor:
        props.borderStyle?.borderColor || defaultTheme.inputBorderColor,
      borderRadius:
        props.borderStyle?.borderRadius ||
        ThemeSystem.borderRadiusSize[defaultTheme.inputBorderRadius],
      alignItems: "center",
      ..._style,
    },
    input: {
      flex: 1,
      padding: ThemeSystem.padding[defaultTheme.inputPaddingSize],
      ..._inputStyle,
    },
  });
};

export default inputStyle;
