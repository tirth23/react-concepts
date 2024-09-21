import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";

export let mystore = configureStore({
	reducer: {
		user: userReducer,
	},
});
