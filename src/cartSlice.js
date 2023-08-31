import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalNumberOfItems: 0, // Add the totalNumberOfItems field
  },
  reducers: {
    addToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.item.id === item.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ item, quantity });
      }

      state.totalNumberOfItems += quantity; // Update totalNumberOfItems
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const removedItem = state.items.find((cartItem) => cartItem.item.id === id);

      if (removedItem) {
        state.totalNumberOfItems -= removedItem.quantity; // Update totalNumberOfItems
        state.items = state.items.filter((cartItem) => cartItem.item.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalNumberOfItems = 0; // Reset totalNumberOfItems
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.item.id === id);
      if (existingItem) {
        state.totalNumberOfItems += quantity - existingItem.quantity; // Update totalNumberOfItems
        existingItem.quantity = quantity;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
