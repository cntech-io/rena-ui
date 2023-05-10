import React, { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { Direction, Fill, Size } from '../style';
type FlexProps = {
    direction?: Direction;
    fill?: Fill;
    children?: ReactNode;
    style?: ViewStyle | ViewStyle[];
    paddingSize: Size;
};
declare const Flex: (props: FlexProps) => React.JSX.Element;
export default Flex;
export type { FlexProps };
