import React from "react";
import CartPop from "../components/CartPop";
import { View, Text, Image, Dimesions } from "react-native";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <ScrollView>
      <Header />
      <Hero />
      <CartPop />
    </ScrollView>
  );
}

export default Home;
