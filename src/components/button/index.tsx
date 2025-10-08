import Typography from "@components/typoGraphy";
import { ITypography, TTextType } from "@config/interfaces";
import React from "react";
import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { innerStyles, styles } from "./styles";
import { AppColors } from "@config/appColor";
type TButtonType = "PRIMARY" | "OUTLINE";
interface IButtonCustom extends TouchableOpacityProps {
  type: TButtonType;
  size?: TTextType;
  prefix?: React.ReactElement;
  suffix?: React.ReactElement;
  typographyProps?: ITypography;
  isLoading?: boolean;
}

const ButtonCustom = ({
  type,
  style,
  children,
  disabled = false,
  onPress,
  prefix,
  suffix,
  typographyProps,
  size = "FOURTEENSEMIBOLD",
  isLoading = false,
  ...rest
}: IButtonCustom) => {
  const textContent = typeof children === "string" ? children : "";
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.commonStyle,
        innerStyles.background[type],
        style,
        // eslint-disable-next-line react-native/no-inline-styles
        { opacity: disabled ? 0.5 : 1 },
      ]}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      <View style={styles.contentContainer}>
        {isLoading ? (
          <ActivityIndicator size={"small"} color={AppColors.darkPurple} />
        ) : (
          <>
            {prefix}
            <Typography
              type={size as TTextType}
              {...(typographyProps && { ...typographyProps })}
            >
              {textContent}
            </Typography>
            {suffix}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonCustom);
