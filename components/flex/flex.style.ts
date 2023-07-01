import { StyleSheet, View, ViewStyle } from "react-native";
import { FlexStyleProps } from "./flex.props";
import { flattenStyle } from "../../utils";
import { ThemeSystem } from "../../theme";
import defaultTheme from "../../theme/default";

const flexStyle = (props: FlexStyleProps) => {
  const _position: ViewStyle =
    ThemeSystem.position[props.position || defaultTheme.flexPosition];
  const _fill: ViewStyle = props.fill ? { flex: 1 } : {};
  const _style = flattenStyle(props.style);

  return StyleSheet.create({
    root: {
      flexDirection: props.direction,
      padding: ThemeSystem.padding[props.paddingSize!],
      ..._position,
      ..._fill,
      ..._style,
    },
  });
};

export default flexStyle;
