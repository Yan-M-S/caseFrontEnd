import React, { useEffect, useState } from "react"
import { View, SafeAreaView } from "react-native"
import { useTheme } from "react-native-paper"
import styles from "./styles"
import { getPayment } from "../../services/ClientsAPI"
import { useInstallmentStore } from "../../store/useInstallmentStore"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import InstallmentList from "../../components/InstallmentList"
import LoadingIndicador from "../../components/LoadingIndicador"
import { useReceiverStore } from "../../store/useReceiverStore"

interface IPayment {
  transactionId: string
  amount: number
  currency: string
  receiver: {
    name: string
    id: string
  }
  method: string
  simulation: ISimulation[]
}

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

export default function Installments() {
  const [paymentData, setPaymentData] = useState<IPayment | null>(null)
  const [selectedInstallment, setSelectedInstallment] = useState<number | null>(
    null
  )
  const { colors } = useTheme()
  const { setSimulation } = useInstallmentStore.getState()
  const [amountToPay, setAmountToPay] = useState<number | null>(null)
  const [installments, setInstallments] = useState<number>(1)
  const [isLoading, setIsloading] = useState(false)
  const { setReceiver } = useReceiverStore()

  const fetchPaymentData = async () => {
    try {
      const paymentData = await getPayment()
      if (paymentData) {
        const initialAmountToPay = findAmountToPay(paymentData.simulation)
        setAmountToPay(initialAmountToPay)
        setPaymentData(paymentData)
        setReceiver(paymentData.receiver)
      }
    } catch (err: any) {
      throw new Error("Erro ao tentar buscar payment data!", err)
    }
  }

  const handleInstallmentPayment = (installment: ISimulation) => {
    setAmountToPay(installment.installmentAmount)
    setInstallments(installment.installments)
    setSimulation([installment])
  }

  const findAmountToPay = (simulation: ISimulation[]): number | null => {
    const simulationData = simulation.find((item) => item.installments === 1)
    return simulationData ? simulationData.amountToPay : null
  }
  useEffect(() => {
    setIsloading(true)
    Promise.all([fetchPaymentData()]).then(() => {
      setIsloading(false)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Parcelas do pagamento"
        bottomtitle="O destinatário receberá à vista e você pagará parcelado."
      />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <LoadingIndicador width={90} height={90} />
        </View>
      ) : (
        <InstallmentList
          paymentData={paymentData?.simulation}
          selectedInstallment={selectedInstallment}
          setSelectedInstallment={setSelectedInstallment}
          handleInstallmentPayment={handleInstallmentPayment}
          colors={colors}
        />
      )}
      <Footer
        amountToPay={amountToPay?.toFixed(2)}
        installments={installments}
        buttonTitle="Continuar"
        title="Valor a ser pago"
        selectedInstallment={!selectedInstallment}
        route="ConfirmPaymentConditions"
      />
    </SafeAreaView>
  )
}
