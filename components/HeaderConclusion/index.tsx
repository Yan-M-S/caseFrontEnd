import React from "react"
import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import AntDesign from "@expo/vector-icons/AntDesign"
import styles from "./styles"

interface IHeader {
  title: string
  subtitle?: string
  bottomtitle?: string
}

const HeaderConclusion = ({ title, subtitle, bottomtitle }: IHeader) => {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
        <View style={styles.backButtonContainer}>
          <AntDesign
            name="close"
            size={24}
            color="#00726D"
            onPress={() => navigation.navigate("Payment")}
          />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {bottomtitle && <Text style={styles.bottomText}>{bottomtitle}</Text>}
      </View>
    </View>
  )
}

export default HeaderConclusion
