import { StyleSheet, TextStyle } from "react-native";
import { Size, Theme } from "../style";

type Props = {
  style?: TextStyle | TextStyle[];
  size: Size;
  bold?: boolean;
  center?: boolean;
};

const textStyle = (props: Props) => {
  const _style = Array.isArray(props.style)
    ? StyleSheet.flatten(props.style)
    : props.style;
  const _center: TextStyle = props.center ? { textAlign: "center" } : {};
  return StyleSheet.create({
    root: {
      fontSize: Theme.textSize[props.size],
      alignItems: "center",
      fontWeight: props.bold ? "bold" : "normal",
      padding: Theme.padding.sm,
      ..._center,
      ..._style,
    },
  });
};

export default textStyle;
