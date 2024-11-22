import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Payment from "./screens/payment/Payment"
import Installments from "./screens/installments/Installments"
import Home from "./screens/home/Home"
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper"
import ConfirmPaymentConditions from "./screens/confirmPaymentConditions/ConfirmPaymentConditions"
import LoadingPayment from "./screens/loadingPayment/LoadingPayment"
import PaymentCheckout from "./screens/paymentCheckout/PaymentCheckout"

const Stack = createNativeStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00726D",
    accent: "#03dac4",
  },
}

export default function AppNavigator() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Installments" component={Installments} />
          <Stack.Screen
            name="ConfirmPaymentConditions"
            component={ConfirmPaymentConditions}
          />
          <Stack.Screen name="LoadingPayment" component={LoadingPayment} />
          <Stack.Screen name="PaymentCheckout" component={PaymentCheckout} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
