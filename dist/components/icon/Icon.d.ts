/// <reference types="react" />
import { ImageSourcePropType, ViewStyle } from 'react-native';
import { Size } from '../style';
type IconProps = {
    size: Size;
    source: ImageSourcePropType;
    style?: ViewStyle;
    isPlaceholder?: boolean;
};
declare const Icon: (props: IconProps) => JSX.Element;
export default Icon;
export type { IconProps };
