"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const style_1 = require("../style");
const iconStyle = (props) => react_native_1.StyleSheet.create({
    root: Object.assign(Object.assign({ width: style_1.Theme.iconSize[props.size], height: style_1.Theme.iconSize[props.size] }, props.style), { backgroundColor: 'red' }),
    image: {
        resizeMode: 'contain',
        width: style_1.Theme.iconSize[props.size] - 2 * style_1.Theme.padding.none,
        height: style_1.Theme.iconSize[props.size] - 2 * style_1.Theme.padding.none,
    },
});
exports.default = iconStyle;
