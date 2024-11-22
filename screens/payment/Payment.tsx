import React, { useEffect, useState } from "react"
import { View, SafeAreaView, ScrollView } from "react-native"
import { Text } from "react-native-paper"
import { getAccountData, getPayment } from "../../services/ClientsAPI"
import AccountCard from "../../components/AccountCard"
import PaymentMethodCard from "../../components/PaymentMethodCard"
import styles from "./styles"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import LoadingIndicador from "../../components/LoadingIndicador"
import { useInstallmentStore } from "../../store/useInstallmentStore"

interface ICard {
  cardId: string
  name: string
  securityCode: string
  cardNumber: string
  holder: string
  expirationDate: string
  brand: "Visa" | "Master"
  favorite: boolean
  used: boolean
}

interface IOwner {
  name: string
  id: string
}

interface IAccount {
  accountId: string
  balance: number
  currency: string
  status: string
  owner: IOwner
  cards: ICard[]
}

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

export default function Payment() {
  const [paymentData, setPaymentData] = useState<IPayment | null>(null)
  const [accountData, setAccountData] = useState<IAccount | null>(null)
  const [selectedMethod, setSelectedMethod] = useState<
    "account" | "card" | null
  >(null)
  const [isLoading, setIsloading] = useState(false)
  const { setAmountToPay } = useInstallmentStore()

  const fetchPaymentData = async () => {
    try {
      const paymentData = await getPayment()
      if (paymentData) setPaymentData(paymentData)
      setAmountToPay(paymentData.amount)
    } catch (err: any) {
      console.error("Erro ao tentar buscar payment data!", err)
    }
  }

  const fetchAccountData = async () => {
    try {
      const accountData = await getAccountData()
      if (accountData) setAccountData(accountData)
    } catch (err: any) {
      console.error("Erro ao tentar buscar account data!", err)
    }
  }

  const handleAccountSelectionChange = (isSelected: boolean) => {
    if (isSelected) {
      setSelectedMethod("account")
    } else {
      setSelectedMethod("card")
    }
  }

  const handleCardSelectionChange = (isSelected: boolean) => {
    if (isSelected) {
      setSelectedMethod("card")
    }
  }

  useEffect(() => {
    setIsloading(true)
    Promise.all([fetchPaymentData(), fetchAccountData()]).then(() => {
      setIsloading(false)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Transferência Pix"
        subtitle="Escolha uma forma de pagamento"
      />

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <LoadingIndicador width={90} height={90} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.contentContainer}>
            <View style={styles.accountTextContainer}>
              <Text style={styles.contentText}>Conta Midway</Text>
            </View>
            <AccountCard
              accountData={accountData}
              onSelectionChange={(isSelected) => {
                handleAccountSelectionChange(isSelected)
              }}
              disabled={selectedMethod === "card"}
            />
            <View style={styles.creditCardContainerText}>
              <Text style={styles.creditCardText}>Cartões de crédito</Text>
              <PaymentMethodCard
                cards={accountData?.cards}
                onSelectionChange={(isSelected) => {
                  handleCardSelectionChange(isSelected)
                }}
                disabled={selectedMethod === "account"}
              />
            </View>
          </View>
        </ScrollView>
      )}
      <Footer
        title="Valor a ser pago"
        amountToPay={paymentData?.amount.toFixed(2)}
        selectedInstallment={selectedMethod !== "account"}
        buttonTitle="Pagar"
        route="Installments"
      />
    </SafeAreaView>
  )
}
