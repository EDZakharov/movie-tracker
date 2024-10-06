import {
  Action,
  combineSlices,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';

export const RootReducer = combineSlices({});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type appThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
