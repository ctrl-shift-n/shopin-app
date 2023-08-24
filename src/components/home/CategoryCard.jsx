import { View, Text, Image, FlatList, Pressable } from "react-native";
import React from "react";
import { categoryCardStyles as styles } from "./homeStyles";
import { categoriesData } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = () => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryHeading}>Categories</Text>

      {/* To show horizontal list of categories */}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoriesData}
        renderItem={({ item }) => <ImageWrapper data={item} />}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: "100%",
                width: 20,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const ImageWrapper = ({ data }) => {
  const { navigate } = useNavigation();
  const pressHandler = () => {
    navigate("Category", { data });
  };
  return (
    <Pressable onPress={pressHandler} style={styles.categoryWrapper}>
      <Image source={data.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{data.content}</Text>
    </Pressable>
  );
};

export default CategoryCard;
