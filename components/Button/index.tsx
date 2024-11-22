import React from "react"
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native"
import styles from "./styles"

interface ButtonProps extends TouchableOpacityProps {
  disabled?: boolean
  title: string
}

const Button = ({ disabled, title, onPress, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} {...props}>
      <View style={[styles.buttonContainer, disabled && styles.buttonDisabled]}>
        <Text style={styles.paymentText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
