import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import CartCard from "../components/cart/CartCard";
import CartSummary from "../components/cart/CartSummary";
import { useSelector } from "react-redux";
import EmptyCart from "../components/cart/EmptyCart";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        style={{ padding: 16, backgroundColor: "#F5F5F5", height: "100%" }}
      >
        <View style={{ marginBottom: 196 }}>
          {cartData.data.length === 0 ? (
            <EmptyCart />
          ) : (
            cartData.data.map((item) => {
              return <CartCard item={item} key={`cart-item-${item.id}`} />;
            })
          )}
        </View>
      </ScrollView>
      {cartData.data.length > 0 && <CartSummary />}
    </SafeAreaView>
  );
};

export default Cart;
