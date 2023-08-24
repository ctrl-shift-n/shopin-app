import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { itemQuantityStyles as styles } from "./cartStyles";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../store/cartSlice";

const ItemQuantity = ({ item }) => {
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(increaseQuantity({ id: item.id }));
  };
  const decreaseHandler = () => {
    dispatch(decreaseQuantity({ id: item.id, quantity: item.quantity }));
  };
  return (
    <View style={styles.quantiyContainer}>
      <TouchableOpacity onPress={decreaseHandler}>
        <Text style={[styles.quantityButtonText, styles.quantityBtn]}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityButtonText}>{item.quantity}</Text>
      <TouchableOpacity onPress={increaseHandler}>
        <Text style={[styles.quantityButtonText, styles.quantityBtn]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemQuantity;
