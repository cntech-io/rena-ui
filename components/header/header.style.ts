import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle | TextStyle[];
};

const headerStyle = (props: Props) => {
  const _style = Array.isArray(props.style)
    ? StyleSheet.flatten(props.style)
    : props.style;
  const _textStyle = Array.isArray(props.titleStyle)
    ? StyleSheet.flatten(props.titleStyle)
    : props.titleStyle;
  return StyleSheet.create({
    gradient: {
      flex: 1,
    },
    root: {
      alignItems: "center",
      ..._style,
    },
    title: {
      ..._textStyle,
    },
  });
};

export default headerStyle;
