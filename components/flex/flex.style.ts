import { StyleSheet, ViewStyle } from "react-native";
import { Direction, Size, Theme } from "../style";

type Props = {
  direction?: Direction;
  fill?: boolean;
  style?: ViewStyle | ViewStyle[];
  paddingSize: Size;
};

const flexStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      flex: props.fill ? 1 : undefined,
      flexDirection: props.direction,
      padding: Theme.padding[props.paddingSize],
      ...props.style,
    },
  });

export default flexStyle;
