import {
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';

export const LAYOUT_SLICE = 'layout';

interface LayoutState {
  label: string;
  forms: string | null;
}

export const initialStoreState: LayoutState = {
  label: 'not loaded',
  forms: null,
};

export const layoutSlice = createSlice({
  name: LAYOUT_SLICE,
  initialState: initialStoreState,
  reducers: {
    updateLayout: (state, action: PayloadAction<string>) => {
      state.label = action.payload
    },
  }
});

export const { actions: layoutActions } = layoutSlice
export const { reducer: layoutReducer } = layoutSlice



