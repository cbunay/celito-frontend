import {
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';
import { Layout } from '../types/layout.interface';

export const LAYOUT_SLICE = 'layout';

export const initialStoreState: Layout = {
  label: '',
  viewType: '',
};

export const layoutSlice = createSlice({
  name: LAYOUT_SLICE,
  initialState: initialStoreState,
  reducers: {
    updateLabel: (state, action: PayloadAction<string>) => {
      state.label = action.payload
    },
    updateViewType: (state, action: PayloadAction<string>) => {
      state.viewType = action.payload
    },
  }
});

export const { updateLabel, updateViewType } = layoutSlice.actions
export const { reducer: layoutReducer } = layoutSlice



