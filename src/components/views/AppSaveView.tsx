import { Platform, StyleSheet, Text, View,StatusBar, ViewStyle } from "react-native";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../styles/colors";
import { IS_Android } from "../../constants/constants";

interface AppSaveViewProps{
    children: React.ReactNode;
    style?: ViewStyle;
}

const AppSaveView : FC<AppSaveViewProps> = ({ children,style }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container,style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSaveView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: IS_Android ? StatusBar.currentHeight || 0 : 0,
  },
  container:{
    flex:1
  }
});
