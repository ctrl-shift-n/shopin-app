import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "../screens/Product";
import { TabNavigation } from "./TabNavigation";
import Cart from "../screens/Cart";
import HomeHeader from "../components/header/HomeHeader";
import Category from "../screens/Category";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};
