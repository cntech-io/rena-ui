"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const style_1 = require("../style");
const inputStyle = (props) => react_native_1.StyleSheet.create({
    root: Object.assign({ height: style_1.Theme.fixedRow[props.size] }, props.style),
    wrapper: {
        borderWidth: 1,
        borderColor: props.borderColor ? props.borderColor : "black",
        borderRadius: style_1.Theme.borderRadius.lg,
        alignItems: "center",
    },
    label: {
        color: props.labelColor ? props.labelColor : "black",
        paddingLeft: style_1.Theme.padding.lg,
    },
    input: {
        flex: 1,
    },
});
exports.default = inputStyle;
