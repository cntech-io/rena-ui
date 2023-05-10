import React from "react";
import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native/types";
import { HeaderLayout, Size } from "../style";
type HeaderProps = {
    headerLayout: HeaderLayout;
    paddingSize: Size;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    title?: string;
    iconSize?: Size;
    iconSources: ImageSourcePropType[];
    onRightButtonPress?: () => void;
    onLeftButtonPress?: () => void;
};
declare const Header: (props: HeaderProps) => React.JSX.Element;
export default Header;
export type { HeaderProps };
