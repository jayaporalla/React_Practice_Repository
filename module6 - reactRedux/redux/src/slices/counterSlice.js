import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter', //create type for below actions
    initialState, 
    reducers: {
        increment: state => {state.count = state.count + 1}, // => counter/increment
        decrement: state => {state.count = state.count - 1} // => counter/decrement
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;