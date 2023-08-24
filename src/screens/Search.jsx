import { SafeAreaView, ScrollView, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import { srchStyles as styles } from "../components/search/searchStyles";
import { useSelector } from "react-redux";
import SearchResultCard from "../components/search/SearchResultCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // console.log("searchterm", searchTerm);
  const allProducts = useSelector((state) => state.allData.productData);
  const searchResults = allProducts.filter((value) =>
    value.title.toLowerCase().includes(searchTerm)
  );
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        style={{ padding: 16 }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
            placeholder="Search items ..."
          />
          <AntDesign name="search1" size={24} color="grey" />
        </View>
        {searchTerm.length > 0 && (
          <View>
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                <SearchResultCard item={item} key={item.id} />
              ))
            ) : (
              <Text style={{ color: "red", fontSize: 16 }}>No items found</Text>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
