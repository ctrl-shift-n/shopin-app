import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { cartSummaryStyles as styles } from "./cartStyles";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const data = useSelector((state) => state.cart.data);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      data.reduce((accumulator, object) => {
        return accumulator + object.price * object.quantity;
      }, 0)
    );
  }, [data]);
  return (
    <View style={styles.summaryContainer}>
      <View style={styles.summarySubContainer}>
        <Text style={styles.summaryCount}>Total items</Text>
        <Text style={styles.summaryCount}>{data.length}</Text>
      </View>
      <View style={styles.summarySubContainer}>
        <Text style={styles.summaryTotal}>Total</Text>
        <Text style={styles.summaryTotal}>{`$${total}`}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartSummary;
