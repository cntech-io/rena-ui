import {StyleSheet, TextStyle} from 'react-native';
import {Size, Theme} from '../style';

type Props = {
  style?: TextStyle;
  size: Size;
  bold?: boolean;
};

const textStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      fontSize: Theme.textSize[props.size],
      alignItems: 'center',
      fontWeight: props.bold ? 'bold' : 'normal',
      padding: Theme.padding.sm,
      ...props.style,
    },
  });

export default textStyle;
