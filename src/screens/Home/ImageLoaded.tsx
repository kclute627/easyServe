import React, { useState } from "react";
import { View, Text, Image, ImageSourcePropType, FlatList } from "react-native";
import { styles } from "./HomeStyles";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PinchGestureHandler,
} from "react-native-gesture-handler";
import { panGesture, pinchGesture } from "./Helper";

export default function ImageLoaded({ image }: any) {
  //defendant shared Values
  const defXPosition = useSharedValue(0);
  const defYPosition = useSharedValue(0);
  const defHeight = useSharedValue(100);
  const defWidth = useSharedValue(150);

  //Plaintiff cords
  const plaXPosition = useSharedValue(0);
  const plaYPosition = useSharedValue(0);
  const plaHeight = useSharedValue(100);
  const plaWidth = useSharedValue(150);

  //Case cords
  const caseXPosition = useSharedValue(0);
  const caseYPosition = useSharedValue(0);
  const caseHeight = useSharedValue(100);
  const caseWidth = useSharedValue(150);

  //Court cords
  const courtXPosition = useSharedValue(0);
  const courtYPosition = useSharedValue(0);
  const courtHeight = useSharedValue(100);
  const courtWidth = useSharedValue(150);

  //Defendant style

  const animatedBoxDef = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: defXPosition.value },
        { translateY: defYPosition.value },
      ],
      borderColor: "#d9f53d",
      backgroundColor: "rgba(217, 245, 61, 0.74)",
      height: defHeight.value,
      width: defWidth.value,
    };
  });

  //Plaintiff Style

  const animatedBoxPla = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: plaXPosition.value },
        { translateY: plaYPosition.value },
      ],
      borderColor: "#08f77c",
      backgroundColor: "rgba(8, 247, 124, 0.68)",
      height: plaHeight.value,
      width: plaWidth.value,
    };
  });
  //Case Style

  const animatedBoxCase = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: caseXPosition.value },
        { translateY: caseYPosition.value },
      ],
      borderColor: "#0328ce",
      backgroundColor: "rgba(3, 40, 206, 0.78)",
      height: caseHeight.value,
      width: caseWidth.value,
    };
  });

  //Court Style

  const animatedBoxCourt = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: courtXPosition.value },
        { translateY: courtYPosition.value },
      ],
      borderColor: "#d16405",
      backgroundColor: "rgba(209, 100, 5, 0.64)",
      height: courtHeight.value,
      width: courtWidth.value,
    };
  });

  const boxes = [
    {
      title: "Defendant",
      style: animatedBoxDef,
      gesture: panGesture("Defendant", defXPosition, defYPosition),
      pinchGesture: pinchGesture(defHeight, defWidth),
    },
    {
      title: "Plaintiff",
      style: animatedBoxPla,
      gesture: panGesture("Plaintiff", plaXPosition, plaYPosition),
      pinchGesture: pinchGesture(plaHeight, plaWidth),
    },
    {
      title: "Case Number",
      style: animatedBoxCase,
      gesture: panGesture("Case", caseXPosition, caseYPosition),
      pinchGesture: pinchGesture(caseHeight, caseWidth),
    },
    {
      title: "Court",
      style: animatedBoxCourt,
      gesture: panGesture("Court", courtXPosition, courtYPosition),
      pinchGesture: pinchGesture(courtHeight, courtWidth),
    },
  ];

  return (
    <View style={styles.imageView}>
      <Image
        source={{ uri: image.uri }}
        style={styles.image}
        /// play with contain / cover
        resizeMode="cover"
      />
      <View style={styles.listView}>
        {boxes.map((item, i) => {
          return (
            <PinchGestureHandler onGestureEvent={item.pinchGesture} key={i}>
              <Animated.View>
                <PanGestureHandler onGestureEvent={item.gesture} key={i}>
                  <Animated.View style={[item.style, styles.box]}>
                    <Text>{item.title}</Text>
                  </Animated.View>
                </PanGestureHandler>
              </Animated.View>
            </PinchGestureHandler>
          );
        })}
      </View>
    </View>
  );
}
