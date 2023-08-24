import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";
import { carouselData } from "../../utils";
import { carouselStyles as styles } from "./homeStyles";

const Carousel = () => {
  const width = Dimensions.get("screen").width - 32;
  return (
    <View>
      <FlatList
        pagingEnabled
        horizontal
        snapToAlignment="center"
        data={carouselData}
        renderItem={({ item }) => {
          return (
            <View
              style={[
                styles.carouselWrapper,
                { width, backgroundColor: item.bgColor },
              ]}
            >
              <Text style={styles.carouselTitle}>{item.title}</Text>
              <Image source={item.image} style={styles.carouselImage} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Carousel;
