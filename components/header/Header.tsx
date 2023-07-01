import React from "react";
import Flex from "../flex/Flex";
import Icon from "../icon/Icon";
import Spacer from "../spacer/Spacer";
import Text from "../text/Text";
import headerStyle from "./header.style";
import IconButton from "../icon-button/IconButton";
import LinearGradient from "react-native-linear-gradient";
import { HeaderProps } from "./header.props";
import defaultTheme from "../../theme/default";

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
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[1]}
        />
      ) : (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[1]}
        />
      );
      leftButton = onLeftButtonPress ? (
        <IconButton
          onPress={onLeftButtonPress}
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      ) : (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      );
      if (props.gradientColors && props.gradientColors.length > 1) {
        return (
          <LinearGradient colors={props.gradientColors} style={_style.gradient}>
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
          </LinearGradient>
        );
      }
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
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      ) : (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      );
      if (props.gradientColors && props.gradientColors.length > 1) {
        return (
          <LinearGradient colors={props.gradientColors} style={_style.gradient}>
            <Flex
              fill
              style={_style.root}
              paddingSize={paddingSize}
              direction={"row"}
            >
              {leftButton}
              <Spacer />
            </Flex>
          </LinearGradient>
        );
      }
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
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      ) : (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      );
      if (props.gradientColors && props.gradientColors.length > 1) {
        return (
          <LinearGradient colors={props.gradientColors} style={_style.gradient}>
            <Flex
              fill
              style={_style.root}
              paddingSize={paddingSize}
              direction={"row"}
            >
              <Spacer />
              {rightButton}
            </Flex>
          </LinearGradient>
        );
      }
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
      if (props.gradientColors && props.gradientColors.length > 1) {
        return (
          <LinearGradient colors={props.gradientColors} style={_style.gradient}>
            <Flex
              fill
              style={_style.root}
              paddingSize={paddingSize}
              direction={"row"}
            >
              <Spacer />
              <Text
                style={_style.title}
                size={defaultTheme.headerTextSize}
                bold
              >
                {title || ""}
              </Text>
              <Spacer />
            </Flex>
          </LinearGradient>
        );
      }
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Spacer />
          <Text style={_style.title} size={defaultTheme.headerTextSize} bold>
            {title || ""}
          </Text>
          <Spacer />
        </Flex>
      );
    case "title-left-button-together":
      leftButton = onLeftButtonPress ? (
        <IconButton
          onPress={onLeftButtonPress}
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      ) : (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      );
      if (props.gradientColors && props.gradientColors.length > 1) {
        return (
          <LinearGradient colors={props.gradientColors} style={_style.gradient}>
            <Flex
              fill
              style={_style.root}
              paddingSize={paddingSize}
              direction={"row"}
            >
              {leftButton}
              <Spacer />
              <Text
                style={_style.title}
                size={defaultTheme.headerTextSize}
                bold
              >
                {title || ""}
              </Text>
              <Spacer />
              <Icon
                isPlaceholder
                size={iconSize || defaultTheme.headerIconSize}
                source={0}
              />
            </Flex>
          </LinearGradient>
        );
      }
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          {leftButton}
          <Spacer />
          <Text style={_style.title} size={defaultTheme.headerTextSize} bold>
            {title || ""}
          </Text>
          <Spacer />
          <Icon
            isPlaceholder
            size={iconSize || defaultTheme.headerIconSize}
            source={0}
          />
        </Flex>
      );
    case "title-right-button-together":
      rightButton = onRightButtonPress ? (
        <IconButton
          onPress={onRightButtonPress}
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      ) : (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      );
      if (props.gradientColors && props.gradientColors.length > 1) {
        return (
          <LinearGradient colors={props.gradientColors} style={_style.gradient}>
            <Flex
              fill
              style={_style.root}
              paddingSize={paddingSize}
              direction={"row"}
            >
              <Icon
                isPlaceholder
                size={iconSize || defaultTheme.headerIconSize}
                source={0}
              />
              <Spacer />
              <Text
                style={_style.title}
                size={defaultTheme.headerTextSize}
                bold
              >
                {title || ""}
              </Text>
              <Spacer />
              {rightButton}
            </Flex>
          </LinearGradient>
        );
      }
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Icon
            isPlaceholder
            size={iconSize || defaultTheme.headerIconSize}
            source={0}
          />
          <Spacer />
          <Text style={_style.title} size={defaultTheme.headerTextSize} bold>
            {title || ""}
          </Text>
          <Spacer />
          {rightButton}
        </Flex>
      );
    case "title-buttons-together":
      rightButton = onRightButtonPress ? (
        <IconButton
          onPress={onRightButtonPress}
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[1]}
        />
      ) : (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[1]}
        />
      );
      leftButton = onLeftButtonPress ? (
        <IconButton
          onPress={onLeftButtonPress}
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      ) : (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          source={iconSources[0]}
        />
      );
      if (props.gradientColors && props.gradientColors.length > 1) {
        return (
          <LinearGradient colors={props.gradientColors} style={_style.gradient}>
            <Flex
              fill
              style={_style.root}
              paddingSize={paddingSize}
              direction={"row"}
            >
              {leftButton}
              <Spacer />
              <Text
                style={_style.title}
                size={defaultTheme.headerTextSize}
                bold
              >
                {title || ""}
              </Text>
              <Spacer />
              {rightButton}
            </Flex>
          </LinearGradient>
        );
      }
      return (
        <Flex
          fill
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          {leftButton}
          <Spacer />
          <Text style={_style.title} size={defaultTheme.headerTextSize} bold>
            {title || ""}
          </Text>
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
