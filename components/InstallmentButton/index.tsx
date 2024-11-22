import React from "react"
import { TouchableOpacity, View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "react-native-paper"
import styles from "./styles"

const InstallmentsButton = ({ checkedCard, cardNumber }: any) => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  if (checkedCard !== cardNumber) return null

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Installments")}>
      <View style={styles.installmentsButton}>
        <Text style={styles.installmentsText}>Escolher parcelas</Text>
        <Ionicons name="chevron-forward" size={24} color={colors.primary} />
      </View>
    </TouchableOpacity>
  )
}

export default InstallmentsButton
