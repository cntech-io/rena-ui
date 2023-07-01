import { StyleSheet } from "react-native";
import { ThemeSystem } from "../../theme";
import { IconButtonStyleProps } from "./icon-button.props";

const iconButtonStyle = (props: IconButtonStyleProps) => {
  return StyleSheet.create({
    root: {
      width: ThemeSystem.iconSize[props.size!],
      height: ThemeSystem.iconSize[props.size!],
    },
  });
};

export default iconButtonStyle;
