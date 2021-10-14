import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

interface BreedState {
    dogs: string[];
}

const initialState: BreedState = {
    dogs: [],
};

const breedsSlice = createSlice({
    name: 'breed',
    initialState,
    reducers: {
        getDogBreeds: (state, action: PayloadAction<string[]>) => {
            state.dogs = action.payload;
        },
    },
});

export const breedsAction = breedsSlice.actions;
export default breedsSlice.reducer;
