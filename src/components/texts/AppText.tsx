import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";

interface AppTextProps{
    children: string;
    style?: object;
    varient?: "medium" | "bold";
}

const AppText = ({ children,style,varient="medium",...rest }: AppTextProps) => {
  return <Text {...rest} style={[styles[varient],style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
    bold:{
        fontSize:s(18),
        color:AppColors.black,
    },
    medium:{
        fontSize:s(16),
        color:AppColors.black
    }
});
