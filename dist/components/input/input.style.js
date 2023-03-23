"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const style_1 = require("../style");
const inputStyle = (props) => react_native_1.StyleSheet.create({
    root: Object.assign({ height: style_1.Theme.fixedRow[props.size] }, props.style),
    wrapper: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: style_1.Theme.borderRadius.lg,
        alignItems: 'center',
    },
    label: {
        paddingLeft: style_1.Theme.padding.lg,
    },
    input: {
        flex: 1,
    },
});
exports.default = inputStyle;
