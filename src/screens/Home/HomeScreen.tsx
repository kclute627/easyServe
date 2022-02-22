import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text } from "react-native";
import { RootStackParamList, RootTabScreenProps } from "../../../types";
import { useAppContext } from "../../../App.Provider";
import BottomNav from "../../components/BottomNav/BottomNav";
import { styles } from "./HomeStyles";
import ImageLoaded from "./ImageLoaded";
import ApiModal from "./ApiModal";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"Camera">) {
  const { image, apiKey, loading, data } = useAppContext();

  const [apiKeyOpen, setApiKeyOpen] = useState(false);

  useEffect(() => {
    if (apiKey == null && !loading) {
      return setApiKeyOpen(true);
    }
  }, [apiKey, loading]);

  return (
    <View style={styles.container}>
      <View style={styles.homeTop}></View>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <ImageBackground
          source={require("../../../assets/images/grid.jpg")}
          style={styles.imageBackground}
        >
          {apiKeyOpen && <ApiModal openModalHandler={setApiKeyOpen} />}

          {image && <ImageLoaded image={image} />}
        </ImageBackground>
      )}

      <BottomNav
        navigation={navigation}
        openApi={setApiKeyOpen}
        image={image}
        data={data}
        loading={loading}
      />
    </View>
  );
}
