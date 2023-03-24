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
const Flex_1 = __importDefault(require("../flex/Flex"));
const Icon_1 = __importDefault(require("../icon/Icon"));
const Text_1 = __importDefault(require("../text/Text"));
const input_style_1 = __importDefault(require("./input.style"));
const Input = (props) => {
    const { label, inputProps, iconSource, placeholder, value, onChangeText, secureTextEntry } = props, styleProps = __rest(props, ["label", "inputProps", "iconSource", "placeholder", "value", "onChangeText", "secureTextEntry"]);
    const _style = (0, input_style_1.default)(Object.assign(Object.assign({}, styleProps), { size: label ? "lg" : "sm" }));
    let _inputStyle, _textInputProps;
    if (inputProps) {
        const { style } = inputProps, textInputProps = __rest(inputProps, ["style"]);
        _inputStyle = style;
        _textInputProps = textInputProps;
    }
    return (<Flex_1.default paddingSize="sm" style={_style.root}>
      {label && (<Text_1.default style={_style.label} size="sm" bold>
          {label}
        </Text_1.default>)}
      <Flex_1.default fill="fill" paddingSize="md" direction="row" style={_style.wrapper}>
        {iconSource && <Icon_1.default source={iconSource} size="sm"/>}
        <react_native_1.TextInput secureTextEntry={secureTextEntry} onChangeText={onChangeText} value={value} placeholder={placeholder} hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }} style={[_style.input, _inputStyle]} {..._textInputProps}/>
      </Flex_1.default>
    </Flex_1.default>);
};
exports.default = Input;
