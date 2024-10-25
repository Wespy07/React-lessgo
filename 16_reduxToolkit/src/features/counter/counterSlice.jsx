import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, action) => {
            state.value = state.value * Number(action.payload)
            // below code can be used if you dont want to show the numbers in 'e' format, below code will show them as absolute numbers
            // state.value = (Number(state.value) * Number(action.payload)).toLocaleString('fullwide', { useGrouping: false });
        },
    },
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer