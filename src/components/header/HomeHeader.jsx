import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const HomeHeader = () => {
  const data = useSelector((state) => state.cart.data);
  const { navigate } = useNavigation();
  return (
    <Pressable
      style={{
        marginRight: 12,
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        backgroundColor: "#eeeeee",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
      }}
      onPress={() => navigate("Cart")}
    >
      <Ionicons name="cart-outline" size={24} color="black" />
      {data.length > 0 && (
        <>
          <View
            style={{ height: "80%", width: 3, backgroundColor: "white" }}
          ></View>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>{data.length}</Text>
        </>
      )}
    </Pressable>
  );
};

export default HomeHeader;
