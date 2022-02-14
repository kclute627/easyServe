import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./BottomNavStyles";

export default function BottomNav({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.middleIcon}>
        <Pressable
          onPress={() => navigation.navigate("Camera")}
          style={({ pressed }) => [
            {
              opacity: pressed ? .3 : 1,
            },
          ]}
        >
          <Ionicons name="camera-outline" size={40} color="white" />
        </Pressable>
      </View>
    </View>
  );
}
