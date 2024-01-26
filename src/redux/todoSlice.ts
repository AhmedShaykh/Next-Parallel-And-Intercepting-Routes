import { createSlice, nanoid } from "@reduxjs/toolkit";

type Todo = {
    id: string | number;
    text: any;
};

type TodoState = {
    todos: Todo[];
};

const initialState: TodoState = {
    todos: [
        { id: 1, text: "Hello World" }
    ]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        updateTodo: (state, action) => {
            const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id);
            if (todoToUpdate) todoToUpdate.text = action.payload.text;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
});

export const {
    addTodo,
    updateTodo,
    removeTodo
} = todoSlice.actions;

export default todoSlice.reducer;