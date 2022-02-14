import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { RootStackParamList, RootTabScreenProps } from "../../../types";
import { useAppContext } from "../../../App.Provider";
import BottomNav from "../../components/BottomNav/BottomNav";
import { styles } from "./HomeStyles";
import ImageLoaded from "./ImageLoaded";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"Camera">) {
  const { image } = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.homeTop}></View>

      <ImageBackground
        source={require("../../../assets/images/grid.jpg")}
        style={styles.imageBackground}
      >
        {image && <ImageLoaded image={image} />}
      </ImageBackground>

      <BottomNav navigation={navigation} />
    </View>
  );
}
