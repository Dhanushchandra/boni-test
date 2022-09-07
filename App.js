import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import Home from "./Screens/Home";
import AppNavigator from "./App.Navigator";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  console.log(StatusBar.currentHeight);
  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}
      >
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
}
