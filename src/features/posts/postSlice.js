import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await axios.get(URL);
    return res.data;
})

const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.payload;
        });

    }
});

// export const { reducer: postReducer, actions: postActions } = postSlice.actions;

export default postSlice.reducer;