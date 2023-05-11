import { Platform, StyleSheet, ViewStyle } from "react-native";
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
      height: Platform.OS == "android" ? Theme.fixedRow.sm : Theme.fixedRow.md,
      padding: Theme.padding.none,
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
      padding: Theme.padding.none,
    },
  });

export default inputStyle;
