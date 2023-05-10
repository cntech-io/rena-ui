import React from "react";
import { IconProps } from "../icon/Icon";
type IconButtonProps = {
    onPress: () => void;
    onLongPress?: () => void;
};
type Props = IconButtonProps & IconProps;
declare const IconButton: (props: Props) => React.JSX.Element;
export default IconButton;
export type { IconButtonProps };
