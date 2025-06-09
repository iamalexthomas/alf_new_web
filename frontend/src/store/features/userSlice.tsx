import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  token?: string; // Make token optional since it might not always be present
}

interface UserState {
  user: User | null;
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
}

// Load initial state from localStorage if available
const loadFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    try {
      const savedState = localStorage.getItem('authState');
      if (savedState) {
        return JSON.parse(savedState);
      }
    } catch (error) {
      console.error('Error loading auth state from localStorage:', error);
    }
  }
  return {
    user: null,
    token: "",
    isAuthenticated: false,
    loading: false,
  };
};

const initialState: UserState = loadFromLocalStorage();

// Save state to localStorage
const saveToLocalStorage = (state: UserState) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem('authState', JSON.stringify({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: false, // Don't persist loading state
      }));
    } catch (error) {
      console.error('Error saving auth state to localStorage:', error);
    }
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {    setUser(state, action: PayloadAction<User & { token?: string }>) {
      state.user = {
        id: action.payload.id,
        name: action.payload.name || "",
        email: action.payload.email || "",
        token: action.payload.token,
      };
      // Also set the token in the separate token field if provided
      if (action.payload.token) {
        state.token = action.payload.token;
      }
      saveToLocalStorage(state);
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      saveToLocalStorage(state);
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
      saveToLocalStorage(state);
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      // Don't save loading state to localStorage
    },
    clearUser(state) {
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
      state.loading = false;
      // Clear from localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem('authState');
      }
    },
  },
});

export const { setUser, setToken, setIsAuthenticated, setLoading, clearUser } = userSlice.actions;
export default userSlice.reducer;