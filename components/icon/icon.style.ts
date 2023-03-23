import {StyleSheet, ViewStyle} from 'react-native';
import {Size, Theme} from '../style';

type Props = {
  size: Size;
  style?: ViewStyle;
};

const iconStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      width: Theme.iconSize[props.size],
      height: Theme.iconSize[props.size],
      ...props.style,
      backgroundColor: 'red',
    },
    image: {
      resizeMode: 'contain',
      width: Theme.iconSize[props.size] - 2 * Theme.padding.none,
      height: Theme.iconSize[props.size] - 2 * Theme.padding.none,
    },
  });

export default iconStyle;
