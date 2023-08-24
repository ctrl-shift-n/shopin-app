import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./StackNavigation";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
