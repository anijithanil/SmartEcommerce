import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
interface AppTextInputProps {
  value:string;
  onChangeText:(text:string)=>void;
  placeholder:string;
  keyboardType?:"default"|"numeric"|"email-address";
  secureTextEntry?:boolean;
  style?:TextStyle;
}

const AppTextInput :React.FC<AppTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      style={[styles.input, style]}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  input: {
    height: vs(40),
    borderRadius: s(25),
    borderWidth: 1,
    borderColor: AppColors.boderColor,
    paddingHorizontal: s(16),
    backgroundColor: AppColors.white,
    fontSize: s(16),
    width: "100%",
    marginBottom: vs(10),
  },
});
