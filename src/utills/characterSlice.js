import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "char",
  initialState: {
    character: [],
  },
  reducers: {
    addCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});
export const { addCharacter } = characterSlice.actions;
export default characterSlice.reducer;
