import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {}
});

export const { } = todoSlice.actions;

export default todoSlice.reducer;