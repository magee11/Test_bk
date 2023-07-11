import { createSlice } from "@reduxjs/toolkit";
const initialStateCount = { AddPopup: false };
export const AddItemsPopUp = createSlice({
    name: "AddItemsPopUp",
    initialState: initialStateCount,
    reducers: {
        addpopup: (state) => {
            state.AddPopup = !state.AddPopup
        },
    },
});

export const { addpopup } = AddItemsPopUp.actions;

export default AddItemsPopUp.reducer;
