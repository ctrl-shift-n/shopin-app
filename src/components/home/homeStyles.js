import { StyleSheet } from "react-native";

// For Carousel
export const carouselStyles = StyleSheet.create({
  carouselWrapper: {
    flexDirection: "row",
    height: 172,
    marginBottom: 24,
  },

  carouselTitle: {
    width: "40%",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 20,
  },

  carouselImage: {
    width: "50%",
    height: "100%",
    objectFit: "cover",
  },
});

// For CatgoryCard component
export const categoryCardStyles = StyleSheet.create({
  categoryContainer: {
    overflow: "hidden",
    gap: 12,
    marginBottom: 34,
  },
  categoryHeading: {
    fontSize: 20,
    fontWeight: "500",
  },
  categoryWrapper: {
    alignItems: "center",
    gap: 10,
    width: 76,
  },
  categoryImage: {
    height: 76,
    width: 76,
    borderRadius: 48,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});

// for NewArriavals component
export const newArrivalStyles = StyleSheet.create({
  newArrivalContainer: {
    marginBottom: 24,
    gap: 12,
  },
  newArrivalHeading: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    padding: 8,
    backgroundColor: "#f4dec8",
    borderRadius: 24,
  },
  newArrivalProductContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

// for TopPicks component
export const topPicksStyles = StyleSheet.create({
  topPicksContainer: {
    marginBottom: 24,
    gap: 12,
  },
  topPicksHeading: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    padding: 8,
    backgroundColor: "#e9e7da",
    borderRadius: 24,
  },
  topPicksDesc: {
    fontSize: 16,
    paddingHorizontal: 16,
    textAlign: "center",
  },
  topPicksProductContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
