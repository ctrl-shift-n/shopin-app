import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
} from "react-native";
import React, { useEffect } from "react";
import CategoryCard from "../components/home/CategoryCard";
import NewArrivals from "../components/home/NewArrivals";
import TopPicks from "../components/home/TopPicks";
import Carousel from "../components/home/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../store/allDataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.allData);
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
      >
        <Carousel />
        <CategoryCard />

        {datas.loading ? (
          <ActivityIndicator size="large" />
        ) : datas.error ? (
          <Text style={{ textAlign: "center", color: "red" }}>
            An error occured!
          </Text>
        ) : (
          <>
            <NewArrivals newArrivalsData={datas.productData.slice(0, 4)} />
            <TopPicks topPicksData={datas.productData.slice(-4)} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Home;
