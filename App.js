import React from "react";
import { View } from "react-native";
import { Navigation } from "./src/navigations/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
