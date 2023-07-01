import { Platform } from "react-native";

const defaultTheme: DefaultTheme = {
  headerIconSize: "MD",
  textPaddingSize: "SM",
  flexPaddingSize: "SM",
  flexDirection: "row",
  iconPaddingSize: "SM",
  buttonTextSize: "MD",
  buttonHeight: "SM",
  buttonHorizontalPadding: "LG",
  buttonBorderRadius: "LG",
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
};

export default defaultTheme;
