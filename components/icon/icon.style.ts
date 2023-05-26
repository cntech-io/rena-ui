import { StyleSheet, ViewStyle } from "react-native";
import { Size, Theme } from "../style";

type Props = {
  size: Size;
  style?: ViewStyle | ViewStyle[];
};

const iconStyle = (props: Props) => {
  const _style = Array.isArray(props.style)
    ? StyleSheet.flatten(props.style)
    : props.style;
  return StyleSheet.create({
    root: {
      width: Theme.iconSize[props.size],
      height: Theme.iconSize[props.size],
      justifyContent: "center",
      alignItems: "center",
      ..._style,
    },
    image: {
      resizeMode: "contain",
      width: Theme.iconSize[props.size] - 4,
      height: Theme.iconSize[props.size] - 4,
    },
  });
};

export default iconStyle;
