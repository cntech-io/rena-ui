import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Theme } from "../style";

type Props = {
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const buttonStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      height: Theme.fixedRow.sm,
      backgroundColor: "black",
      paddingLeft: Theme.padding.lg,
      paddingRight: Theme.padding.lg,
      borderRadius: Theme.borderRadius.lg,
      alignItems: "center",
      justifyContent: "center",
      ...props.style,
    },
    text: {
      color: "white",
      ...props.textStyle,
    },
  });

export default buttonStyle;
