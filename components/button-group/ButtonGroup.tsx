import React from "react";
import Flex from "../flex/Flex";
import Button from "../button/Button";
import { ButtonGroupProps } from "./button-group.props";
import defaultTheme from "../../theme/default";

const ButtonGroup = (props: ButtonGroupProps) => {
  <Flex
    direction={props.direction}
    paddingSize={props.paddingSize || defaultTheme.flexPaddingSize}
  >
    {props.buttonPropsArray.map((item) => (
      <Button {...item} />
    ))}
  </Flex>;
};

export default ButtonGroup;

export type { ButtonGroupProps };
