import { StyleSheet } from "react-native";

export const productStyles = StyleSheet.create({
  productContainer: {
    padding: 16,
    height: "100%",
  },
  productImage: {
    width: "100%",
    height: 360,
    borderRadius: 16,
    objectFit: "cover",
    marginBottom: 12,
  },
  productDetail: {
    gap: 12,
    marginBottom: 100,
  },
  productTitle: {
    fontSize: 28,
    fontWeight: "500",
    paddingHorizontal: 8,
  },
  productRatingContainer: {
    paddingHorizontal: 8,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  productRating: {
    fontSize: 16,
    fontWeight: "500",
  },
  productPriceContainer: {
    paddingHorizontal: 8,
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 24,
    fontWeight: "500",
  },
  productActualPrice: {
    fontSize: 18,
    fontWeight: "500",
    color: "grey",
    textDecorationLine: "line-through",
  },
  productDiscPercent: {
    fontSize: 16,
    fontWeight: "500",
    color: "green",
  },
  productDescription: {
    fontSize: 16,
    color: "grey",
    paddingHorizontal: 8,
  },
  productBottom: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  productAddtocart: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});
