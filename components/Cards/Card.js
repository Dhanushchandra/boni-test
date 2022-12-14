import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/action";

function Card({ img, name, price, sprice, id }) {
  const cart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          borderWidth: 1,
          borderColor: "#E7E5FF",
          borderRadius: 10,
        }}
        source={{
          uri: img,
        }}
      ></Image>
      <Text
        style={{
          fontSize: 16,
        }}
      >
        {name}
      </Text>
      <View>
        <Text
          style={{
            color: "grey",
            marginLeft: 30,
          }}
        >
          Rs. {price}
        </Text>
        <Text
          style={{
            color: "grey",
            textDecorationLine: "line-through",
            marginLeft: 30,
          }}
        >
          Rs. {sprice}
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert("Added to cart");
            dispatch(
              addItemToCart({ img, name, price, sprice, id, quantity: 1 })
            );
          }}
        >
          <Text
            style={{
              backgroundColor: "#FF5B5B",
              marginTop: 25,
              textAlign: "center",
              fontSize: 16,
              padding: 5,
              // marginRight: 30,
              paddingRight: 30,
              paddingLeft: 30,
              color: "white",
              borderRadius: 8,
            }}
          >
            ADD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Card;
