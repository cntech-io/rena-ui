import { ViewStyle } from 'react-native';
import { Direction, Fill, Size } from '../style';
type Props = {
    direction?: Direction;
    fill?: Fill;
    style?: ViewStyle | ViewStyle[];
    paddingSize: Size;
};
declare const flexStyle: (props: Props) => {
    root: {
        flex: number | undefined;
        flexDirection: Direction;
        padding: number;
    } | {
        backfaceVisibility?: "visible" | "hidden" | undefined;
        backgroundColor?: import("react-native").ColorValue | undefined;
        borderBottomColor?: import("react-native").ColorValue | undefined;
        borderBottomEndRadius?: number | undefined;
        borderBottomLeftRadius?: number | undefined;
        borderBottomRightRadius?: number | undefined;
        borderBottomStartRadius?: number | undefined;
        borderBottomWidth?: number | undefined;
        borderColor?: import("react-native").ColorValue | undefined;
        borderEndColor?: import("react-native").ColorValue | undefined;
        borderLeftColor?: import("react-native").ColorValue | undefined;
        borderLeftWidth?: number | undefined;
        borderRadius?: number | undefined;
        borderRightColor?: import("react-native").ColorValue | undefined;
        borderRightWidth?: number | undefined;
        borderStartColor?: import("react-native").ColorValue | undefined;
        borderStyle?: "solid" | "dotted" | "dashed" | undefined;
        borderTopColor?: import("react-native").ColorValue | undefined;
        borderTopEndRadius?: number | undefined;
        borderTopLeftRadius?: number | undefined;
        borderTopRightRadius?: number | undefined;
        borderTopStartRadius?: number | undefined;
        borderTopWidth?: number | undefined;
        borderWidth?: number | undefined;
        opacity?: number | undefined;
        elevation?: number | undefined;
        alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around" | undefined;
        alignItems?: import("react-native").FlexAlignType | undefined;
        alignSelf?: import("react-native").FlexAlignType | "auto" | undefined;
        aspectRatio?: string | number | undefined;
        borderEndWidth?: string | number | undefined;
        borderStartWidth?: string | number | undefined;
        bottom?: string | number | undefined;
        display?: "none" | "flex" | undefined;
        end?: string | number | undefined;
        flex: number | undefined;
        flexBasis?: string | number | undefined;
        flexDirection: Direction;
        rowGap?: number | undefined;
        gap?: number | undefined;
        columnGap?: number | undefined;
        flexGrow?: number | undefined;
        flexShrink?: number | undefined;
        flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
        height?: string | number | undefined;
        justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
        left?: string | number | undefined;
        margin?: string | number | undefined;
        marginBottom?: string | number | undefined;
        marginEnd?: string | number | undefined;
        marginHorizontal?: string | number | undefined;
        marginLeft?: string | number | undefined;
        marginRight?: string | number | undefined;
        marginStart?: string | number | undefined;
        marginTop?: string | number | undefined;
        marginVertical?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        overflow?: "visible" | "hidden" | "scroll" | undefined;
        padding: string | number;
        paddingBottom?: string | number | undefined;
        paddingEnd?: string | number | undefined;
        paddingHorizontal?: string | number | undefined;
        paddingLeft?: string | number | undefined;
        paddingRight?: string | number | undefined;
        paddingStart?: string | number | undefined;
        paddingTop?: string | number | undefined;
        paddingVertical?: string | number | undefined;
        position?: "absolute" | "relative" | undefined;
        right?: string | number | undefined;
        start?: string | number | undefined;
        top?: string | number | undefined;
        width?: string | number | undefined;
        zIndex?: number | undefined;
        direction?: "inherit" | "ltr" | "rtl" | undefined;
        shadowColor?: import("react-native").ColorValue | undefined;
        shadowOffset?: {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity?: number | undefined;
        shadowRadius?: number | undefined;
        transform?: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
        transformMatrix?: number[] | undefined;
        rotation?: number | undefined;
        scaleX?: number | undefined;
        scaleY?: number | undefined;
        translateX?: number | undefined;
        translateY?: number | undefined;
    } | {
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): ViewStyle | undefined;
        push(...items: ViewStyle[]): number;
        concat(...items: ConcatArray<ViewStyle>[]): ViewStyle[];
        concat(...items: (ViewStyle | ConcatArray<ViewStyle>)[]): ViewStyle[];
        join(separator?: string | undefined): string;
        reverse(): ViewStyle[];
        shift(): ViewStyle | undefined;
        slice(start?: number | undefined, end?: number | undefined): ViewStyle[];
        sort(compareFn?: ((a: ViewStyle, b: ViewStyle) => number) | undefined): ViewStyle[];
        splice(start: number, deleteCount?: number | undefined): ViewStyle[];
        splice(start: number, deleteCount: number, ...items: ViewStyle[]): ViewStyle[];
        unshift(...items: ViewStyle[]): number;
        indexOf(searchElement: ViewStyle, fromIndex?: number | undefined): number;
        lastIndexOf(searchElement: ViewStyle, fromIndex?: number | undefined): number;
        every<S extends ViewStyle>(predicate: (value: ViewStyle, index: number, array: ViewStyle[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: ViewStyle, index: number, array: ViewStyle[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: ViewStyle, index: number, array: ViewStyle[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: ViewStyle, index: number, array: ViewStyle[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: ViewStyle, index: number, array: ViewStyle[]) => U, thisArg?: any): U[];
        filter<S_1 extends ViewStyle>(predicate: (value: ViewStyle, index: number, array: ViewStyle[]) => value is S_1, thisArg?: any): S_1[];
        filter(predicate: (value: ViewStyle, index: number, array: ViewStyle[]) => unknown, thisArg?: any): ViewStyle[];
        reduce(callbackfn: (previousValue: ViewStyle, currentValue: ViewStyle, currentIndex: number, array: ViewStyle[]) => ViewStyle): ViewStyle;
        reduce(callbackfn: (previousValue: ViewStyle, currentValue: ViewStyle, currentIndex: number, array: ViewStyle[]) => ViewStyle, initialValue: ViewStyle): ViewStyle;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: ViewStyle, currentIndex: number, array: ViewStyle[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: ViewStyle, currentValue: ViewStyle, currentIndex: number, array: ViewStyle[]) => ViewStyle): ViewStyle;
        reduceRight(callbackfn: (previousValue: ViewStyle, currentValue: ViewStyle, currentIndex: number, array: ViewStyle[]) => ViewStyle, initialValue: ViewStyle): ViewStyle;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: ViewStyle, currentIndex: number, array: ViewStyle[]) => U_2, initialValue: U_2): U_2;
        find<S_2 extends ViewStyle>(predicate: (value: ViewStyle, index: number, obj: ViewStyle[]) => value is S_2, thisArg?: any): S_2 | undefined;
        find(predicate: (value: ViewStyle, index: number, obj: ViewStyle[]) => unknown, thisArg?: any): ViewStyle | undefined;
        findIndex(predicate: (value: ViewStyle, index: number, obj: ViewStyle[]) => unknown, thisArg?: any): number;
        fill(value: ViewStyle, start?: number | undefined, end?: number | undefined): ViewStyle[];
        copyWithin(target: number, start: number, end?: number | undefined): ViewStyle[];
        entries(): IterableIterator<[number, ViewStyle]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<ViewStyle>;
        includes(searchElement: ViewStyle, fromIndex?: number | undefined): boolean;
        flatMap<U_3, This = undefined>(callback: (this: This, value: ViewStyle, index: number, array: ViewStyle[]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
        flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
        [Symbol.iterator](): IterableIterator<ViewStyle>;
        [Symbol.unscopables]: {
            [x: number]: boolean | undefined;
            length?: boolean | undefined;
            toString?: boolean | undefined;
            toLocaleString?: boolean | undefined;
            pop?: boolean | undefined;
            push?: boolean | undefined;
            concat?: boolean | undefined;
            join?: boolean | undefined;
            reverse?: boolean | undefined;
            shift?: boolean | undefined;
            slice?: boolean | undefined;
            sort?: boolean | undefined;
            splice?: boolean | undefined;
            unshift?: boolean | undefined;
            indexOf?: boolean | undefined;
            lastIndexOf?: boolean | undefined;
            every?: boolean | undefined;
            some?: boolean | undefined;
            forEach?: boolean | undefined;
            map?: boolean | undefined;
            filter?: boolean | undefined;
            reduce?: boolean | undefined;
            reduceRight?: boolean | undefined;
            find?: boolean | undefined;
            findIndex?: boolean | undefined;
            fill?: boolean | undefined;
            copyWithin?: boolean | undefined;
            entries?: boolean | undefined;
            keys?: boolean | undefined;
            values?: boolean | undefined;
            includes?: boolean | undefined;
            flatMap?: boolean | undefined;
            flat?: boolean | undefined;
            [Symbol.iterator]?: boolean | undefined;
            readonly [Symbol.unscopables]?: boolean | undefined;
            at?: boolean | undefined;
        };
        at(index: number): ViewStyle | undefined;
        flex: number | undefined;
        flexDirection: Direction;
        padding: number;
    };
};
export default flexStyle;
