import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Card from "./Card";

function Cards() {
  return (
    <View>
      <Card
        img="https://m.media-amazon.com/images/I/51mUwdp2THL._SL1100_.jpg"
        name="Carrot"
        price="Rs.50"
        sprice="Rs.60"
      />
      <Card
        img="https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg"
        name="Banana"
        price="Rs.10"
        sprice="Rs.30"
      />
      <Card
        img="https://post.healthline.com/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg"
        name="Apple"
        price="Rs.150"
        sprice="Rs.260"
      />
      <Card
        img="https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg"
        name="Orange"
        price="Rs.70"
        sprice="Rs.100"
      />
      <Card
        img="https://m.media-amazon.com/images/I/41P8zMQqR7L._SX466_.jpg"
        name="Grape"
        price="Rs.60"
        sprice="Rs.80"
      />
    </View>
  );
}

export default Cards;
