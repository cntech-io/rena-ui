import React, { ReactNode } from "react";
import { SafeAreaView, View, ViewStyle } from "react-native";
import { Size } from "../style";
import containerStyle from "./container.style";
import LinearGradient from "react-native-linear-gradient";

type ContainerProps = {
  safeAreaFlag?: boolean;
  children?: ReactNode;
  paddingSize: Size;
  headerSize: Size;
  style?: ViewStyle;
  headerComponent?: ReactNode;
  gradientColors?: string[];
};

type ContainerState = {};

export default class Container extends React.Component<
  ContainerProps,
  ContainerState
> {
  style = containerStyle({
    paddingSize: this.props.paddingSize,
    headerSize: this.props.headerSize,
    style: this.props.style,
  });

  render(): JSX.Element {
    const { children, safeAreaFlag, headerComponent, ...styleProps } =
      this.props;

    const _style = containerStyle(styleProps);

    if (safeAreaFlag) {
      if (this.props.gradientColors && this.props.gradientColors.length > 1) {
        <LinearGradient colors={this.props.gradientColors} style={_style.root}>
          <SafeAreaView style={[_style.safeArea]}>
            {headerComponent && (
              <View style={_style.headerContainer}>{headerComponent}</View>
            )}
            <View style={_style.container}>{children}</View>
          </SafeAreaView>
        </LinearGradient>;
      }
      return (
        <View style={_style.root}>
          <SafeAreaView style={[_style.safeArea]}>
            {headerComponent && (
              <View style={_style.headerContainer}>{headerComponent}</View>
            )}
            <View style={_style.container}>{children}</View>
          </SafeAreaView>
        </View>
      );
    }
    if (this.props.gradientColors && this.props.gradientColors.length > 1) {
      <LinearGradient colors={this.props.gradientColors} style={_style.root}>
        <View style={_style.container}>{children}</View>
      </LinearGradient>;
    }
    return (
      <View style={_style.root}>
        <View style={_style.container}>{children}</View>
      </View>
    );
  }
}

export type { ContainerProps };
