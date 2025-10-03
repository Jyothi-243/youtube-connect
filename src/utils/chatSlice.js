import { createSlice } from "@reduxjs/toolkit";
import {OFF_SET_LIVE_CHAT} from './constants';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(OFF_SET_LIVE_CHAT,1);
            state.messages.unshift(action.payload); //unshift will add to the first of the array and push will add to the last of the array. 
        }
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;