import { TypesHermesShape } from "@hermes-web-shapes/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TypesShapesHermesDrawerShapeThread = "root";

export type TypesShapesHermesDrawerShapeValue = {
  entracte: boolean;
  inverse: boolean;
  thread: TypesShapesHermesDrawerShapeThread | "";
  //
  // shape type map HermesDrawerShape
  //

  visible: boolean;
};

export type TypesShapesHermesDrawerShape = {
  value: TypesShapesHermesDrawerShapeValue;
};

const initialState: TypesShapesHermesDrawerShape = {
  value: {
    entracte: false,
    inverse: false,
    thread: "",
    //
    // shape initial HermesDrawerShape
    //

    visible: false,
  },
};

export const HermesDrawerShapeSlice = createSlice({
  name: "HermesDrawerShape",
  initialState,
  reducers: {
    initHermesDrawerShape: (state) => {
      state.value = initialState.value;
    },

    writeHermesDrawerShapeEntracteTrue: (state) => {
      state.value = {
        ...state.value,
        entracte: true,
      };
    },

    writeHermesDrawerShapeEntracteFalse: (state) => {
      state.value = {
        ...state.value,
        entracte: false,
      };
    },

    writeHermesDrawerShapeInverseTrue: (
      state,
      action: PayloadAction<TypesShapesHermesDrawerShapeThread>
    ) => {
      state.value = {
        ...state.value,
        inverse: true,
        thread: action.payload,
      };
    },

    writeHermesDrawerShapeInverseFalse: (state) => {
      state.value = {
        ...state.value,
        inverse: false,
        thread: "",
      };
    },

    //
    // shape definitions HermesDrawerShape
    //

    writeHermesDrawerShapeVisibleToggle: (state) => {
      state.value = {
        ...state.value,
        visible: !state.value.visible,
      };
    },
  },
});

export const {
  initHermesDrawerShape,
  writeHermesDrawerShapeEntracteTrue,
  writeHermesDrawerShapeEntracteFalse,
  writeHermesDrawerShapeInverseTrue,
  writeHermesDrawerShapeInverseFalse,
  //
  // shape library HermesDrawerShape
  //
  writeHermesDrawerShapeVisibleToggle,
} = HermesDrawerShapeSlice.actions;

export const ofHermesDrawerShape = (
  state: TypesHermesShape
): TypesShapesHermesDrawerShapeValue => state.HermesDrawerShape.value;
export default HermesDrawerShapeSlice.reducer;
