import { StyleSheet, ViewStyle } from "react-native";
import { Size, Theme } from "../style";

type Props = {
  style?: ViewStyle;
  size: Size;
  borderColor?: string;
  labelColor?: string;
};

const inputStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      height: Theme.fixedRow[props.size],
      ...props.style,
    },
    wrapper: {
      borderWidth: 1,
      borderColor: props.borderColor ? props.borderColor : "black",
      borderRadius: Theme.borderRadius.lg,
      alignItems: "center",
    },
    label: {
      color: props.labelColor ? props.labelColor : "black",
      paddingLeft: Theme.padding.lg,
    },
    input: {
      flex: 1,
    },
  });

export default inputStyle;
