import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface SearchSlice {
  searchString: string;
}

const initialState: SearchSlice = {
  searchString: "",
};

export const searchSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setSearchString: (
      state,
      action: PayloadAction<SearchSlice["searchString"]>,
    ) => {
      state.searchString = action.payload;
    },
  },
});

export const { setSearchString } = searchSlice.actions;

export const selectSearch = (state: RootState) =>
  state.searchParams.searchString;

const SearchReducer = searchSlice.reducer;
export default SearchReducer;
