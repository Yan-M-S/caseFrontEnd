import React from "react"
import { Image, Text, View } from "react-native"
import styles from "./styles"
import HeaderConclusion from "../../components/HeaderConclusion"
import { useReceiverStore } from "../../store/useReceiverStore"
import { useInstallmentStore } from "../../store/useInstallmentStore"

export default function PaymentCheckout() {
  const { receiver } = useReceiverStore()
  const { amountToPay } = useInstallmentStore()

  return (
    <View style={styles.container}>
      <HeaderConclusion title="Pix realizado com sucesso!" />

      <View style={styles.imageContainer}>
        <Image source={require("../../assets/conclusao-imagem.png")} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>Para</Text>
        <Text style={styles.name}>{receiver?.name}</Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>Valor</Text>
          <Text style={styles.tableData}>Data</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>{`R$ ${amountToPay.toFixed(
            2
          )}`}</Text>
          <Text style={styles.tableHeader}>06/12/2024</Text>
        </View>
      </View>
    </View>
  )
}
