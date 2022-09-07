import React from "react";
import CartPop from "../components/CartPop";
import { View, Text, Image, Dimesions } from "react-native";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useSelector } from "react-redux";

function Home() {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <ScrollView>
      <Header />
      <Hero />
      {cartItems.length > 0 ? <CartPop /> : null}
    </ScrollView>
  );
}

export default Home;
