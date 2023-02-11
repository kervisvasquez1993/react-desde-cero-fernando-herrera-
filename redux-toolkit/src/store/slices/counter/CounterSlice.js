import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 10,
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        incremetBy : (state, action) => {
          console.log(action)
          state.counter += action.payload
        } 
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incremetBy } = counterSlice.actions;

// export default counterSlice.reducer
