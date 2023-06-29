import { Platform, StyleSheet, ViewStyle } from "react-native";
import { Size, Theme } from "../style";

type Props = {
  style?: ViewStyle | ViewStyle[];
  size: Size;
  borderColor?: string;
  labelColor?: string;
};

const inputStyle = (props: Props) => {
  const _style = Array.isArray(props.style)
    ? StyleSheet.flatten(props.style)
    : props.style;
  return StyleSheet.create({
    root: {
      height: Platform.OS == "android" ? Theme.fixedRow.sm : Theme.fixedRow.md,
      padding: Theme.padding.none,
      minWidth: 200,
      ..._style,
    },
    rootLabelled: {
      height: Platform.OS == "android" ? Theme.fixedRow.lg : Theme.fixedRow.md,
      padding: Theme.padding.none,
      minWidth: 200,
      ..._style,
    },
    wrapper: {
      borderWidth: 1,
      borderColor: props.borderColor ? props.borderColor : "black",
      borderRadius: _style?.borderRadius || Theme.borderRadius.lg,
      alignItems: "center",
      paddingLeft: Theme.padding.lg,
    },
    wrapperWithIcon: {
      borderWidth: 1,
      borderColor: props.borderColor ? props.borderColor : "black",
      borderRadius: _style?.borderRadius || Theme.borderRadius.lg,
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
};

export default inputStyle;
