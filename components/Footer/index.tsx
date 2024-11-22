import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import Button from "../Button"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"

interface IFooterProps {
  title?: string
  amountToPay: string | undefined
  installments?: number
  selectedInstallment?: boolean
  onContinuePress?: () => void
  buttonTitle?: string
  route?: string | undefined
  isLoading?: boolean
}

const Footer: React.FC<IFooterProps> = ({
  title = "Valor a ser pago",
  amountToPay,
  installments = 0,
  selectedInstallment = false,
  onContinuePress,
  buttonTitle = "Pagar",
  route,
}) => {
  const navigation = useNavigation()
  const [displayValue, setDisplayValue] = useState("Carregando...")

  useEffect(() => {
    setDisplayValue(() => {
      if (amountToPay && installments !== 0) {
        return `${installments}x de R$ ${amountToPay}`
      } else if (amountToPay) {
        return `R$ ${amountToPay}`
      } else return "Carregando..."
    })
  }, [amountToPay, installments])

  return (
    <View style={styles.bottomAppBar}>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>{title}</Text>
        <Text style={styles.bottomValue}>{displayValue}</Text>
      </View>
      <Button
        title={buttonTitle}
        disabled={selectedInstallment}
        onPress={onContinuePress || (() => navigation.navigate(route))}
      />
    </View>
  )
}

export default Footer
