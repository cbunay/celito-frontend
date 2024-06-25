import {
  PayloadAction,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';
import { Layout } from '../types/layout.interface';
import { Section } from '../types/section.interface';

export const LAYOUT_SLICE = 'layout';

export const initialStoreState: Layout = {
  label: '',
  viewType: '',
  sections: [],
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
    updateSections: (state, action: PayloadAction<string[]>) => {
      const sections: Section[] = action.payload.map(s => ({
        id: nanoid(),
        label: s
      }))
      state.sections = sections
    },
  }
});

export const { updateLabel, updateViewType } = layoutSlice.actions
export const { reducer: layoutReducer } = layoutSlice



