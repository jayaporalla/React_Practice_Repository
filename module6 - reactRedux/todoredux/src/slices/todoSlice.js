import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteToDo: (state, action) => {
            state.todos = state.todos.filter(state => state.id !== action.payload);
        }
    }
})

export const { addToDo, deleteToDo } = todoSlice.actions;

export default todoSlice.reducer;