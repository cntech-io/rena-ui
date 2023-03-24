import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Theme} from '../style';

type Props = {
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const buttonStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      backgroundColor: 'black',
      padding: Theme.padding.md,
      borderRadius: Theme.borderRadius.lg,
      alignItems: 'center',
      ...props.style,
    },
    text: {
      color: 'white',
      ...props.textStyle,
    },
  });

export default buttonStyle;
