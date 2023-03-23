"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const style_1 = require("../style");
const iconButtonStyle = (props) => react_native_1.StyleSheet.create({
    root: {
        width: style_1.Theme.iconSize[props.size],
        height: style_1.Theme.iconSize[props.size],
    },
});
exports.default = iconButtonStyle;
