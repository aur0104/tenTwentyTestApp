import React from "react";
import { View, TouchableOpacity } from "react-native";
import { BackIcon, ThreeDots } from "@assets/images";
import Typography from "../typoGraphy";
import styles from "./styles";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  containerStyle?: any;
  titleStyle?: any;
  subtitleStyle?: any;
}

const Header: React.FC<HeaderProps> = ({
  title = "The King's Man",
  subtitle = "In Theaters December 22, 2021",
  leftIcon = <BackIcon />,
  rightIcon = <ThreeDots />,
  onLeftPress,
  onRightPress,
  showLeftIcon = true,
  showRightIcon = true,
  containerStyle,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.leftSection}>
        {showLeftIcon && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onLeftPress}
            disabled={!onLeftPress}
          >
            {leftIcon}
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.centerSection}>
        {title && (
          <Typography
            type="SIXTEENBOLD"
            style={[styles.title, titleStyle]}
            textAlign="center"
          >
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            type="FOURTEENREGULAR"
            style={[styles.subtitle, subtitleStyle]}
            textAlign="center"
          >
            {subtitle}
          </Typography>
        )}
      </View>

      <View style={styles.rightSection}>
        {showRightIcon && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onRightPress}
            disabled={!onRightPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.memo(Header);
