import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const flattenStyle = (
  style?: ViewStyle | ViewStyle[] | TextStyle | TextStyle[]
): ViewStyle | TextStyle => {
  if (!style) {
    return {};
  }
  if (Array.isArray(style)) {
    return StyleSheet.flatten(style);
  } else {
    return style;
  }
};

export default flattenStyle;
