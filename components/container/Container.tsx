import React, {ReactNode} from 'react';
import {SafeAreaView, View, ViewStyle} from 'react-native';
import {Size} from '../style';
import containerStyle from './container.style';

type ContainerProps = {
  safeAreaFlag?: boolean;
  children?: ReactNode;
  paddingSize: Size;
  headerSize: Size;
  style?: ViewStyle;
  headerComponent?: ReactNode;
};

type ContainerState = {};

export default class Container extends React.Component<
  ContainerProps,
  ContainerState
> {
  style = containerStyle({
    paddingSize: this.props.paddingSize,
    headerSize: this.props.headerSize,
  });

  render(): JSX.Element {
    const {children, safeAreaFlag, headerComponent, ...styleProps} = this.props;

    const _style = containerStyle(styleProps);

    if (safeAreaFlag) {
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
    return (
      <View style={_style.root}>
        <View style={_style.container}>{children}</View>
      </View>
    );
  }
}

export type { ContainerProps };
