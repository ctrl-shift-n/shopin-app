import { View, Text, FlatList } from "react-native";
import React from "react";
import { newArrivalStyles } from "./homeStyles";
import ProductCard from "../common/ProductCard";

const NewArrivals = ({ newArrivalsData }) => {
  return (
    <View style={newArrivalStyles.newArrivalContainer}>
      <Text style={newArrivalStyles.newArrivalHeading}>New Arrivals</Text>
      <View style={newArrivalStyles.newArrivalProductContainer}>
        {newArrivalsData.map((value) => {
          return <ProductCard {...value} key={`new-arrivals-${value.id}`} />;
        })}
      </View>
    </View>
  );
};

export default NewArrivals;
