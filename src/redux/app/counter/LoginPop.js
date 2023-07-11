import { createSlice } from "@reduxjs/toolkit";
const initialStateCount = { popUpIsOpen: false, Login: false, profile_data: 'recent_order' };
export const PopUpSlice = createSlice({
    name: "LoginPopUp",
    initialState: initialStateCount,
    reducers: {
        IsOpen: (state) => {
            state.popUpIsOpen = !state.popUpIsOpen
        },
        IsLogedIn: (state) => {
            console.log("login function");
            state.Login = !state.Login
        },
        Profile_data: (state, actions) => {
            console.log("button working function");
            state.profile_data = actions.payload
        },
    },
});

export const { IsOpen, IsLogedIn, Profile_data } = PopUpSlice.actions;

export default PopUpSlice.reducer;
