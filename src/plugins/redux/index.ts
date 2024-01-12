// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Redux Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Middleware error
import { rtkQueryErrorLogger } from "./middleware";

// Reducer
import { reducers } from "./combineReducer";

// Config for Redux Persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["home"],
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rtkQueryErrorLogger),
});

// Persist Store
const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };

// App Store
export type TRootState = ReturnType<typeof store.getState>;

// Root State
export type TRootDispatch = typeof store.dispatch;
