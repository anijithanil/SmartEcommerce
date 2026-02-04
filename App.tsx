import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import AppText from "./src/components/texts/AppText";
import AppSaveView from "./src/components/views/AppSaveView";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function App() {
  return (
    <>
      <FlashMessage position="top" type="success" />
      <AppSaveView>
        <AppText varient="bold">Hello, World!</AppText>
        <AppText varient="medium">Hello, World!</AppText>
        <Button
          title="Show Message"
          onPress={() => showMessage({ message: "Hello, World!",color:"yellow",type:'success' })}
        />
      </AppSaveView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
