import { StyleSheet } from "react-native";

// for ProductCart component
export const productCardStyles = StyleSheet.create({
  productCardContainer: {
    width: 168,
    borderRadius: 8,
    gap: 2,
    marginBottom: 18,
    backgroundColor: "white",
  },
  productCardImage: {
    width: "100%",
    height: 184,
    borderRadius: 8,
    objectFit: "cover",
  },
  productCardTitle: {
    fontSize: 20,
    paddingHorizontal: 8,
    fontWeight: "500",
  },
  productCardRatingcontainer: {
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  productCardDescContainer: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  productCardPrice: {
    fontSize: 16,
    fontWeight: "500",
  },
  productActaulPrice: {
    fontSize: 14,
    color: "grey",
    textDecorationLine: "line-through",
  },
  productDiscPercent: {
    fontSize: 12,
    fontWeight: "500",
    color: "green",
  },
});
