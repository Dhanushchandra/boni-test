import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function CartPop() {
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        backgroundColor: "#6A5BFF",
        position: "absolute",
        width: "100%",
        height: 60,
        top: windowHeight - 60,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 20,
            color: "#ffffff",
            fontWeight: "bold",
          }}
        >
          300 | 2 items
        </Text>
        <TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                marginRight: 20,
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              View cart
              <MaterialIcons
                name="arrow-forward-ios"
                style={{
                  fontSize: 20,
                  marginLeft: 20,
                  color: "#ffffff",
                }}
              />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CartPop;
