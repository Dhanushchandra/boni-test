import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Card from "./Card";
import Data from "../../Data";

function Cards() {
  return (
    <View>
      {Data.map((item) => {
        return (
          <Card
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            sprice={item.sprice}
            id={item.id}
          />
        );
      })}
    </View>
  );
}

export default Cards;
