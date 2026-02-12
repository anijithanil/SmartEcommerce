import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React,{FC} from "react";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { AppFonts } from "../../styles/font";
import Entypo from "@expo/vector-icons/Entypo";
import { commonStyles } from "../../styles/sharedStyles";

interface ProductCardProps {
  imageUrl:string;
  title:string;
  price:number;
  onAddToCartPress:()=>void;
}
const ProductCard:FC<ProductCardProps> = ({ imageUrl, title, price, onAddToCartPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCartPress}>
        <Entypo name="shopping-cart" size={s(15)} color={AppColors.white} />
      </TouchableOpacity>

      {/* Image UI */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>

      {/* details container */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.titleText}>{title}</AppText>
        <AppText style={styles.priceText}>${price}</AppText>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: s(160),
    height: vs(190),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    ...commonStyles.shadow,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopLeftRadius: s(10),
    borderTopRightRadius: s(10),
    width: "100%",
    height: vs(130),
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 1,
    paddingTop: s(8),
    paddingBottom: vs(15),
    paddingHorizontal: s(10),
  },
  priceText: {
    fontSize: s(14),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
  },
  titleText: {
    fontSize: s(14),
    fontFamily: AppFonts.Medium,
    color: AppColors.primary,
  },
  addToCartButton: {
    height: s(28),
    width: s(28),
    position: "absolute",
    left: 5,
    top: 5,
    borderRadius: s(14),
    backgroundColor: AppColors.primary,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
