import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useAppContext } from "../../../App.Provider";
import { Ionicons } from "@expo/vector-icons";
import { colors, SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Theme";
import { color } from "react-native-reanimated";

type ApiModalTypes = {
  openModalHandler: Dispatch<SetStateAction<boolean>>;
};

export default function ApiModal({ openModalHandler }: ApiModalTypes) {
  const { apiKey, saveApiKey } = useAppContext();

  const [apiText, apitextHandler] = useState<any>(apiKey);

  const saveAndClose = (value: string) => {
   
    saveApiKey(value);
    openModalHandler(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.apiContainer}>
        <Text style={styles.header}>API Key</Text>
        <View style={styles.inputView}>
          <Ionicons
            name="key"
            color={colors.blue}
            size={30}
            style={styles.keyIcon}
          />
          <TextInput
            style={styles.input}
            value={apiText}
            onChangeText={(newText) => apitextHandler(newText)}
            placeholderTextColor={"#7d7d7deb"}
            placeholder="Enter your API Key"
          />
        </View>
        <View style={styles.btnView}>
          <Pressable
            onPress={ () => saveAndClose(apiText)}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
              },
              styles.btn,
            ]}
          >
            <Text style={styles.btnText}>Save</Text>
          </Pressable>
          {/* <Pressable>
            <Text>Cancel</Text>
          </Pressable> */}
        </View>

        <View style={styles.apiFooter}>
          <Text style={styles.apiFooter2}>Find your Servemanager API Key</Text>
          <Text style={styles.apiFooter1}>
            My Account &gt; Settings &gt; API Keys &gt; New API Key
          </Text>
        </View>
      </View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    backgroundColor: "rgba(92, 92, 92, 0.7)",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  apiContainer: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 135,
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    color: "black",
  },
  apiFooter: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  apiFooter1: {
    fontSize: 15,
    color: colors.blue,
    marginBottom: 5,
  },
  apiFooter2: {
    fontSize: 20,
    color: colors.black,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 290,
    margin: 15,
    borderWidth: 1,

    borderRadius: 15,
    fontSize: 25,
    color: colors.black,
    paddingLeft: 40,
    paddingRight: 10,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
  },
  keyIcon: {
    position: "absolute",
    left: 22,
  },
  btnView: {
    margin: 5,
  },
  btn: {
    borderRadius: 25,

    width: 145,

    backgroundColor: colors.blue,
    padding: 20,
    alignItems: "center",
  },
  btnText: {
    color: colors.white,
    fontSize: 20,
  },
});
