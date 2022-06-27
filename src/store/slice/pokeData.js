
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {}
}

export const pokeData = createSlice({
    name: 'pokeData',
    initialState,
    reducers: {
        guardarinfo: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { guardarinfo } = pokeData.actions;

export default pokeData.reducer;
