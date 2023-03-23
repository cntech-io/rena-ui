import { ReactNode } from 'react';
import { TextStyle } from 'react-native';
import { Size } from '../style';
type TextProps = {
    children?: ReactNode;
    size: Size;
    bold?: boolean;
    style?: TextStyle;
};
declare const Text: (props: TextProps) => JSX.Element;
export default Text;
