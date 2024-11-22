import React from "react"
import { Image } from "expo-image"

interface ILoadingProps {
  width: number
  height: number
}

const LoadingIndicador = ({ width, height }: ILoadingProps) => {
  return (
    <Image
      style={{ width: width, height: height }}
      source={require("../../assets/loading.gif")}
      contentFit="cover"
      transition={2000}
    />
  )
}

export default LoadingIndicador
