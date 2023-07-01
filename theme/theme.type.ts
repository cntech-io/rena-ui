enum SizeEnum {
  NONE,
  XS,
  SM,
  MD,
  LG,
  XL,
  XXL,
}

type Direction = "column" | "row" | "row-reverse" | "column-reverse";

type Position = "middle" | undefined;

type HeaderLayout =
  | "title-only"
  | "title-buttons-together"
  | "title-left-button-together"
  | "title-right-button-together"
  | "right-button-only"
  | "left-button-only"
  | "buttons-only";

type Size = keyof typeof SizeEnum;

type PaddingSize = keyof Partial<Omit<typeof SizeEnum, "XL" | "XXL">>;
type MarginSize = keyof Partial<Omit<typeof SizeEnum, "XL" | "XXL">>;
type HeaderHeightSize = keyof Partial<
  Omit<typeof SizeEnum, "NONE" | "XL" | "XXL">
>;
type IconSize = keyof Partial<Omit<typeof SizeEnum, "NONE" | "XL" | "XXL">>;
type TextSize = keyof Partial<Omit<typeof SizeEnum, "NONE" | "XL" | "XXL">>;
type FixedRowHeight = keyof Partial<
  Omit<typeof SizeEnum, "NONE" | "XL" | "XXL">
>;

type BorderRadiusSize = keyof Partial<Omit<typeof SizeEnum, "XXL">>;

type Theme = {
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

type DefaultTheme = {
  textPaddingSize: `${PaddingSize}`;
  flexPaddingSize: `${PaddingSize}`;
  flexDirection: `${Direction}`;
  iconPaddingSize: `${PaddingSize}`;
  buttonTextSize: `${TextSize}`;
  buttonHeight: `${FixedRowHeight}`;
  buttonHorizontalPadding: `${PaddingSize}`;
  buttonBorderRadius: `${BorderRadiusSize}`;
  headerIconSize: `${IconSize}`;
  headerTextSize: `${TextSize}`;

};
