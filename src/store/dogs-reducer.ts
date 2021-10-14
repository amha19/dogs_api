import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DogBreedsState {
    dogBreeds: any[];
}

const initialState: DogBreedsState = {
    dogBreeds: [],
};

const dogBreedsSlice = createSlice({
    name: 'breed',
    initialState,
    reducers: {
        getDogBreeds: (state, action: PayloadAction<any[]>) => {
            state.dogBreeds = action.payload;
        },
    },
});

export const breedsAction = dogBreedsSlice.actions;
export default dogBreedsSlice.reducer;
