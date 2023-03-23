import {StyleSheet, ViewStyle} from 'react-native';
import {Size, Theme} from '../style';

type Props = {
  paddingSize: Size;
  headerSize: Size;
  style?: ViewStyle;
};

const containerStyle = (props: Props) =>
  StyleSheet.create({
    root: {
      flex: 1,
      ...props.style,
    },
    container: {
      padding: Theme.padding[props.paddingSize],
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    headerContainer: {
      height: Theme.headerHeight[props.headerSize],
      justifyContent: 'center',
    },
  });

export default containerStyle;
