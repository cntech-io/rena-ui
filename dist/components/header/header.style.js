"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const headerStyle = (props) => react_native_1.StyleSheet.create({
    root: Object.assign({ alignItems: 'center' }, props.style),
    title: Object.assign({}, props.titleStyle),
});
exports.default = headerStyle;
