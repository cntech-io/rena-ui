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
const Icon_1 = __importDefault(require("../icon/Icon"));
const icon_button_style_1 = __importDefault(require("./icon-button.style"));
const IconButton = (props) => {
    const { onPress, onLongPress } = props, iconProps = __rest(props, ["onPress", "onLongPress"]);
    const _style = (0, icon_button_style_1.default)(iconProps);
    return (<react_native_1.TouchableOpacity style={_style.root} onPress={onPress} onLongPress={onLongPress}>
      <Icon_1.default {...iconProps}/>
    </react_native_1.TouchableOpacity>);
};
exports.default = IconButton;
