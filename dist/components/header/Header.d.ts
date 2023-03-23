/// <reference types="react" />
import { ImageSourcePropType, TextStyle, ViewStyle } from 'react-native/types';
import { HeaderLayout, Size } from '../style';
type HeaderProps = {
    headerLayout: HeaderLayout;
    paddingSize: Size;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    title?: string;
    iconSize?: Size;
    iconSources: ImageSourcePropType[];
};
declare const Header: (props: HeaderProps) => JSX.Element;
export default Header;
