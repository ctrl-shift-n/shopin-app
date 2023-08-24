import { View, Text } from "react-native";
import React from "react";
import { topPicksStyles as styles } from "./homeStyles";
import ProductCard from "../common/ProductCard";

const TopPicks = ({ topPicksData }) => {
  return (
    <View style={styles.topPicksContainer}>
      <Text style={styles.topPicksHeading}>Top picks</Text>
      <Text style={styles.topPicksDesc}>
        Get your shopping list upda-to-date with our TOP PICKS
      </Text>
      <View style={styles.topPicksProductContainer}>
        {topPicksData.map((value) => {
          return <ProductCard {...value} key={`top-picks-${value.id}`} />;
        })}
      </View>
    </View>
  );
};

export default TopPicks;
