import React from "react";
import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native";
import Flex from "../flex/Flex";
import Icon from "../icon/Icon";
import Spacer from "../spacer/Spacer";
import { HeaderLayout, Size } from "../style";
import Label from "../label/Label";
import headerStyle from "./header.style";
import IconButton from "../icon-button/IconButton";

type HeaderProps = {
  headerLayout: HeaderLayout;
  paddingSize: Size;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  title?: string;
  iconSize?: Size;
  iconSources: ImageSourcePropType[];
  onRightButtonPress?: () => void;
  onLeftButtonPress?: () => void;
};

const Header = (props: HeaderProps) => {
  const {
    headerLayout,
    paddingSize,
    iconSize,
    iconSources,
    onRightButtonPress,
    onLeftButtonPress,
    title,
    ...styleProps
  } = props;
  const _style = headerStyle(styleProps);
  let leftButton, rightButton;
  switch (headerLayout) {
    case "buttons-only":
      rightButton = onRightButtonPress ? (
        <IconButton
          onPress={onRightButtonPress}
          size={iconSize || "md"}
          source={iconSources[1]}
        />
      ) : (
        <Icon size={iconSize || "md"} source={iconSources[1]} />
      );
      leftButton = onLeftButtonPress ? (
        <IconButton
          onPress={onLeftButtonPress}
          size={iconSize || "md"}
          source={iconSources[0]}
        />
      ) : (
        <Icon size={iconSize || "md"} source={iconSources[0]} />
      );
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          {leftButton}
          <Spacer />
          {rightButton}
        </Flex>
      );
    case "left-button-only":
      leftButton = onLeftButtonPress ? (
        <IconButton
          onPress={onLeftButtonPress}
          size={iconSize || "md"}
          source={iconSources[0]}
        />
      ) : (
        <Icon size={iconSize || "md"} source={iconSources[0]} />
      );
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          {leftButton}
          <Spacer />
        </Flex>
      );
    case "right-button-only":
      rightButton = onRightButtonPress ? (
        <IconButton
          onPress={onRightButtonPress}
          size={iconSize || "md"}
          source={iconSources[0]}
        />
      ) : (
        <Icon size={iconSize || "md"} source={iconSources[0]} />
      );
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Spacer />
          {rightButton}
        </Flex>
      );
    case "title-only":
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Spacer />
          <Label style={_style.title} size="lg" bold>
            {title || ""}
          </Label>
          <Spacer />
        </Flex>
      );
    case "title-left-button-together":
      leftButton = onLeftButtonPress ? (
        <IconButton
          onPress={onLeftButtonPress}
          size={iconSize || "md"}
          source={iconSources[0]}
        />
      ) : (
        <Icon size={iconSize || "md"} source={iconSources[0]} />
      );
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          {leftButton}
          <Spacer />
          <Label style={_style.title} size="lg" bold>
            {title || ""}
          </Label>
          <Spacer />
          <Icon isPlaceholder size={iconSize || "md"} source={0} />
        </Flex>
      );
    case "title-right-button-together":
      rightButton = onRightButtonPress ? (
        <IconButton
          onPress={onRightButtonPress}
          size={iconSize || "md"}
          source={iconSources[0]}
        />
      ) : (
        <Icon size={iconSize || "md"} source={iconSources[0]} />
      );
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Icon isPlaceholder size={iconSize || "md"} source={0} />
          <Spacer />
          <Label style={_style.title} size="lg" bold>
            {title || ""}
          </Label>
          <Spacer />
          {rightButton}
        </Flex>
      );
    case "title-buttons-together":
      rightButton = onRightButtonPress ? (
        <IconButton
          onPress={onRightButtonPress}
          size={iconSize || "md"}
          source={iconSources[1]}
        />
      ) : (
        <Icon size={iconSize || "md"} source={iconSources[1]} />
      );
      leftButton = onLeftButtonPress ? (
        <IconButton
          onPress={onLeftButtonPress}
          size={iconSize || "md"}
          source={iconSources[0]}
        />
      ) : (
        <Icon size={iconSize || "md"} source={iconSources[0]} />
      );
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          {leftButton}
          <Spacer />
          <Label style={_style.title} size="lg" bold>
            {title || ""}
          </Label>
          <Spacer />
          {rightButton}
        </Flex>
      );
    default:
      return <Flex paddingSize={paddingSize} direction="row" fill />;
  }
};

export default Header;

export type { HeaderProps };
