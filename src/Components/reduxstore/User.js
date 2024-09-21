import { createSlice } from "@reduxjs/toolkit";

let userslice = createSlice({
	name: "user",
	initialState: {
		value: {
			name: "sachin",
			email: "sachin@gmail.com",
		},
	},
	reducers: {
		login: (state, action) => {
			state.value = action.payload;
		},
		logout: (state, action) => {
			state.value = { name: "", email: "" };
		},
	},
});

export const { login, logout } = userslice.actions;
export default userslice.reducer;
