"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Flex_1 = __importDefault(require("../flex/Flex"));
const Button_1 = __importDefault(require("../button/Button"));
const ButtonGroup = (props) => {
    <Flex_1.default direction={props.direction || "row"} paddingSize={props.paddingSize || "md"}>
    {props.buttonProps.map((buttonProps) => (<Button_1.default {...buttonProps}/>))}
  </Flex_1.default>;
};
exports.default = ButtonGroup;
