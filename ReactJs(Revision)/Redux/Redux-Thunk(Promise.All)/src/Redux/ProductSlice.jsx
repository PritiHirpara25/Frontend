import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const [todos, user, posts, albums, comments] = await Promise.all([
        await axios.get('https://jsonplaceholder.typicode.com/todos'),
        await axios.get('https://jsonplaceholder.typicode.com/users'),
        await axios.get('https://jsonplaceholder.typicode.com/posts'),
        await axios.get('https://jsonplaceholder.typicode.com/albums'),
        await axios.get('https://jsonplaceholder.typicode.com/comments')
    ])
    return {
        todos: todos.data,
        user: user.data,
        posts: posts.data,
        albums: albums.data,
        comments: comments.data
    }
})

const ProductSlice = createSlice({
    name: "products",
    initialState: {
        todos: [],
        user: [],
        posts: [],
        albums: [],
        comments: [],
        status: 'idle'
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.todos = action.payload.todos
                state.user = action.payload.user
                state.posts = action.payload.posts
                state.albums = action.payload.albums
                state.comments = action.payload.comments

            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed"
            })
    }
})

export default ProductSlice.reducer