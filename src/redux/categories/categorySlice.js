const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  categories: [],
  status: 'Under Construction',
};
const CategorySlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    isEmpty: (state) => state.status,
  },

});

export default CategorySlice.reducer;

export const { isEmpty } = CategorySlice.actions;
