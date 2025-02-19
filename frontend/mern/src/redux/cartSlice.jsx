import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false, // Ensure this property exists
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartDrawer(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleCartDrawer } = cartSlice.actions;
export default cartSlice.reducer;