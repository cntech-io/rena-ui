import { Platform } from "react-native";
import { DefaultTheme } from "./theme.type";

const defaultTheme: DefaultTheme = {
  headerIconSize: "MD",
  textPaddingSize: "SM",
  flexPaddingSize: "SM",
  flexDirection: "row",
  flexPosition: "NONE",
  iconPaddingSize: "SM",
  buttonTextSize: "MD",
  buttonHeight: "SM",
  buttonHorizontalPadding: "LG",
  buttonBorderRadius: "LG",
  buttonBackgroundColor: "black",
  buttonTextColor: "white",
  buttonTextPosition: "MIDDLE",
  headerTextSize: "LG",
  inputRowHeightSize: Platform.OS == "android" ? "SM" : "MD",
  inputRowHeightSizeWithTitle: Platform.OS == "android" ? "LG" : "MD",
  inputPaddingSize: "NONE",
  inputMinWidth: 200,
  inputBorderRadius: "LG",
  inputBorderWidth: 1,
  inputBorderColor: "black",
  inputPaddingLeftSize: "LG",
  inputContainerPadding: "SM",
  inputHitSlop: { top: 15, left: 15, right: 15, bottom: 15 },
};

export default defaultTheme;
