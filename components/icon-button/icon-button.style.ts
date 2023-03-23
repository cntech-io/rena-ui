import {StyleSheet} from 'react-native';
import {Size, Theme} from '../style';

type Props = {
  size: Size;
};

const iconButtonStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      width: Theme.iconSize[props.size],
      height: Theme.iconSize[props.size],
    },
  });

export default iconButtonStyle;
