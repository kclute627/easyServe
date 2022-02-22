import {
  useAnimatedGestureHandler,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { PinchGestureHandlerGestureEvent } from "react-native-gesture-handler";

type GesturePropTypes = {
  startX: number;
  startY: number;
};


export const panGesture = (title: string, xPosition: any, yPosition: any) => {
  return useAnimatedGestureHandler({
    onStart: (event, ctx: GesturePropTypes) => {
      ctx.startX = xPosition.value;
      ctx.startY = yPosition.value;
    },
    onActive: (event, ctx) => {
      xPosition.value = ctx.startX + event.translationX;
      yPosition.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {},
  });
};

export const pinchGesture = (height: any, width: any) => {
  const maxBoxHeight = 130;
  const minBoxHeight = 55;
  const maxBoxWidth = 300;
  const minBoxWidth = 55;
  return useAnimatedGestureHandler<
    PinchGestureHandlerGestureEvent,
    { startHeight: number; startWidth: number }
  >({
    onStart: (event, ctx) => {
      ctx.startHeight = height.value;
      ctx.startWidth = width.value;
    },

    onActive: (event, ctx) => {
      height.value = interpolate(
        event.scale,
        [0, 1, 2],
        [minBoxHeight, 100, maxBoxHeight],
        Extrapolate.CLAMP
      );
      width.value = interpolate(
        event.scale,
        [0, 1, 3],
        [minBoxWidth, 150, maxBoxWidth],
        Extrapolate.CLAMP
      );
    },
    onEnd: (event) => {},
  });
};
