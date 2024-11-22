import React from "react"
import AppNavigator from "./AppNavigator"
import { useFonts } from "expo-font"
import {
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat"
import { Text } from "react-native"

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
  })

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>
  }

  return <AppNavigator />
}
