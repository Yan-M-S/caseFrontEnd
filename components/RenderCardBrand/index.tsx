import React from "react"
import { Image, View } from "react-native"
import styles from "./styles"

type ICardBrand = "Visa" | "Master"

interface IRenderCardBrandProps {
  cardBrand: ICardBrand
}

const RenderCardBrand = ({ cardBrand }: IRenderCardBrandProps) => {
  if (cardBrand === "Master") {
    return (
      <View style={styles.mastercard}>
        <Image source={require("../../assets/mastercard.png")} />
      </View>
    )
  }

  return (
    <View style={styles.visacard}>
      <Image source={require("../../assets/visacard.png")} />
    </View>
  )
}

export default RenderCardBrand
