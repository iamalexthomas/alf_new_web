// src/store/features/cartSlice.tsx
"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  product: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  uploadedImage?: string | string[];
}

interface CartState {
  cartItems: CartItem[];
  shippingInfo: Record<string, any>;
  uploadedImages: Record<string, string[]>;
  selectedDesigns: Record<string, any>;
  quantityChange: { isIncreasing: boolean; timestamp: number };
}

const initialState: CartState = {
  cartItems: [],
  shippingInfo: {},
  uploadedImages: {},
  selectedDesigns: {},
  quantityChange: { isIncreasing: false, timestamp: 0 },
};

if (typeof window !== "undefined") {
  initialState.cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [];
  initialState.shippingInfo = localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo")!)
    : {};
  initialState.uploadedImages = localStorage.getItem("uploadedImages")
    ? JSON.parse(localStorage.getItem("uploadedImages")!)
    : {};
  initialState.selectedDesigns = localStorage.getItem("selectedDesigns")
    ? JSON.parse(localStorage.getItem("selectedDesigns")!)
    : {};
}

const saveToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.product === item.product);

      if (isItemExist) {
        // Update quantity if item exists
        state.cartItems = state.cartItems.map((i) =>
          i.product === item.product
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        // Add new item
        state.cartItems.push(item);
      }
      saveToLocalStorage("cartItems", state.cartItems);
    },
    updateCartItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.product === item.product);

      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i.product === isItemExist.product ? { ...i, ...item } : i
        );
      } else {
        state.cartItems.push(item);
      }
      saveToLocalStorage("cartItems", state.cartItems);
    },
    setCartItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.product === item.product);

      if (isItemExist) {
        const uploadedImageCount = Array.isArray(isItemExist.uploadedImage)
          ? isItemExist.uploadedImage.length
          : isItemExist.uploadedImage
          ? 1
          : 0;
        if (isItemExist.quantity === uploadedImageCount) {
          state.cartItems = state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          );
        }
      } else {
        state.cartItems.push(item);
      }
      saveToLocalStorage("cartItems", state.cartItems);
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.product !== productId);
      delete state.uploadedImages[productId];
      saveToLocalStorage("cartItems", state.cartItems);
      saveToLocalStorage("uploadedImages", state.uploadedImages);
    },
    saveShippingInfo: (state, action: PayloadAction<Record<string, any>>) => {
      state.shippingInfo = action.payload;
      saveToLocalStorage("shippingInfo", state.shippingInfo);
    },
    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("uploadedImages");
      localStorage.removeItem("selectedDesigns");
      state.cartItems = [];
      state.uploadedImages = {};
      state.selectedDesigns = {};
    },
    setSelectedDesign: (
      state,
      action: PayloadAction<{ productId: string; design: any }>
    ) => {
      const { productId, design } = action.payload;
      if (!state.selectedDesigns) {
        state.selectedDesigns = {};
      }
      state.selectedDesigns[productId] = design;
      saveToLocalStorage("selectedDesigns", state.selectedDesigns);
    },
    resetSelectedDesign: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      delete state.selectedDesigns[productId];
      saveToLocalStorage("selectedDesigns", state.selectedDesigns);
    },
    setUploadedImage: (
      state,
      action: PayloadAction<{ productId: string; uploadedImage: string | string[] }>
    ) => {
      const { productId, uploadedImage } = action.payload;
      if (!state.uploadedImages[productId]) {
        state.uploadedImages[productId] = [];
      }
      if (Array.isArray(uploadedImage)) {
        state.uploadedImages[productId] = [
          ...state.uploadedImages[productId],
          ...uploadedImage,
        ];
      } else {
        state.uploadedImages[productId].push(uploadedImage);
      }
      saveToLocalStorage("uploadedImages", state.uploadedImages);
    },
    resetUploadedImage: (state, action: PayloadAction<{ productId: string }>) => {
      const { productId } = action.payload;
      const isInCart = state.cartItems.some((item) => item.product === productId);
      if (isInCart) {
        state.cartItems = state.cartItems.filter((i) => i.product !== productId);
        saveToLocalStorage("cartItems", state.cartItems);
      }
      delete state.uploadedImages[productId];
      saveToLocalStorage("uploadedImages", state.uploadedImages);
    },
    removeUploadedImage: (
      state,
      action: PayloadAction<{ productId: string; imageIndex: number }>
    ) => {
      const { productId, imageIndex } = action.payload;
      if (state.uploadedImages[productId]) {
        state.uploadedImages[productId] = state.uploadedImages[productId].filter(
          (_, index) => index !== imageIndex
        );
        if (state.uploadedImages[productId].length === 0) {
          delete state.uploadedImages[productId];
        }
        saveToLocalStorage("uploadedImages", state.uploadedImages);
      }
    },
    mergeCartData: (state) => {
      state.cartItems = state.cartItems.map((item) => ({
        ...item,
        selectedDesign: state.selectedDesigns[item.product] || null,
        uploadedImages: state.uploadedImages[item.product] || [],
      }));
      saveToLocalStorage("cartItems", state.cartItems);
    },
    setQuantityChange: (
      state,
      action: PayloadAction<{ isIncreasing: boolean }>
    ) => {
      const { isIncreasing } = action.payload;
      state.quantityChange = {
        isIncreasing,
        timestamp: Date.now(),
      };
      saveToLocalStorage("quantityChange", state.quantityChange);
    },
    removeCartItemUploadedImage: (
      state,
      action: PayloadAction<{ productId: string; imageIndex: number }>
    ) => {
      const { productId, imageIndex } = action.payload;
      const cartItem = state.cartItems.find((item) => item.product === productId);
      if (cartItem && Array.isArray(cartItem.uploadedImage)) {
        if (cartItem.uploadedImage.length > 1) {
          cartItem.uploadedImage = cartItem.uploadedImage.filter(
            (_, index) => index !== imageIndex
          );
        }
        saveToLocalStorage("cartItems", state.cartItems);
      }
    },
  },
});

export default cartSlice.reducer;

export const {
  addToCart, // Added new action
  setCartItem,
  removeCartItem,
  saveShippingInfo,
  clearCart,
  updateCartItem,
  setSelectedDesign,
  resetSelectedDesign,
  setUploadedImage,
  resetUploadedImage,
  removeUploadedImage,
  mergeCartData,
  setQuantityChange,
  removeCartItemUploadedImage,
} = cartSlice.actions;