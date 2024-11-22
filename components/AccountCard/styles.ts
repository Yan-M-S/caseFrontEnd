import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    color: "#00726D",
    fontFamily: "Montserrat_600SemiBold",
  },
  subText: {
    fontSize: 12,
    color: "#3B4443",
    marginTop: 4,
    fontFamily: "Montserrat_400Regular",
  },
  ownerText: {
    fontSize: 14,
    color: "#3B4443",
    marginTop: 8,
    fontFamily: "Montserrat_400Regular",
  },
})

export default styles
