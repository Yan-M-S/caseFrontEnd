import React from "react"
import { View, Text } from "react-native"
import { RadioButton } from "react-native-paper"
import styles from "./styles"

interface InstallmentOptionsProps {
  item: {
    installments: number
    installmentAmount: number
  }
  selectedInstallment: number | null
  onSelect: (installments: number) => void
  handleInstallmentPayment: (item: any) => void
  colors: {
    primary: string
  }
}

const InstallmentOptions = ({
  item,
  selectedInstallment,
  onSelect,
  handleInstallmentPayment,
  colors,
}: InstallmentOptionsProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        <RadioButton
          value={item.installments.toString()}
          status={
            selectedInstallment === item.installments ? "checked" : "unchecked"
          }
          onPress={() => {
            onSelect(item.installments)
            handleInstallmentPayment(item)
          }}
          uncheckedColor={colors.primary}
          color={colors.primary}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {`${item.installments}x de R$ ${item.installmentAmount.toFixed(2)}`}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default InstallmentOptions
