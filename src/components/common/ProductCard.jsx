import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { productCardStyles as styles } from "./commonStyles";
import { useNavigation } from "@react-navigation/native";

const ProductCard = (props) => {
  const { navigate } = useNavigation();
  const navigationHandler = () => {
    navigate("Product", { props });
  };
  const { id, title, price, discountPercentage, rating, thumbnail } = props;
  const actualPrice = Math.floor(price / ((100 - discountPercentage) / 100));
  return (
    <Pressable onPress={navigationHandler} style={styles.productCardContainer}>
      <Image source={{ uri: thumbnail }} style={styles.productCardImage} />
      <Text style={styles.productCardTitle}>{title}</Text>
      <View style={styles.productCardRatingcontainer}>
        <Text>{rating}</Text>
        <AntDesign name="star" size={16} color="green" />
      </View>
      <View style={styles.productCardDescContainer}>
        <Text style={styles.productCardPrice}>{`$${price}`}</Text>
        <Text style={styles.productActaulPrice}>{`$${actualPrice}`}</Text>
        <Text style={styles.productDiscPercent}>{`(${Math.round(
          discountPercentage
        )}%) OFF`}</Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;
