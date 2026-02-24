import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import AppText from "../../components/texts/AppText";
import { sharedPaddingHorzizontal } from "../../styles/sharedStyles";
import { s, vs } from "react-native-size-matters";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSaveView>
      <HomeHeader />
      <AppText varient="Bold" style={{ fontSize: s(18), marginTop: vs(10) }}>
        Hello, Ahemed
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorzizontal }} />
      <ProfileSectionButton title={"My Orders"} onPress={() => {navigation.navigate("MyOrderScreen")}} />
      <ProfileSectionButton title={"Language"} onPress={() => {}} />
      <ProfileSectionButton title={"Logout"} onPress={() => {}} />
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
