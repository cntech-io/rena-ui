import { ViewStyle } from "react-native/types";

type Size = "none" | "sm" | "md" | "lg";
type Direction =
  | "column"
  | "row"
  | "row-reverse"
  | "column-reverse"
  | undefined;
type HeaderLayout =
  | "title-only"
  | "title-buttons-together"
  | "title-left-button-together"
  | "title-right-button-together"
  | "right-button-only"
  | "left-button-only"
  | "buttons-only";

type theme = {
  padding: { [k in Size]: number };
  headerHeight: { [k in Size]: number };
  iconSize: { [k in Size]: number };
  textSize: { [k in Size]: number | undefined };
  borderRadius: { [k in Size]: number };
  placeholder: ViewStyle;
  fixedRow: { [k in Size]: any };
};

const Theme: theme = {
  padding: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
  },
  headerHeight: {
    none: 0,
    sm: 60,
    md: 70,
    lg: 80,
  },
  iconSize: {
    none: 0,
    sm: 20,
    md: 30,
    lg: 40,
  },
  textSize: {
    none: undefined,
    sm: 11,
    md: 15,
    lg: 19,
  },
  fixedRow: {
    none: 0,
    sm: 45,
    md: 50,
    lg: 70,
  },
  borderRadius: {
    none: 0,
    sm: 8,
    md: 16,
    lg: 32,
  },
  placeholder: { opacity: 0 },
};

export { Theme };

export type { Size, Direction, HeaderLayout };
