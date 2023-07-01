import { StyleSheet } from "react-native";
import { ButtonStyleProps } from "./button.props";
import { flattenStyle } from "../../utils";
import { ThemeSystem } from "../../theme";
import defaultTheme from "../../theme/default";

const buttonStyle = (props: ButtonStyleProps) => {
  const _style = flattenStyle(props.style);

  const _textStyle = flattenStyle(props.textStyle);

  return StyleSheet.create({
    root: {
      height: ThemeSystem.fixedRowHeight[defaultTheme.buttonHeight],
      backgroundColor: defaultTheme.buttonBackgroundColor,
      paddingLeft: ThemeSystem.padding[defaultTheme.buttonHorizontalPadding],
      paddingRight: ThemeSystem.padding[defaultTheme.buttonHorizontalPadding],
      borderRadius:
        ThemeSystem.borderRadiusSize[defaultTheme.buttonBorderRadius],
      ...ThemeSystem.position[defaultTheme.buttonTextPosition],
      ..._style,
    },
    text: {
      color: defaultTheme.buttonTextColor,
      ..._textStyle,
    },
  });
};

export default buttonStyle;
