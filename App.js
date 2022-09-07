import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Home from "./Screens/Home";
import AppNavigator from "./App.Navigator";

export default function App() {
  console.log(StatusBar.currentHeight);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <AppNavigator />
    </SafeAreaView>
  );
}
