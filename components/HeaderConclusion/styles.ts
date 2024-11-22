import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  bottomTextContainer: {
    paddingLeft: 16,
    paddingTop: 10,
  },
  bottomAppBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 72,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
  },
  bottomValue: {
    color: "black",
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
  },
  bottomText: {
    color: "#3B4443",
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
  container: {
    alignItems: "flex-end",
    marginTop: "-5%",
    marginBottom: "5%",
  },
  creditCardText: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#252525",
    textAlign: "center",
  },
  accountTextContainer: {
    marginBottom: "8%",
  },
  creditCardContainerText: {
    marginVertical: "4.4%",
  },
  contentText: {
    fontSize: 16,
    color: "#252525",
    fontFamily: "Montserrat_600SemiBold",
  },
  subtitle: {
    fontSize: width > 400 ? 20 : 16,
    textAlign: "left",
    color: "#000000ff",
    fontFamily: "Montserrat_600SemiBold",
    marginBottom: "8%",
  },
  contentContainer: {
    marginBottom: "8%",
  },
  backButtonContainer: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: "#e6fffeff",
    justifyContent: "center",
    alignItems: "center",
    right: 15,
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
  },
  titleContainer: {
    marginTop: "3.2%",
    marginHorizontal: "4.6%",
    width: "75%",
  },
  title: {
    fontSize: width > 400 ? 24 : 20,
    textAlign: "left",
    color: "#1f2b2aff",
    fontFamily: "Montserrat_700Bold",
    marginBottom: "8%",
  },
})

export default styles
