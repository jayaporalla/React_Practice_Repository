import { configureStore } from '@reduxjs/toolkit';
import { postSlice } from '../Slice/postSlice';

export const store = configureStore({
    reducer: {
        posts: postSlice.reducer
    }
})