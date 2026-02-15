import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import {
  commonStyles,
  sharedPaddingHorzizontal,
} from "../../styles/sharedStyles";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppButton from "../../components/buttons/AppButton";

const CheckOutScreen = () => {
  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddingHorzizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInput placeholder="Full Name" />
          <AppTextInput placeholder="Phone Number" />
          <AppTextInput placeholder="Detailed Address" />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="Confirm" />
      </View>
    </AppSaveView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyles.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorzizontal,
    position: "absolute",
    width: "100%",
    bottom: 0,
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    paddingTop: vs(10),
  },
});
