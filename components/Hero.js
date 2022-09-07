import React, { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import Cards from "./Cards/Cards";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <View
        style={{
          marginTop: 110,
          width: "90%",
          marginLeft: "5%",
        }}
      >
        <Searchbar
          style={{
            borderRadius: 10,
            padding: 10,
          }}
          placeholder="Search for Products"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Cards />
      </View>
    </View>
  );
}

export default Hero;
