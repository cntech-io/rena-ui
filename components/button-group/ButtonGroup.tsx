import React from "react";
import Flex from "../flex/Flex";
import Button from "../button/Button";
import { ButtonGroupProps } from "./button-group.props";
import defaultTheme from "../../theme/default";

const ButtonGroup = (props: ButtonGroupProps) => {
  return (
    <Flex
      direction={props.direction}
      paddingSize={props.paddingSize || defaultTheme.flexPaddingSize}
      marginSize={props.marginSize || defaultTheme.flexMarginSize}
    >
      {props.buttonPropsArray.map((item) => (
        <Button {...item} />
      ))}
    </Flex>
  );
};

export default ButtonGroup;

export type { ButtonGroupProps };
