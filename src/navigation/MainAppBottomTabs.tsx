import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { AppColors } from "../styles/colors";
import { vs } from "react-native-size-matters";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IS_Android } from "../constants/constants";

const Tab = createBottomTabNavigator();
export default function MainAppBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarLabelStyle: {
          marginTop: vs(4),
          fontSize: vs(12),
        },
        tabBarStyle:IS_Android &&{
            height:vs(50),
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          title: "Home",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shopping-cart" size={size} color={color} />
          ),
          title: "Cart",
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          title: "Profile",
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
