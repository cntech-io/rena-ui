import { ViewStyle } from 'react-native/types';
type Size = 'none' | 'sm' | 'md' | 'lg';
type Direction = 'column' | 'row' | 'row-reverse' | 'column-reverse' | undefined;
type Fill = 'fill' | 'none' | undefined;
type HeaderLayout = 'title-only' | 'title-buttons-together' | 'title-left-button-together' | 'title-right-button-together' | 'right-button-only' | 'left-button-only' | 'buttons-only';
type theme = {
    padding: {
        [k in Size]: number;
    };
    headerHeight: {
        [k in Size]: number;
    };
    iconSize: {
        [k in Size]: number;
    };
    textSize: {
        [k in Size]: number | undefined;
    };
    borderRadius: {
        [k in Size]: number;
    };
    placeholder: ViewStyle;
    fixedRow: {
        [k in Size]: any;
    };
};
declare const Theme: theme;
export { Theme };
export type { Size, Direction, Fill, HeaderLayout };
