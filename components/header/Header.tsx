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

  const renderLeftComponent = (hasButton: boolean) => {
    if (!hasButton) {
      return (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          isPlaceholder={true}
        />
      );
    }
    return onLeftButtonPress ? (
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
  };

  const renderRightComponent = (hasButton: boolean) => {
    if (!hasButton) {
      return (
        <Icon
          size={iconSize || defaultTheme.headerIconSize}
          isPlaceholder={true}
        />
      );
    }
    return onRightButtonPress ? (
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
  };

  const renderBody = (
    hasLeftButton: boolean,
    hasRightButton: boolean,
    hasTitle: boolean
  ) => {
    const _middleComponent = hasTitle ? (
      <Text style={_style.title} size={defaultTheme.headerTextSize} bold>
        {title || ""}
      </Text>
    ) : (
      <Spacer />
    );

    if (props.gradientColors && props.gradientColors.length > 1) {
      return (
        <LinearGradient colors={props.gradientColors} style={_style.gradient}>
          <Flex
            fill
            marginSize="NONE"
            style={_style.root}
            paddingSize={paddingSize}
            direction={"row"}
          >
            {renderLeftComponent(hasLeftButton)}
            {_middleComponent}
            {renderRightComponent(hasRightButton)}
          </Flex>
        </LinearGradient>
      );
    }
    return (
      <Flex
        marginSize="NONE"
        fill
        style={_style.root}
        paddingSize={paddingSize}
        direction={"row"}
      >
        {renderLeftComponent(hasLeftButton)}
        {_middleComponent}
        {renderRightComponent(hasRightButton)}
      </Flex>
    );
  };

  switch (headerLayout) {
    case "buttons-only":
      return renderBody(true, true, false);
    case "left-button-only":
      return renderBody(true, false, false);
    case "right-button-only":
      return renderBody(false, true, false);
    case "title-only":
      return renderBody(false, false, true);
    case "title-left-button-together":
      return renderBody(true, false, true);
    case "title-right-button-together":
      return renderBody(false, true, true);
    case "title-buttons-together":
      return renderBody(true, true, true);
    default:
      return renderBody(false, false, false);
  }
};

export default Header;

export type { HeaderProps };
