import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  addItemToCart,
  removeItemToCart,
  addItemprice,
  removeItemprice,
} from "../../redux/action";

import cartItems from "../../redux/reducer/cartItems";

const Items = ({ name, price, qua }) => {
  // const quantity = useSelector((state) => state.cartQuantity);
  const cartItems = useSelector((state) => state.cartItems);

  const [quantity, setQuantity] = useState(1);
  const [initPrice, setInitPrice] = useState(price);

  useEffect(() => {
    const newPrice = price * quantity;
    setInitPrice(newPrice);
    dispatch(addItemprice(newPrice));
  }, [quantity]);

  const dispatch = useDispatch();

  return (
    <View
      style={{
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {name}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginLeft: 70,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FF5B5B",
            borderRadius: 5,
          }}
          onPress={() => {
            // dispatch(addItem());
            cartItems.find((item) => {
              if (item.name === name) {
                setQuantity(quantity - 1);

                dispatch(removeItemprice(price));

                if (quantity == 0) {
                  dispatch(removeItemToCart(name));
                }
              }
            });
          }}
        >
          <AntDesign
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
              paddingRight: 2,
              paddingLeft: 2,
              marginTop: 4,
            }}
            name="minus"
          ></AntDesign>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            paddingRight: 10,
            paddingLeft: 10,
            borderWidth: 1,
            borderColor: "grey",
            marginRight: 5,
            marginLeft: 5,
            borderRadius: 5,
          }}
        >
          {quantity}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF5B5B",
            borderRadius: 5,
          }}
          onPress={() => {
            cartItems.find((item) => {
              if (item.name === name) {
                setQuantity(quantity + 1);
                setInitPrice(price * quantity);
                dispatch(addItemprice(item.price * quantity));
              }
            });
          }}
        >
          <AntDesign
            name="plus"
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
              paddingRight: 2,
              paddingLeft: 2,
              marginTop: 4,
            }}
          ></AntDesign>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: "grey",
          }}
        >
          Rs. {initPrice}
        </Text>
      </View>
    </View>
  );
};

function CartHead() {
  const cartItems = useSelector((state) => state.cartItems);
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons
          name="chevron-back"
          style={{
            fontSize: 30,
            marginTop: 10,
            marginLeft: 10,
            color: "#343434",
          }}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 10,
          marginLeft: 20,
        }}
      >
        Chamundeshwari Kirana Store
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 8,
          marginLeft: 20,
          color: "grey",
          fontWeight: "bold",
        }}
      >
        Cart items
      </Text>
      {cartItems.map((item) => {
        return (
          <Items
            name={item.name}
            price={item.price}
            qua={item.quantity}
            key={item.id}
          />
        );
      })}
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          borderBottomColor: "grey",
          borderBottomWidth: 1,
        }}
      ></View>
    </View>
  );
}

export default CartHead;
