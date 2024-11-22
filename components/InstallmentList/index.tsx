import React from "react"
import { FlatList, Text, View } from "react-native"
import InstallmentOptions from "../InstallmentOptions"
import styles from "./styles"

interface ISimulation {
  amountToPay: number
  installmentAmount: number
  installments: number
  fees: IFees
}

interface IFees {
  fixed: IFeeDetails
  installments: IFeeDetails
}

interface IFeeDetails {
  amount: number
  percentage: number
}

interface InstallmentListProps {
  paymentData: ISimulation[] | undefined
  selectedInstallment: number | null
  setSelectedInstallment: (installment: number) => void
  handleInstallmentPayment: (item: any) => void
  colors: {
    primary: string
  }
}

const InstallmentList = ({
  paymentData,
  selectedInstallment,
  setSelectedInstallment,
  handleInstallmentPayment,
  colors,
}: InstallmentListProps) => {
  if (!paymentData) return null

  return (
    <FlatList
      data={paymentData}
      style={styles.flatListContainer}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <InstallmentOptions
          item={item}
          selectedInstallment={selectedInstallment}
          onSelect={setSelectedInstallment}
          handleInstallmentPayment={handleInstallmentPayment}
          colors={colors}
        />
      )}
      contentContainerStyle={styles.scrollContent}
      ListEmptyComponent={() => (
        <View style={styles.subText}>
          <Text>Nenhum dado encontrado...</Text>
        </View>
      )}
    />
  )
}

export default InstallmentList
