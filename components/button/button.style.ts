import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Theme } from "../style";

type Props = {
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
};

const buttonStyle = (props: Props) => {
  const _style = Array.isArray(props.style)
    ? StyleSheet.flatten(props.style)
    : props.style;

  const _textStyle = Array.isArray(props.textStyle)
    ? StyleSheet.flatten(props.textStyle)
    : props.textStyle;

  return StyleSheet.create({
    root: {
      height: Theme.fixedRow.sm,
      backgroundColor: "black",
      paddingLeft: Theme.padding.lg,
      paddingRight: Theme.padding.lg,
      borderRadius: Theme.borderRadius.lg,
      alignItems: "center",
      justifyContent: "center",
      ..._style,
    },
    text: {
      color: "white",
      ..._textStyle,
    },
  });
};

export default buttonStyle;
