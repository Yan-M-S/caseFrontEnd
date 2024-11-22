import React, { useEffect } from "react"
import { View, Text } from "react-native"
import LoadingIndicador from "../../components/LoadingIndicador"
import styles from "./styles"

export default function LoadingPayment({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("PaymentCheckout")
    }, 4000)
  }, [])

  return (
    <View style={styles.container}>
      <LoadingIndicador width={90} height={90} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Processando</Text>
        <Text style={styles.text}>sua transferência</Text>
      </View>
    </View>
  )
}
