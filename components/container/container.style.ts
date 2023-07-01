import { StyleSheet } from "react-native";
import { ContainerStyleProps } from "./container.props";
import { ThemeSystem } from "../../theme";

const containerStyle = (props: ContainerStyleProps) => {
  const _style = Array.isArray(props.style)
    ? StyleSheet.flatten(props.style)
    : props.style;
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
      height: ThemeSystem.headerHeight[props.headerSize!],
      justifyContent: "center",
    },
  });
};

export default containerStyle;
