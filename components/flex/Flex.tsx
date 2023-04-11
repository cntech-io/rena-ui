import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import {Direction, Fill, Size} from '../style';
import flexStyle from './flex.style';

type FlexProps = {
  direction?: Direction;
  fill?: Fill;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  paddingSize: Size;
};

const Flex = (props: FlexProps) => {
  const {children, ...styleProps} = props;
  const _style = flexStyle(styleProps);
  return <View style={[_style.root]}>{children}</View>;
};

export default Flex;

export type { FlexProps };
