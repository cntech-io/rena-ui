import { StyleSheet, TextStyle } from "react-native";
import { TextStyleProps } from "./text.props";
import defaultTheme from "../../theme/default";
import { flattenStyle } from "../../utils";
import { ThemeSystem } from "../../theme";

const textStyle = (props: TextStyleProps) => {
  const _style = flattenStyle(props.style);
  const _center: TextStyle = props.center ? { textAlign: "center" } : {};

  return StyleSheet.create({
    root: {
      fontSize: ThemeSystem.textSize[props.size!],
      alignItems: "center",
      fontWeight: props.bold ? "bold" : "normal",
      padding: ThemeSystem.padding[defaultTheme.textPaddingSize],
      margin:
        ThemeSystem.margin[props.marginSize || defaultTheme.textMarginSize],
      ..._center,
      ..._style,
    },
  });
};

export default textStyle;
