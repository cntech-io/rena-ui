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
const Flex_1 = __importDefault(require("../flex/Flex"));
const Icon_1 = __importDefault(require("../icon/Icon"));
const Spacer_1 = __importDefault(require("../spacer/Spacer"));
const Text_1 = __importDefault(require("../text/Text"));
const header_style_1 = __importDefault(require("./header.style"));
const Header = (props) => {
    const { headerLayout, paddingSize, iconSize, iconSources, title } = props, styleProps = __rest(props, ["headerLayout", "paddingSize", "iconSize", "iconSources", "title"]);
    const _style = (0, header_style_1.default)(styleProps);
    switch (headerLayout) {
        case 'buttons-only':
            return (<Flex_1.default fill="fill" style={_style.root} paddingSize={paddingSize} direction={'row'}>
          <Icon_1.default size={iconSize || 'md'} source={iconSources[0]}/>
          <Spacer_1.default />
          <Icon_1.default size={iconSize || 'md'} source={iconSources[1]}/>
        </Flex_1.default>);
        case 'left-button-only':
            return (<Flex_1.default fill="fill" style={_style.root} paddingSize={paddingSize} direction={'row'}>
          <Icon_1.default size={iconSize || 'md'} source={iconSources[0]}/>
          <Spacer_1.default />
        </Flex_1.default>);
        case 'right-button-only':
            return (<Flex_1.default fill="fill" style={_style.root} paddingSize={paddingSize} direction={'row'}>
          <Spacer_1.default />
          <Icon_1.default size={iconSize || 'md'} source={iconSources[0]}/>
        </Flex_1.default>);
        case 'title-only':
            return (<Flex_1.default fill="fill" style={_style.root} paddingSize={paddingSize} direction={'row'}>
          <Spacer_1.default />
          <Text_1.default style={_style.title} size="lg" bold>
            {title || ''}
          </Text_1.default>
          <Spacer_1.default />
        </Flex_1.default>);
        case 'title-left-button-together':
            return (<Flex_1.default fill="fill" style={_style.root} paddingSize={paddingSize} direction={'row'}>
          <Icon_1.default size={iconSize || 'md'} source={iconSources[0]}/>
          <Spacer_1.default />
          <Text_1.default style={_style.title} size="lg" bold>
            {title || ''}
          </Text_1.default>
          <Spacer_1.default />
          <Icon_1.default isPlaceholder size={iconSize || 'md'} source={0}/>
        </Flex_1.default>);
        case 'title-right-button-together':
            return (<Flex_1.default fill="fill" style={_style.root} paddingSize={paddingSize} direction={'row'}>
          <Icon_1.default isPlaceholder size={iconSize || 'md'} source={0}/>
          <Spacer_1.default />
          <Text_1.default style={_style.title} size="lg" bold>
            {title || ''}
          </Text_1.default>
          <Spacer_1.default />
          <Icon_1.default size={iconSize || 'md'} source={iconSources[0]}/>
        </Flex_1.default>);
        case 'title-buttons-together':
            return (<Flex_1.default fill="fill" style={_style.root} paddingSize={paddingSize} direction={'row'}>
          <Icon_1.default size={iconSize || 'md'} source={iconSources[0]}/>
          <Spacer_1.default />
          <Text_1.default style={_style.title} size="lg" bold>
            {title || ''}
          </Text_1.default>
          <Spacer_1.default />
          <Icon_1.default size={iconSize || 'md'} source={iconSources[1]}/>
        </Flex_1.default>);
        default:
            return <Flex_1.default paddingSize={paddingSize} direction="row" fill="fill"/>;
    }
};
exports.default = Header;
