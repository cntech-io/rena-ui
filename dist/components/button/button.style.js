"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const style_1 = require("../style");
const buttonStyle = (props) => react_native_1.StyleSheet.create({
    root: Object.assign({ backgroundColor: 'black', padding: style_1.Theme.padding.md, borderRadius: style_1.Theme.borderRadius.lg, alignItems: 'center' }, props.style),
    text: Object.assign({ color: 'white' }, props.textStyle),
});
exports.default = buttonStyle;
