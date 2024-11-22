import React from "react"
import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Ionicons from "@expo/vector-icons/Ionicons"
import styles from "./styles"

interface IHeader {
  title: string
  subtitle?: string
  bottomtitle?: string
}

const Header = ({ title, subtitle, bottomtitle }: IHeader) => {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <View style={styles.backButtonContainer}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="#00726D"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        {bottomtitle && <Text style={styles.bottomText}>{bottomtitle}</Text>}
      </View>
    </View>
  )
}

export default Header
