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
    height: 600,
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
    height: 100,
    width: 150,
    borderWidth: 2,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3000,

    // position: "absolute",
    // bottom: 30,
    // left: 10,
  },
  boxView: {
    marginVertical: 10,
  },
  listView: {
    
    flexDirection: 'row',
   
  },
  flatList: {
    height: 100,
    width: 300,
  }
});
