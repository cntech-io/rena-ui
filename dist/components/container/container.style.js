"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const style_1 = require("../style");
const containerStyle = (props) => react_native_1.StyleSheet.create({
    root: Object.assign({ flex: 1 }, props.style),
    container: {
        padding: style_1.Theme.padding[props.paddingSize],
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    headerContainer: {
        height: style_1.Theme.headerHeight[props.headerSize],
        justifyContent: 'center',
    },
});
exports.default = containerStyle;
