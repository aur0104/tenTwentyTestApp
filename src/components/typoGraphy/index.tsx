import React from "react";
import { Text, TextProps } from "react-native";
import fonts from "@config/fonts";
import styles from "./styles";
import { ITypography, TTextType } from "@config/interfaces";
import { AppColors } from "@config/appColor";
const stylesTyped = styles as Record<TTextType, any>;
const Typography: React.FC<ITypography & TextProps> = ({
  type,
  color = AppColors.darkBlue,
  fontWeight,
  style,
  textAlign,
  children = "",
  textProps,
  ...rest
}) => {
  return (
    <Text
      style={[
        stylesTyped[type],
        color && { color: color },
        fontWeight && { fontFamily: fonts.FONT_FAMILIES[`${fontWeight}`] },
        textAlign && { textAlign: textAlign },
        style,
      ]}
      {...rest}
      {...textProps}
    >
      {children}
    </Text>
  );
};

export default React.memo(Typography);
