import { View, Text, Image } from "react-native";
import React from "react";

const EmptyCart = () => {
  return (
    <View style={{ marginTop: 100, width: "100%", gap: 16 }}>
      <Image
        source={require("../../../assets/images/empty-cart.png")}
        style={{ height: 300, width: "100%", objectFit: "cover" }}
      />
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
        Oops, your cart is empty!!
      </Text>
    </View>
  );
};

export default EmptyCart;
