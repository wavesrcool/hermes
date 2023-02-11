/* eslint-disable @typescript-eslint/explicit-function-return-type */

import HermesDrawerShape from "@hermes-web-shapes/hermes/drawer/HermesDrawerShape";
import RootShape from "@hermes-web-shapes/root/RootShape";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

export function makeStore() {
  return configureStore({
    reducer: {
      RootShape,

      HermesDrawerShape,
    },
  });
}

const store = makeStore();

export type TypesHermesShape = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TypesHermesShape,
  unknown,
  Action<string>
>;

export default store;
