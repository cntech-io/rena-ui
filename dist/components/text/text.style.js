"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const style_1 = require("../style");
const textStyle = (props) => react_native_1.StyleSheet.create({
    root: Object.assign({ fontSize: style_1.Theme.textSize[props.size], alignItems: 'center', fontWeight: props.bold ? 'bold' : 'normal', padding: style_1.Theme.padding.sm }, props.style),
});
exports.default = textStyle;
