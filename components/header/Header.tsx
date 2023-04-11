import React from "react";
import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native/types";
import Flex from "../flex/Flex";
import Icon from "../icon/Icon";
import Spacer from "../spacer/Spacer";
import { HeaderLayout, Size } from "../style";
import Text from "../text/Text";
import headerStyle from "./header.style";

type HeaderProps = {
  headerLayout: HeaderLayout;
  paddingSize: Size;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  title?: string;
  iconSize?: Size;
  iconSources: ImageSourcePropType[];
};

const Header = (props: HeaderProps) => {
  const {
    headerLayout,
    paddingSize,
    iconSize,
    iconSources,
    title,
    ...styleProps
  } = props;
  const _style = headerStyle(styleProps);
  switch (headerLayout) {
    case "buttons-only":
      return (
        <Flex
          fill="fill"
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Icon size={iconSize || "md"} source={iconSources[0]} />
          <Spacer />
          <Icon size={iconSize || "md"} source={iconSources[1]} />
        </Flex>
      );
    case "left-button-only":
      return (
        <Flex
          fill="fill"
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Icon size={iconSize || "md"} source={iconSources[0]} />
          <Spacer />
        </Flex>
      );
    case "right-button-only":
      return (
        <Flex
          fill="fill"
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Spacer />
          <Icon size={iconSize || "md"} source={iconSources[0]} />
        </Flex>
      );
    case "title-only":
      return (
        <Flex
          fill="fill"
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Spacer />
          <Text style={_style.title} size="lg" bold>
            {title || ""}
          </Text>
          <Spacer />
        </Flex>
      );
    case "title-left-button-together":
      return (
        <Flex
          fill="fill"
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Icon size={iconSize || "md"} source={iconSources[0]} />
          <Spacer />
          <Text style={_style.title} size="lg" bold>
            {title || ""}
          </Text>
          <Spacer />
          <Icon isPlaceholder size={iconSize || "md"} source={0} />
        </Flex>
      );
    case "title-right-button-together":
      return (
        <Flex
          fill="fill"
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Icon isPlaceholder size={iconSize || "md"} source={0} />
          <Spacer />
          <Text style={_style.title} size="lg" bold>
            {title || ""}
          </Text>
          <Spacer />
          <Icon size={iconSize || "md"} source={iconSources[0]} />
        </Flex>
      );
    case "title-buttons-together":
      return (
        <Flex
          fill="fill"
          style={_style.root}
          paddingSize={paddingSize}
          direction={"row"}
        >
          <Icon size={iconSize || "md"} source={iconSources[0]} />
          <Spacer />
          <Text style={_style.title} size="lg" bold>
            {title || ""}
          </Text>
          <Spacer />
          <Icon size={iconSize || "md"} source={iconSources[1]} />
        </Flex>
      );
    default:
      return <Flex paddingSize={paddingSize} direction="row" fill="fill" />;
  }
};

export default Header;

export type { HeaderProps };
