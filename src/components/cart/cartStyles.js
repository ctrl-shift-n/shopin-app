import { StyleSheet } from "react-native";

// for CartCard component
export const cartCartStyles = StyleSheet.create({
  cartCardContainer: {
    flexDirection: "row",
    padding: 12,
    borderRadius: 12,
    gap: 12,
    backgroundColor: "white",
    marginBottom: 16,
  },
  cartCardImage: {
    width: 96,
    height: 96,
    borderRadius: 12,
    objectFit: "cover",
  },
  cartCardDetailContainer: {
    flex: 1,
    paddingVertical: 4,
    justifyContent: "space-between",
    gap: 8,
  },
  cartCardTitle: {
    fontSize: 20,
    paddingRight: 16,
    fontWeight: "500",
  },
  cartCardCategory: {
    fontSize: 16,
    fontWeight: "500",
    color: "grey",
    textTransform: "capitalize",
  },
  cartCardPriceQuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

// for ItemQuantity component
export const itemQuantityStyles = StyleSheet.create({
  quantiyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    backgroundColor: "#EEEEEE",
    borderRadius: 8,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: "500",
  },
  quantityBtn: {
    paddingHorizontal: 8,
    backgroundColor: "black",
    color: "white",
    borderRadius: 4,
  },
});

// for CartSummary component
export const cartSummaryStyles = StyleSheet.create({
  summaryContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    padding: 16,
    gap: 16,
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  summarySubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryCount: {
    fontSize: 18,
    color: "grey",
  },
  summaryTotal: {
    fontSize: 22,
    fontWeight: "500",
  },
  checkoutBtn: {
    backgroundColor: "black",
    padding: 16,
    borderRadius: 12,
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});
