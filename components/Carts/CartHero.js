import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector, useDispatch } from "react-redux";

function CartHero() {
  const itemPrice = useSelector((state) => state.itemPrice);
  const subtotal = itemPrice[itemPrice.length - 1];
  const dispatch = useDispatch();
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 120,
          backgroundColor: "#E7E5FF",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "grey",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          Choose Delivery mode
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              paddingRight: 30,
              paddingLeft: 30,
              borderColor: "#6A5BFF",
              borderWidth: 1,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#6A5BFF",
                fontWeight: "bold",
              }}
            >
              Go to Shop
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#6A5BFF",
              padding: 10,
              paddingRight: 30,
              paddingLeft: 30,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#E7E5FF",
                fontWeight: "bold",
              }}
            >
              Delivery
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "grey",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          Detailed Bill
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: "grey",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            Sub Total
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "grey",
              marginTop: 20,
              marginRight: 20,
            }}
          >
            Rs. {subtotal > 0 ? subtotal : 0}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: "grey",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            GST
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: "grey",
              marginTop: 20,
              marginRight: 20,
            }}
          >
            Rs. 150
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            Grand Total
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 20,
              marginRight: 20,
            }}
          >
            Rs. {subtotal + 150}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "#E7E5FF",
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            padding: 20,
            backgroundColor: "#ffffff",
          }}
        >
          <View
            style={{
              marginLeft: 0,
              backgroundColor: "grey",
              padding: 0,
              borderRadius: 150,
            }}
          >
            <MaterialCommunityIcons
              style={{
                color: "#ffffff",
                marginLeft: 40,
                fontSize: 30,
              }}
              name="cash"
            ></MaterialCommunityIcons>
          </View>

          <Text
            style={{
              color: "grey",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Cash on Delivery
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#007E05",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginLeft: 50,
              marginTop: 35,
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              CHECKOUT
            </Text>
            <MaterialIcons
              name="arrow-forward-ios"
              style={{
                fontSize: 20,
                marginLeft: 20,
                color: "#ffffff",
                marginTop: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CartHero;
