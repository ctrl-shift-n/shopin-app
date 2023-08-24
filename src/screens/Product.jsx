import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { productStyles as styles } from "../components/product/productStyles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

const data = {
  id: 2,
  title: "iPhone X",
  description:
    "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  price: 899,
  discountPercentage: 17.94,
  rating: 4.44,
  stock: 34,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/2/1.jpg",
    "https://i.dummyjson.com/data/products/2/2.jpg",
    "https://i.dummyjson.com/data/products/2/3.jpg",
    "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  ],
};

const Product = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { params } = route;
  const data = params.props;
  const actualPrice = Math.floor(
    data.price / ((100 - data.discountPercentage) / 100)
  );
  const cartData = useSelector((state) => state.cart.data);
  const addToCartHandler = () => {
    let inCart = false;
    for (let item of cartData) {
      if (item.id === data.id) {
        inCart = true;
      }
    }
    if (inCart) {
      ToastAndroid.show("Item already in cart", ToastAndroid.SHORT);
    } else {
      const payload = {
        ...data,
        quantity: 1,
      };
      dispatch(addToCart(payload));
      ToastAndroid.show("Item added to cart", ToastAndroid.SHORT);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.productContainer}
        // keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <Image source={{ uri: data.thumbnail }} style={styles.productImage} />
        <View style={styles.productDetail}>
          <Text style={styles.productTitle}>{data.title}</Text>
          <View style={styles.productRatingContainer}>
            <Text style={styles.productRating}>{data.rating}</Text>
            <AntDesign name="star" size={16} color="green" />
            <Text>{`(${data.stock})`}</Text>
          </View>
          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>{`$${data.price}`}</Text>
            <Text style={styles.productActualPrice}>{`$${actualPrice}`}</Text>
            <Text style={styles.productDiscPercent}>{`(${Math.round(
              data.discountPercentage
            )}%) OFF`}</Text>
          </View>
          <Text style={styles.productDescription}>{data.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.productBottom}>
        <TouchableOpacity
          onPress={addToCartHandler}
          style={styles.productAddtocart}
        >
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Product;
