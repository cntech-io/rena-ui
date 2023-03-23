"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const style_1 = require("../style");
const flexStyle = (props) => react_native_1.StyleSheet.create({
    root: Object.assign({ flex: props.fill === 'fill' ? 1 : undefined, flexDirection: props.direction, padding: style_1.Theme.padding[props.paddingSize] }, props.style),
});
exports.default = flexStyle;
