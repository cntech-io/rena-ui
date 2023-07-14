import { StyleSheet } from "react-native";
import { ContainerStyleProps } from "./container.props";
import { ThemeSystem } from "../../theme";
import { flattenStyle } from "../../utils";
import defaultTheme from "../../theme/default";

const containerStyle = (props: ContainerStyleProps) => {
  const _style = flattenStyle(props.style);
  return StyleSheet.create({
    root: {
      flex: 1,
      ..._style,
    },
    container: {
      padding: ThemeSystem.padding[props.paddingSize!],
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    headerContainer: {
      height:
        ThemeSystem.headerHeight[
          props.headerSize || defaultTheme.headerPaddingSize
        ],
      justifyContent: "center",
    },
  });
};

export default containerStyle;
