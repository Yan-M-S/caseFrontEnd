import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import styles from "./styles"

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Bem-vindo ao App de Pagamento PIX!</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Payment")}
        style={styles.button}
      >
        Ir para Pagamento
      </Button>
    </View>
  )
}
