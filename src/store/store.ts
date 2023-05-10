import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  currentWeatherSliceReducer from "./slices/currentWeatherSlice";
import currentTimeSliceReducer from "./slices/currentTimeSlice";
import weekWeatherSliceReducer from "./slices/weekWeatherSlice"
const rootReducer = combineReducers({
    currentWeatherSliceReducer,
    currentTimeSliceReducer,
weekWeatherSliceReducer
  
  });
  
  export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  export type AppStore = typeof store;
  export type AppDispatch = AppStore['dispatch'];
