import { configureStore, Reducer } from '@reduxjs/toolkit';
import breedsSlice from './breeds';

const store = configureStore({
    reducer: { breed: breedsSlice },
});

export default store;
