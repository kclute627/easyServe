import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import { styles } from "./BottomNavStyles";

export default function BottomNav({
  navigation,
  openApi,
  image,
  data,
  loading
  
}: any) {
  const { defandant } = data;
  
  return (
    <View style={styles.container}>
      <View style={styles.middleIcon}>
        <Pressable
          onPress={() => navigation.navigate("Camera")}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.3 : 1,
            },
          ]}
        >
          <Ionicons name="camera-outline" size={40} color="white" />
        </Pressable>
      </View>
      <View style={styles.keyIcon}>
        <Pressable
          onPress={() => openApi((current: boolean) => !current)}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.3 : 1,
            },
          ]}
        >
          <Ionicons name="key" size={40} color="white" />
        </Pressable>
      </View>
      {image && (
        <Pressable
          disabled={!defandant}
          onPress={() => openApi((current: boolean) => !current)}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.3 : 1,
            },
            styles.submitBtnView,
          ]}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.submitText}>Add Job</Text>
          )}
        </Pressable>
      )}
    </View>
  );
}
