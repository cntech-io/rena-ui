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
const container_style_1 = __importDefault(require("./container.style"));
class Container extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.style = (0, container_style_1.default)({
            paddingSize: this.props.paddingSize,
            headerSize: this.props.headerSize,
        });
    }
    render() {
        const _a = this.props, { children, safeAreaFlag, headerComponent } = _a, styleProps = __rest(_a, ["children", "safeAreaFlag", "headerComponent"]);
        const _style = (0, container_style_1.default)(styleProps);
        if (safeAreaFlag) {
            return (<react_native_1.View style={_style.root}>
          <react_native_1.SafeAreaView style={[_style.safeArea]}>
            {headerComponent && (<react_native_1.View style={_style.headerContainer}>{headerComponent}</react_native_1.View>)}
            <react_native_1.View style={_style.container}>{children}</react_native_1.View>
          </react_native_1.SafeAreaView>
        </react_native_1.View>);
        }
        return (<react_native_1.View style={_style.root}>
        <react_native_1.View style={_style.container}>{children}</react_native_1.View>
      </react_native_1.View>);
    }
}
exports.default = Container;
