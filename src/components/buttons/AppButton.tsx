import { View, Text, TouchableOpacity, StyleSheet, TextStyle } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColors } from "../../styles/colors";
interface AppButtonProps {
    onPress: () => void;
    title: string;
    backgroundColor?: string;
    textColor?: string;
    style?: TextStyle;
    styleTitle?: TextStyle;
    disabled?: boolean;

}

const AppButton : React.FC<AppButtonProps>=({ 
  onPress,
  title,
  backgroundColor = AppColors.primary,
  textColor = AppColors.white,
  style,
  styleTitle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? AppColors.disabledGray : backgroundColor,
        },
        style
      ]}
      disabled={disabled}
    >
      <AppText varient="bold" style={[styles.textTitle, { color: textColor }]}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: vs(40),
    backgroundColor: "blue",
    borderRadius: s(25),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textTitle: {
    fontSize: s(16),
  },
});
