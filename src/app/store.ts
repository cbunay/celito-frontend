import { configureStore } from '@reduxjs/toolkit';
import { LAYOUT_SLICE, layoutReducer } from '../slices/layout.slice';


export const store = configureStore({
  reducer: { [LAYOUT_SLICE]: layoutReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
