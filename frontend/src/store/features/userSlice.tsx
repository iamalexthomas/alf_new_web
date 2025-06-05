
// src/store/features/userSlice.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: string;
  name: string;
  email: string;
  token: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}
const loadInitialState = (): UserState => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    return {
      user: storedUser ? JSON.parse(storedUser) : null,
      isAuthenticated: !!storedUser,
      loading: false,
    };
  }
  return { user: null, isAuthenticated: false, loading: false };
};

const initialState: UserState = loadInitialState();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
});

export default userSlice.reducer;

export const { setUser, setIsAuthenticated, setLoading, clearUser } = userSlice.actions;
