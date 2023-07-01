import { StyleSheet } from "react-native";
import { IconStyleProps } from "./icon.props";
import { flattenStyle } from "../../utils";
import { ThemeSystem } from "../../theme";
import defaultTheme from "../../theme/default";

const iconStyle = (props: IconStyleProps) => {
  const _style = flattenStyle(props.style);
  const _size = ThemeSystem.iconSize[props.size!];
  return StyleSheet.create({
    root: {
      width: _size,
      height: _size,
      justifyContent: "center",
      alignItems: "center",
      ..._style,
    },
    image: {
      resizeMode: "contain",
      width: _size - ThemeSystem.padding[defaultTheme.iconPaddingSize],
      height: _size - ThemeSystem.padding[defaultTheme.iconPaddingSize],
    },
  });
};

export default iconStyle;
