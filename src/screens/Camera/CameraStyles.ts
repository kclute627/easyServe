import { StyleSheet } from "react-native";
import { colors, SCREEN_WIDTH } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraTop: {
    height: 65,
    width: SCREEN_WIDTH,
    backgroundColor: colors.black,
  },
  camera: {
    flex: 1,
  },
  cameraBottom: {
    height: 155,
    width: SCREEN_WIDTH,
    backgroundColor: colors.black,
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  camBtnView: {
    height: 75,
    width: 75,
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.white,
    borderWidth: 2,
    marginTop: 25,
  },
  camBtn: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  backBtnView: {
    position: "absolute",
    left: 25,
    top: 40,
  },
});
