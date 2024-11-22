import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  installmentsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
  },
  installmentsText: {
    fontSize: 16,
    color: "#00726D",
    fontFamily: "Montserrat_600SemiBold",
    marginLeft: "2%",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
  },
  textContainer: {
    marginLeft: 15,
  },
  rowContainer: { flexDirection: "row", gap: 5 },
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
  textNoCardFound: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
  },
})

export default styles
