import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
    reducer: {
        posts: postReducer,
        counter: counterReducer,

    }
});

export default store;