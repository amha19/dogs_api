import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DogBreedsDetail {
    bredFor: string;
    breedGroup: string;
    id: number;
    image: {
        imgId: string;
        url: string;
    };
    lifeSpan: string;
    name: string;
    origin: string;
    temperament: string;
}
export interface DogBreedsState {
    dogBreeds: DogBreedsDetail[];
    isLoading: boolean;
    error: string;
}

const initialState: DogBreedsState = {
    dogBreeds: [],
    isLoading: true,
    error: '',
};

const dogBreedsSlice = createSlice({
    name: 'breed',
    initialState,
    reducers: {
        getDogBreeds: (state, action: PayloadAction<DogBreedsDetail[]>) => {
            state.dogBreeds = action.payload;
            state.isLoading = false;
            state.error = '';
        },
        setError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const breedsAction = dogBreedsSlice.actions;
export default dogBreedsSlice.reducer;
