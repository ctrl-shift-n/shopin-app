import { StyleSheet } from "react-native";

export const categoryStyles = StyleSheet.create({
  categoryHeadingSection: {
    flexDirection: "row",
    borderRadius: 12,
    gap: 12,
    backgroundColor: "white",
    height: 136,
    alignItems: "center",
  },
  categoryImage: {
    width: "60%",
    height: 136,
    objectFit: "cover",
    borderRadius: 12,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "500",
    flex: 1,
  },
  categoryOptions: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  categoryItems: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
