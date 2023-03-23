import React from 'react';
import {Image, ImageSourcePropType, ViewStyle} from 'react-native';
import Flex from '../flex/Flex';
import {Size, Theme} from '../style';
import iconStyle from './icon.style';

type IconProps = {
  size: Size;
  source: ImageSourcePropType;
  style?: ViewStyle;
  isPlaceholder?: boolean;
};

const Icon = (props: IconProps) => {
  const {source, isPlaceholder, ...styleProps} = props;
  const _style = iconStyle(styleProps);
  return (
    <Flex
      paddingSize="sm"
      style={[_style.root, isPlaceholder ? Theme.placeholder : {}]}>
      <Image style={_style.image} source={source} />
    </Flex>
  );
};

export default Icon;

export type {IconProps};
