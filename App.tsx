/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./src/navigation";
import { AppColors } from "@config/appColor";

function App() {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        <AppNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default App;
