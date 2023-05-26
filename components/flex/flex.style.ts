import { StyleSheet, ViewStyle } from "react-native";
import { Direction, Position, Size, Theme } from "../style";

type Props = {
  direction?: Direction;
  fill?: boolean;
  paddingSize: Size;
  position?: Position;
  style?: ViewStyle | ViewStyle[];
};

const flexStyle = (props: Props) => {
  const _position: ViewStyle =
    props.position == "middle"
      ? { justifyContent: "center", alignItems: "center" }
      : {};
  const _fill: ViewStyle = props.fill ? { flex: 1 } : {};
  const _style = Array.isArray(props.style)
    ? StyleSheet.flatten(props.style)
    : props.style;

  return StyleSheet.create({
    root: {
      flexDirection: props.direction,
      padding: Theme.padding[props.paddingSize],
      ..._position,
      ..._fill,
      ..._style,
    },
  });
};

export default flexStyle;
