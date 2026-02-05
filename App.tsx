import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSaveView from "./src/components/views/AppSaveView";
import FlashMessage, { showMessage } from "react-native-flash-message";
import AppButton from "./src/components/buttons/AppButton";
import AppTextInput from "./src/components/inputs/AppTextInput";
import SignInScreen from "./src/screens/auth/SignInScreen";
import SignUpScreen from "./src/screens/auth/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";

export default function App() {
  return (
    <>
      <FlashMessage position="top" type="success" />
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
