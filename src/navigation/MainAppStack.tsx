import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckOutScreen from "../screens/cart/CheckOutScreen";
import MyOrdersScreen from "../screens/profile/MyOrderScreen";

const Stack = createStackNavigator();

export default function MainAppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
      <Stack.Screen name="CheckOutScreen" options={{headerShown:true}} component={CheckOutScreen} />
      <Stack.Screen name="MyOrderScreen" options={{headerShown:true,title:"My Orders"}} component={MyOrdersScreen} />
    </Stack.Navigator>
  );
}
