import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { SearchIcon, CloseIcon } from "@assets/images";
import { AppColors } from "@config/appColor";
import styles from "./styles";
interface InputFieldProps extends TextInputProps {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onPrefixPress?: () => void;
  onSuffixPress?: () => void;
  showClearButton?: boolean;
  containerStyle?: any;
  inputStyle?: any;
}

const InputField: React.FC<InputFieldProps> = ({
  prefixIcon = <SearchIcon width={20} />,
  suffixIcon = <CloseIcon width={20} />,
  onPrefixPress,
  onSuffixPress,
  showClearButton = true,
  containerStyle,
  inputStyle,
  value,
  onChangeText,
  placeholder = "TV shows, movies and more",
  ...rest
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const handleTextChange = (text: string) => {
    setInputValue(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };
  const handleClearPress = () => {
    setInputValue("");
    if (onChangeText) {
      onChangeText("");
    }
    if (onSuffixPress) {
      onSuffixPress();
    }
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={onPrefixPress}
        disabled={!onPrefixPress}
      >
        {prefixIcon && prefixIcon}
      </TouchableOpacity>
      <TextInput
        style={[styles.input, inputStyle]}
        value={inputValue}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        placeholderTextColor={AppColors.gray}
        {...rest}
      />

      <TouchableOpacity style={styles.iconContainer} onPress={handleClearPress}>
        {suffixIcon && suffixIcon}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(InputField);
