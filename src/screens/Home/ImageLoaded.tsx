import React, { useState } from "react";
import { View, Text, Image, ImageSourcePropType, FlatList } from "react-native";
import { styles } from "./HomeStyles";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PinchGesture,
  PinchGestureHandler,
  NativeViewGestureHandler,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";

type GesturePropTypes = {
  startX: number;
  startY: number;
};
export default function ImageLoaded({ image }: any) {
  //defendant cords
  const defXPosition = useSharedValue(0);
  const defYPosition = useSharedValue(0);

  //Plaintiff cords
  const plaXPosition = useSharedValue(0);
  const plaYPosition = useSharedValue(0);

  //Case cords
  const caseXPosition = useSharedValue(0);
  const caseYPosition = useSharedValue(0);

  //Court cords
  const courtXPosition = useSharedValue(0);
  const courtYPosition = useSharedValue(0);

  //Defendant gesture handler
  const defgestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx: GesturePropTypes) => {
      ctx.startX = defXPosition.value;
      ctx.startY = defYPosition.value;
    },
    onActive: (event, ctx) => {
      defXPosition.value = ctx.startX + event.translationX;
      defYPosition.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {},
  });

  //Plaintiff gesture handler
  const plagestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx: GesturePropTypes) => {
      ctx.startX = plaXPosition.value;
      ctx.startY = plaYPosition.value;
    },
    onActive: (event, ctx) => {
      plaXPosition.value = ctx.startX + event.translationX;
      plaYPosition.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {},
  });

  //Case gesture handler
  const casegestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx: GesturePropTypes) => {
      ctx.startX = caseXPosition.value;
      ctx.startY = caseYPosition.value;
    },
    onActive: (event, ctx) => {
      caseXPosition.value = ctx.startX + event.translationX;
      caseYPosition.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {},
  });

  //Court gesture handler
  const courtgestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx: GesturePropTypes) => {
      ctx.startX = courtXPosition.value;
      ctx.startY = courtYPosition.value;
    },
    onActive: (event, ctx) => {
      courtXPosition.value = ctx.startX + event.translationX;
      courtYPosition.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {},
  });

  //Defendant style

  const animatedBoxDef = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: defXPosition.value },
        { translateY: defYPosition.value },
      ],
      borderColor: "#d9f53d",
      backgroundColor: "rgba(217, 245, 61, 0.74)",
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
    };
  });

  const boxes = [
    {
      title: "Defendant",

      style: animatedBoxDef,
      gesture: defgestureHandler,
    },
    {
      title: "Plaintiff",
      style: animatedBoxPla,
      gesture: plagestureHandler,
    },
    {
      title: "Case Number",
      style: animatedBoxCase,
      gesture: casegestureHandler,
    },
    {
      title: "Court",
      style: animatedBoxCourt,
      gesture: courtgestureHandler,
    },
  ];

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchGestureFunction = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      console.log('PINCHSTARTED')
    },
    onEnd: (event) => {
      console.log("PINCHENDED");
    },
  });
    
    

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
            <PinchGestureHandler onGestureEvent={pinchGestureFunction} key={i}>
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
        {/* <AnimatedFlatList
          style={styles.flatList}
          data={boxes}
          horizontal
          renderItem={box}
          keyExtractor={(item) => item.backgroundColor}
        /> */}
      </View>
    </View>
  );
}
