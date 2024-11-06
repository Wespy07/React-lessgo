import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload;
        })
    }
})

export default todoSlice.reducer