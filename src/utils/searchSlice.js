import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            // state = { ...action.payload, ...state }; //merge the payload and the state .(merging the 2 objects)
            state = Object.assign(state, action.payload);

        },
    },
});

export const {cacheResults} = searchSlice.actions;


export default searchSlice.reducer; //  we have to export the reducers and actions. 

//here we are storing like {"ip":["iphone","iphone11"]}