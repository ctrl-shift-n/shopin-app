import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

import { categoryStyles as styles } from "../components/category/categoryStyles";
import { useSelector } from "react-redux";
import ProductCard from "../components/common/ProductCard";

const Category = () => {
  const route = useRoute();
  const [subCategory, setSubCategory] = useState("all");
  const { params } = route; // category params passed from homescreen (categories, title)
  const data = params.data;
  // getting all product data from redux store
  const allData = useSelector((state) => state.allData);
  // filtering data based on category
  const categoryData = allData.productData.filter((value) =>
    data.categories.includes(value.category)
  );
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 16 }}>
        <View style={styles.categoryHeadingSection}>
          <Image source={data.image} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>{data.content}</Text>
        </View>

        {data.categories.length > 2 && (
          <View style={[styles.categoryItems, { gap: 12 }]}>
            {data.categories.map((cat) => {
              return (
                <TouchableOpacity
                  onPress={() => setSubCategory(cat)}
                  style={[
                    styles.categoryOptions,
                    {
                      backgroundColor:
                        subCategory === cat ? "white" : "#EEEEEE",
                    },
                  ]}
                  key={cat}
                >
                  <Text style={{ textTransform: "capitalize" }}>
                    {cat.replace("-", " ")}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        {allData.loading ? (
          <ActivityIndicator />
        ) : (
          <View
            style={[styles.categoryItems, { justifyContent: "space-between" }]}
          >
            {categoryData
              .filter((value) => {
                if (subCategory === "all") {
                  return true;
                } else if (value.category === subCategory) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((value) => {
                return (
                  <ProductCard {...value} key={`new-arrivals-${value.id}`} />
                );
              })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;
