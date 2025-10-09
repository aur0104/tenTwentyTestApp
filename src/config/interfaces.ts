import { TextProps, TextStyle } from "react-native";
type TFontWeight = "BOLD" | "SEMI_BOLD" | "MEDIUM" | "REGULAR";
export type TTextAlign = "left" | "right" | "center";

export type TTextType =
  | "SIXTEENMEDIUM"
  | "SIXTEENREGULAR"
  | "SIXTEENBOLD"
  | "SIXTEENSEMIBOLD"
  | "FOURTEENBOLD"
  | "FOURTEENMEDIUM"
  | "FOURTEENREGULAR"
  | "FOURTEENSEMIBOLD"
  | "THIRTEENBOLD"
  | "THIRTEENMEDIUM"
  | "THIRTEENREGULAR"
  | "THIRTEENSEMIBOLD"
  | "TWELVEBOLD"
  | "TWELVEREGULAR"
  | "TWELVESEMIBOLD"
  | "ELEVENBOLD"
  | "ELEVENREGULAR"
  | "ELEVENSEMIBOLD"
  | "TENBOLD"
  | "TENREGULAR"
  | "TENSEMIBOLD";

export interface ITypography extends TextProps {
  type: TTextType;
  color?: TextStyle["color"];
  fontWeight?: TFontWeight;
  textAlign?: TTextAlign;
  textProps?: TextProps;
  children?: string | string[];
}
