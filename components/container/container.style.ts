import { StyleSheet, ViewStyle } from "react-native";
import { Size, Theme } from "../style";

type Props = {
  paddingSize: Size;
  headerSize: Size;
  style?: ViewStyle | ViewStyle[];
};

const containerStyle = (props: Props) => {
  const _style = Array.isArray(props.style)
    ? StyleSheet.flatten(props.style)
    : props.style;
  return StyleSheet.create({
    root: {
      flex: 1,
      ..._style,
    },
    container: {
      padding: Theme.padding[props.paddingSize],
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    headerContainer: {
      height: Theme.headerHeight[props.headerSize],
      justifyContent: "center",
    },
  });
};

export default containerStyle;
