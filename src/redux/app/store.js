import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/Cart';
import popupReducer from './counter/LoginPop'
import addpopupReducer from './counter/AddPopUp';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    popup: popupReducer,
    additem: addpopupReducer
  },
})