import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesin from "react-native-vector-icons/AntDesign";
import CartPop from "./CartPop";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopIcons}>
          <Ionicons
            name="chevron-back"
            style={{
              fontSize: 30,
              marginTop: 10,
              marginLeft: 10,
              color: "#343434",
            }}
          />
          <Entypo
            name="forward"
            style={{
              fontSize: 30,
              marginTop: 10,
              marginRight: 10,
              color: "#343434",
            }}
          />
        </View>
        <View style={styles.info}>
          <Image
            style={styles.headerImage}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            }}
          />
          <View style={{ width: 0, flexGrow: 1, flex: 1 }}>
            <Text style={styles.headerText}>Chamundeshwari Kirana Store</Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <RadioButton value="first" status="checked" color="green" />
              <Text
                style={{
                  fontSize: 20,
                  letterSpacing: -1,
                  fontWeight: "600",
                }}
              >
                open
              </Text>
              <FontAwesome
                name="map-pin"
                style={{
                  fontSize: 20,
                  marginLeft: 30,
                  color: "#6A5BFF",
                }}
              />

              <Text
                style={{
                  fontSize: 20,
                  letterSpacing: -1,
                  fontWeight: "600",
                  marginLeft: 10,
                }}
              >
                2.3 km
              </Text>
              <FontAwesome5
                name="map-marked-alt"
                style={{
                  fontSize: 20,
                  marginLeft: 10,
                  color: "#6A5BFF",
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text style={styles.headerTags}>Groceries</Text>
              <Text style={styles.headerTags}>Fruits</Text>
              <Text style={styles.headerTags}>Snaks</Text>
            </View>
          </View>
        </View>
        <View style={styles.header2}>
          <TouchableOpacity>
            <Text style={styles.header2Button}>
              {" "}
              <AntDesin
                style={{
                  fontSize: 17,
                  marginRight: 15,
                  position: "relative",
                  fontWeight: "bold",
                }}
                name="plus"
              ></AntDesin>{" "}
              Follow
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E7E5FF",
    width: "100%",
    height: 250,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 20,
  },
  headerImage: {
    width: 130,
    height: 140,
    borderRadius: 10,
  },
  headerText: {
    flexShrink: 1,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },

  headerTags: {
    backgroundColor: "white",
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "red",
    color: "red",
  },
  headerTopIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerIcons: {
    fontSize: 30,
    marginTop: 10,
    color: "#343434",
  },
  header2: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#E7E5FF",
    width: "100%",
    marginTop: 50,
    height: 80,
  },
  header2Button: {
    backgroundColor: "#FF5B5B",
    textAlign: "center",
    padding: 10,
    marginRight: "30%",
    marginLeft: "30%",
    borderRadius: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Header;
