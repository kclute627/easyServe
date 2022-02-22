import { StyleSheet } from "react-native";
import { colors } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",

    alignItems: "center",
  },
  middleIcon: {
    marginTop: 15,
  },
  keyIcon: {
    position: "absolute",
    left: 30,
    top: 17,
    alignSelf: "center",
  },
  submitBtnView: {
    position: "absolute",
    right: 10,
    top: 10,
    alignSelf: "center",
    width: 130,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 44, 

    backgroundColor: colors.blue
  },
  submitText: {
    fontSize: 22,
    color: colors.white
  }
});
