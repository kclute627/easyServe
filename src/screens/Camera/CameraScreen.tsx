import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "../../../App.Provider";
import { View, Text, Pressable } from "react-native";
import { Camera } from "expo-camera";
import { styles } from "./CameraStyles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/Theme";

export default function CameraScreen({ navigation }: any) {
  const [hasPermission, setHasPermission] = useState<
    null | "granted" | "denied" | boolean
  >(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const appContext = useAppContext();

  const { handleLoading, handleSelectImage, loading } = appContext;

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const cameraRef = useRef(null);

  const takePhoto = async () => {
    handleLoading(true);

    try {
      let photo = await cameraRef.current.takePictureAsync();
      handleSelectImage(photo);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
    handleLoading(false);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.cameraTop} />
      <Camera style={styles.camera} ref={cameraRef}></Camera>
      <View style={styles.cameraBottom}>
        <Pressable
          onPress={takePhoto}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.3 : 1,
            },
            styles.camBtnView,
          ]}
        >
          <View style={styles.camBtn} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.3 : 1,
            },
            styles.backBtnView,
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons
            name="chevron-back-circle-outline"
            color={colors.white}
            size={45}
          />
        </Pressable>
      </View>
    </View>
  );
}
