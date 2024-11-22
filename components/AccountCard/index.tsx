import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { RadioButton, useTheme } from "react-native-paper"
import styles from "./styles"

interface Account {
  accountId: string
  balance: number
  currency: string
  owner: {
    name: string
  }
}

interface AccountCardProps {
  accountData: Account | null
  onSelectionChange: (isSelected: boolean) => void
  disabled: boolean
}

const AccountCard = ({
  accountData,
  onSelectionChange,
  disabled,
}: AccountCardProps) => {
  const [checked, setChecked] = useState(false)
  const { colors } = useTheme()
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(accountData?.balance)

  useEffect(() => {
    if (disabled && checked) {
      setChecked(false)
      onSelectionChange(false)
    }
  }, [disabled, checked, onSelectionChange])

  const handleRadioButtonPress = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onSelectionChange(newChecked)
  }

  if (!accountData) {
    return <></>
  }

  return (
    <View style={styles.card}>
      <RadioButton
        value="account"
        status={checked ? "checked" : "unchecked"}
        onPress={handleRadioButtonPress}
        color={colors.primary}
        uncheckedColor={colors.primary}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Saldo em conta</Text>
        <Text style={styles.subText}>Disponível: {formattedValue}</Text>
      </View>
    </View>
  )
}

export default AccountCard
