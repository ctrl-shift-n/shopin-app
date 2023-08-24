import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cartCartStyles as styles } from "./cartStyles";
import ItemQuantity from "./ItemQuantity";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.cartCardContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.cartCardImage} />
      <View style={styles.cartCardDetailContainer}>
        <Text style={styles.cartCardTitle}>{item.title}</Text>
        <Text style={styles.cartCardCategory}>{item.category}</Text>
        <View style={styles.cartCardPriceQuantityContainer}>
          <Text style={styles.cartCardTitle}>{`$${item.price}`}</Text>
          <ItemQuantity item={item} />
        </View>
      </View>
      <MaterialCommunityIcons
        onPress={() => dispatch(removeFromCart({ id: item.id }))}
        name="delete-forever-outline"
        size={26}
        color="red"
        style={{ position: "absolute", top: 10, right: 10 }}
      />
    </View>
  );
};

export default CartCard;
