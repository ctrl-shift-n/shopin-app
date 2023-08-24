import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResultCard = ({ item }) => {
  const props = item;
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => navigate("Product", { props })}
      style={{
        backgroundColor: "white",
      }}
    >
      <Text style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default SearchResultCard;
