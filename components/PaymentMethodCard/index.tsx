import React, { useState, useEffect } from "react"
import { View, Text, ScrollView } from "react-native"
import { RadioButton, useTheme } from "react-native-paper"
import styles from "./styles"
import RenderCardBrand from "../RenderCardBrand"
import { useNavigation } from "@react-navigation/native"
import { useCardStore } from "../../store/useCardStore"
import InstallmentsButton from "../InstallmentButton"

interface Card {
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

interface PaymentMethodCardProps {
  cards: Card[] | undefined
  onSelectionChange: (isSelected: boolean) => void
  disabled?: boolean
  initialCheckedCard?: string
}

const PaymentMethodCard = ({
  cards,
  onSelectionChange,
  disabled,
  initialCheckedCard,
}: PaymentMethodCardProps) => {
  const [checkedCard, setCheckedCard] = useState<string | null>(
    initialCheckedCard || null
  )
  const { colors } = useTheme()
  const navigation = useNavigation()
  const setSelectedCard = useCardStore((state) => state.setSelectedCard)

  useEffect(() => {
    if (disabled && checkedCard) {
      setCheckedCard(null)
      setSelectedCard(null)
      onSelectionChange(false)
    }
  }, [disabled, checkedCard, onSelectionChange])

  useEffect(() => {
    if (initialCheckedCard && initialCheckedCard !== checkedCard) {
      setCheckedCard(initialCheckedCard)
    }
  }, [initialCheckedCard, checkedCard])

  const handleCardSelection = (cardNumber: string) => {
    const newCheckedCard = checkedCard === cardNumber ? null : cardNumber
    const selected =
      cards?.find((card) => card.cardNumber === cardNumber) || null
    setCheckedCard(newCheckedCard)
    setSelectedCard(selected)
    onSelectionChange(newCheckedCard !== null)
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      {cards && cards.length > 0 ? (
        cards.map((card) => (
          <View key={card.cardNumber}>
            <View style={styles.card}>
              <View style={styles.rowContainer}>
                <RadioButton
                  value={card.cardNumber}
                  status={
                    checkedCard === card.cardNumber ? "checked" : "unchecked"
                  }
                  onPress={() => handleCardSelection(card.cardNumber)}
                  uncheckedColor={colors.primary}
                  color={colors.primary}
                />
                <View style={styles.textContainer}>
                  <View style={styles.rowContainer}>
                    <RenderCardBrand cardBrand={card.brand} />
                    <Text style={styles.text}>{`Cartão ${card.brand}`}</Text>
                  </View>
                  <Text style={styles.subText}>
                    Final ****{card.cardNumber.slice(-4)}
                  </Text>
                </View>
              </View>
            </View>

            <InstallmentsButton
              checkedCard={checkedCard}
              cardNumber={card.cardNumber}
            />
          </View>
        ))
      ) : (
        <Text style={styles.textNoCardFound}>Nenhum cartão disponível</Text>
      )}
    </ScrollView>
  )
}

export default PaymentMethodCard
