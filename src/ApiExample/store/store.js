import { configureStore } from "@reduxjs/toolkit";
import { postReducers } from "./reducers/postReducers";

const initialState = {
    posts:{
        post: [],
        loading:false,
        error:null,
    }
}

const store = configureStore({
    reducer:{
        posts: postReducers,
    },
    preloadedState: initialState,
})

export default store