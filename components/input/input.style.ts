import {StyleSheet, ViewStyle} from 'react-native';
import {Size, Theme} from '../style';

type Props = {
  style?: ViewStyle;
  size: Size;
};

const inputStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      height: Theme.fixedRow[props.size],
      ...props.style,
    },
    wrapper: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: Theme.borderRadius.lg,
      alignItems: 'center',
    },
    label: {
      paddingLeft: Theme.padding.lg,
    },
    input: {
      flex: 1,
    },
  });

export default inputStyle;
