import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10%",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
    marginBottom: "4%",
  },
  textContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Montserrat_500Medium",
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
    marginTop: 10,
    maxWidth: "90%",
  },
  tableContainer: {
    marginTop: 20,
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  tableHeader: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  tableData: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
})

export default styles
