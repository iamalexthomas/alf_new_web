
// src/store/store.tsx
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/features/cartSlice";
import userReducer from "../store/features/userSlice";
import { authApi } from "../store/api/authApi";
import { orderApi } from "../store/api/orderApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, orderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
