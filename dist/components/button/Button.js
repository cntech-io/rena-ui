"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const button_style_1 = __importDefault(require("./button.style"));
const Text_1 = __importDefault(require("../text/Text"));
const Button = (props) => {
    const { onLongPress, onPress, label, bold, textSize } = props, styleProps = __rest(props, ["onLongPress", "onPress", "label", "bold", "textSize"]);
    const _style = (0, button_style_1.default)(styleProps);
    return (<react_native_1.TouchableOpacity style={_style.root} onPress={onPress} onLongPress={onLongPress}>
      <Text_1.default style={_style.text} bold={bold || true} size={textSize || "md"}>
        {label}
      </Text_1.default>
    </react_native_1.TouchableOpacity>);
};
exports.default = Button;
