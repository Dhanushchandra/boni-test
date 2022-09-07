import React from "react";
import { View, Text, ScrollView } from "react-native";
import CartHead from "../components/Carts/CartHead";
import CartHero from "../components/Carts/CartHero";

function Cart() {
  return (
    <ScrollView>
      <CartHead />
      <CartHero />
    </ScrollView>
  );
}

export default Cart;
