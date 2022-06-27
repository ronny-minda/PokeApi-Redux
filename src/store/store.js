
import { configureStore } from '@reduxjs/toolkit';
import pokeData from './slice/pokeData';


export const store = configureStore({
    reducer: {
        pokeData
    }
})