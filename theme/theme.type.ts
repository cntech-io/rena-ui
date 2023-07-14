import { Insets } from "react-native";

enum SizeEnum {
  NONE,
  XS,
  SM,
  MD,
  LG,
  XL,
  XXL,
}

enum PositionEnum {
  NONE,
  MIDDLE,
}

export type Direction = "column" | "row" | "row-reverse" | "column-reverse";

export type HeaderLayout =
  | "title-only"
  | "title-buttons-together"
  | "title-left-button-together"
  | "title-right-button-together"
  | "right-button-only"
  | "left-button-only"
  | "buttons-only";

export type Size = keyof typeof SizeEnum;
export type Position = keyof typeof PositionEnum;

export type PaddingSize = keyof Partial<Omit<typeof SizeEnum, "XL" | "XXL">>;
export type MarginSize = keyof Partial<Omit<typeof SizeEnum, "XL" | "XXL">>;
export type HeaderHeightSize = keyof Partial<
  Omit<typeof SizeEnum, "NONE" | "XL" | "XXL">
>;
export type IconSize = keyof Partial<
  Omit<typeof SizeEnum, "NONE" | "XL" | "XXL">
>;
export type TextSize = keyof Partial<
  Omit<typeof SizeEnum, "NONE" | "XL" | "XXL">
>;
export type FixedRowHeight = keyof Partial<
  Omit<typeof SizeEnum, "NONE" | "XL" | "XXL">
>;

type BorderRadiusSize = keyof Partial<Omit<typeof SizeEnum, "XXL">>;

export type Theme = {
  position: { [k in Position]: object };
  padding: { [k in PaddingSize]: number };
  margin: { [k in MarginSize]: number };
  headerHeight: { [k in HeaderHeightSize]: number };
  iconSize: { [k in IconSize]: number };
  textSize: {
    [k in TextSize]: number;
  };
  fixedRowHeight: { [k in IconSize]: number };
  borderRadiusSize: { [k in BorderRadiusSize]: number };
};

export type DefaultTheme = {
  textPaddingSize: `${PaddingSize}`;
  headerPaddingSize: `${HeaderHeightSize}`;
  textMarginSize: `${MarginSize}`;
  flexPaddingSize: `${PaddingSize}`;
  flexDirection: `${Direction}`;
  flexPosition: `${Position}`;
  flexMarginSize: `${MarginSize}`;
  iconPaddingSize: `${PaddingSize}`;
  buttonTextSize: `${TextSize}`;
  buttonHeight: `${FixedRowHeight}`;
  buttonHorizontalPadding: `${PaddingSize}`;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  buttonTextPosition: `${Position}`;
  buttonBorderRadius: `${BorderRadiusSize}`;
  buttonMarginSize: `${MarginSize}`;
  buttonGroupContainerPadding: `${PaddingSize}`;
  headerIconSize: `${IconSize}`;
  headerTextSize: `${TextSize}`;
  inputRowHeightSize: `${FixedRowHeight}`;
  inputPaddingSize: `${PaddingSize}`;
  inputPaddingLeftSize: `${PaddingSize}`;
  inputMinWidth: number;
  inputBorderRadius: `${BorderRadiusSize}`;
  inputBorderWidth: number;
  inputBorderColor: string;
  inputContainerPadding: `${PaddingSize}`;
  inputHitSlop: Insets;
  inputMarginSize: `${MarginSize}`;
};
