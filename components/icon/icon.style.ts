import { StyleSheet, ViewStyle } from "react-native";
import { Size, Theme } from "../style";

type Props = {
  size: Size;
  style?: ViewStyle;
};

const iconStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      width: Theme.iconSize[props.size],
      height: Theme.iconSize[props.size],
      justifyContent: "center",
      alignItems: "center",
      ...props.style,
    },
    image: {
      resizeMode: "contain",
      width: Theme.iconSize[props.size] - 4,
      height: Theme.iconSize[props.size] - 4,
    },
  });

export default iconStyle;
