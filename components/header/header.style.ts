import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
  titleStyle?: TextStyle;
};

const headerStyle = (props: Props) =>
  StyleSheet.create({
    gradient: {
      flex: 1,
    },
    root: {
      alignItems: "center",
      ...props.style,
    },
    title: {
      ...props.titleStyle,
    },
  });

export default headerStyle;
