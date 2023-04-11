import React from "react";
import Flex from "../flex/Flex";
import { Direction, Size } from "../style";
import Button, { ButtonProps } from "../button/Button";

type ButtonGroupProps = {
  buttonProps: ButtonProps[];
  paddingSize?: Size;
  direction?: Direction;
};

const ButtonGroup = (props: ButtonGroupProps) => {
  <Flex
    direction={props.direction || "row"}
    paddingSize={props.paddingSize || "md"}
  >
    {props.buttonProps.map((buttonProps) => (
      <Button {...buttonProps} />
    ))}
  </Flex>;
};

export default ButtonGroup;

export type { ButtonGroupProps };
