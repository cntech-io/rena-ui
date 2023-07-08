import React from "react";
import Flex from "../flex/Flex";
import Button from "../button/Button";
import { ButtonGroupProps } from "./button-group.props";
import defaultTheme from "../../theme/default";
import { ScrollView } from "react-native";

const ButtonGroup = (props: ButtonGroupProps) => {
  if (props.scrollable) {
    return (
      <Flex paddingSize={defaultTheme.buttonGroupContainerPadding}>
        {props.titleComponent}
        <Flex
          direction={props.direction}
          paddingSize={props.paddingSize || defaultTheme.flexPaddingSize}
          marginSize={props.marginSize || defaultTheme.flexMarginSize}
        >
          <ScrollView
            horizontal={props.direction?.includes("row") ? true : false}
          >
            {props.buttonPropsArray.map((item) => (
              <Button key={item.label} {...item} />
            ))}
          </ScrollView>
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex paddingSize={defaultTheme.buttonGroupContainerPadding}>
      {props.titleComponent}
      <Flex
        direction={props.direction}
        paddingSize={props.paddingSize || defaultTheme.flexPaddingSize}
        marginSize={props.marginSize || defaultTheme.flexMarginSize}
      >
        {props.buttonPropsArray.map((item) => (
          <Button key={item.label} {...item} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ButtonGroup;

export type { ButtonGroupProps };
