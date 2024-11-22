import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"

interface PaymentSummaryProps {
  simulation: {
    amountToPay: number
    installments: number
    installmentAmount: number
    fees: {
      fixed: {
        amount: number
        percentage: number
      }
      installments: {
        amount: number
        percentage: number
      }
    }
  }[]
}

const PaymentSummary = ({ simulation }: PaymentSummaryProps) => {
  if (!simulation || simulation.length === 0) return null

  const { amountToPay, installments, installmentAmount, fees } = simulation[0]

  const fixedFee = fees.fixed.amount + amountToPay * fees.fixed.percentage
  const installmentFee =
    fees.installments.amount > 0
      ? fees.installments.amount +
        installmentAmount * fees.installments.percentage
      : 0

  return (
    <View style={styles.valuesContainer}>
      <View>
        <Text style={styles.paymentConditionsText}>Valor a transferir</Text>
        <Text style={styles.paymentConditionsText}>Taxa do cartão</Text>
        <Text style={styles.paymentConditionsText}>
          {fees.installments.amount > 0 ? "Taxa de parcelamento" : "-"}
        </Text>
        <Text style={styles.paymentConditionsText}>
          Valor a transferir + taxas
        </Text>
      </View>
      <View>
        <Text style={styles.paymentConditionsBoldText}>
          {`R$ ${amountToPay.toFixed(2)}`}
        </Text>
        <Text style={styles.paymentConditionsBoldText}>
          {`R$ ${fixedFee.toFixed(2)}`}
        </Text>
        <Text style={styles.paymentConditionsBoldText}>
          {fees.installments.amount > 0
            ? `R$ ${installmentFee.toFixed(2)}`
            : "-"}
        </Text>
        <Text style={styles.paymentConditionsBoldText}>
          {`${installments}x R$ ${installmentAmount.toFixed(2)}`}
        </Text>
      </View>
    </View>
  )
}

export default PaymentSummary
