import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import { AppFonts } from "../../styles/font";
import ProductCard from "../../components/cards/ProductCard";
import { products } from "../../data/product";
import { s, vs } from "react-native-size-matters";

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ProductCard
            onAddToCartPress={() => console.log("Product pressed", item.id)}
            imageUrl={item.imageURL}
            title={item.title}
            price={item.price}
          />
        )}
        columnWrapperStyle={{justifyContent:"space-between",marginBottom:vs(10)}}
        contentContainerStyle={{paddingHorizontal:s(10)}}
      />
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
