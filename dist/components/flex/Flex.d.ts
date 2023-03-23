import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { Direction, Fill, Size } from '../style';
type FlexProps = {
    direction?: Direction;
    fill?: Fill;
    children?: ReactNode;
    style?: ViewStyle | ViewStyle[];
    paddingSize: Size;
};
declare const Flex: (props: FlexProps) => JSX.Element;
export default Flex;
