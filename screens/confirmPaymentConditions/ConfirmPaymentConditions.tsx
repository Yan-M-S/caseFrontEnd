import React from "react"
import { View, SafeAreaView } from "react-native"
import styles from "./styles"
import { useInstallmentStore } from "../../store/useInstallmentStore"
import { useCardStore } from "../../store/useCardStore"
import PaymentMethodCard from "../../components/PaymentMethodCard"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PaymentSummary from "../../components/PaymentSummary"

export default function ConfirmPaymentConditions() {
  const { simulation } = useInstallmentStore.getState()
  const { selectedCard } = useCardStore.getState()

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Condições de pagamento"
        bottomtitle="Revise os detalhes do pagamento antes de continuar"
      />
      <View>
        <PaymentMethodCard
          cards={selectedCard ? [selectedCard] : undefined}
          onSelectionChange={(isSelected) => console.log("Selected")}
          initialCheckedCard={selectedCard?.cardNumber}
        />
      </View>
      <PaymentSummary simulation={simulation} />
      <Footer
        amountToPay={simulation[0].installmentAmount.toFixed(2)}
        buttonTitle="Finalizar"
        installments={simulation[0].installments}
        title="Valor a ser pago"
        route="LoadingPayment"
      />
    </SafeAreaView>
  )
}
