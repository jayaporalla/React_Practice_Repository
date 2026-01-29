import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter', //create type for below actions
    initialState, 
    reducers: {
        increment: state => {state.count = state.count + 1}, // => counter/increment // here it is mutating but under the hood 
        //it is acting as immer.js means it will not mutate the object. it will create immutable object.
        decrement: state => {state.count = state.count - 1} // => counter/decrement
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;