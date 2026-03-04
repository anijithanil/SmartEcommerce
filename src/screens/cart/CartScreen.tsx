import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/CartItem";
import TotalViews from "../../components/cart/TotalViews";
import { products } from "../../data/product";
import { sharedPaddingHorzizontal } from "../../styles/sharedStyles";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from "../../store/reducers/cartSlice";

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cartSlice);
  return (
    <AppSaveView>
      <HomeHeader />
      <View style={{ paddingHorizontal: sharedPaddingHorzizontal, flex: 1 }}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <CartItem
                {...item}
                price={item.sum}
                onDeletePress={() => dispatch(removeProductFromCart(item))}
                onReducePress={() => dispatch(removeItemFromCart(item))}
                onIncreasePress={()=>dispatch(addItemToCart(item))}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TotalViews itemPrice={5000} orderTotal={5025} />
      <AppButton
        title="Continue"
        onPress={() => navigation.navigate("CheckOutScreen")}
      />
    </AppSaveView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
