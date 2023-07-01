import { Theme } from "./theme.type";

const ThemeSystem: Theme = {
  position: {
    NONE: {},
    MIDDLE: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
  padding: {
    NONE: 0,
    XS: 2,
    SM: 4,
    MD: 8,
    LG: 16,
  },
  margin: {
    NONE: 0,
    XS: 2,
    SM: 4,
    MD: 8,
    LG: 16,
  },
  headerHeight: {
    XS: 40,
    SM: 60,
    MD: 70,
    LG: 80,
  },
  iconSize: {
    XS: 20,
    SM: 30,
    MD: 40,
    LG: 50,
  },
  textSize: {
    XS: 11,
    SM: 15,
    MD: 19,
    LG: 25,
  },
  fixedRowHeight: {
    XS: 30,
    SM: 45,
    MD: 50,
    LG: 70,
  },
  borderRadiusSize: {
    NONE: 0,
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 32,
    XL: 64,
  },
};

export default ThemeSystem;
