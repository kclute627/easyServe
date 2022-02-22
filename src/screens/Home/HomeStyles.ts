import { StyleSheet } from "react-native";
import { colors, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  middle: {},
  homeTop: {
    height: 45,
    width: SCREEN_WIDTH,
    backgroundColor: colors.black,
  },
  imageBackground: {
    flex: 1,
  },
  image: {
    height: SCREEN_HEIGHT - 170,
    width: SCREEN_WIDTH - 10,
    zIndex: -1,
  },
  imageView: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    position: "relative",
  },
  box: {
    borderWidth: 2,

    alignItems: "center",
    justifyContent: "center",
  
  },
  boxView: {
    marginVertical: 10,
  },
  listView: {
    position: "absolute",
    top: 10,
    left: 5,
  },
  flatList: {
    height: 100,
    width: 300,
  },
});
