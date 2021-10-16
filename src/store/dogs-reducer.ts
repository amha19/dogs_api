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
    height: {
        imperial: string;
        metric: string;
    };
    weight: {
        imperial: string;
        metric: string;
    };
}
export interface DogBreedsState {
    totalDogBreeds: DogBreedsDetail[];
    dogBreeds: DogBreedsDetail[];
    name: string;
    isLoading: boolean;
    error: string;
}

const initialState: DogBreedsState = {
    totalDogBreeds: [],
    dogBreeds: [],
    name: '',
    isLoading: true,
    error: '',
};

const dogBreedsSlice = createSlice({
    name: 'breed',
    initialState,
    reducers: {
        getDogBreeds: (state, action: PayloadAction<DogBreedsDetail[]>) => {
            state.totalDogBreeds = action.payload;
            state.dogBreeds = action.payload.slice(0, 50);
            state.isLoading = false;
            state.error = '';
            state.name = '';
        },
        loadMoreDogs: (state, action: PayloadAction<number>) => {
            if (action.payload === 1) {
                state.dogBreeds = state.totalDogBreeds.slice(0, 100);
            }
            if (action.payload === 2) {
                state.dogBreeds = state.totalDogBreeds.slice(0, 150);
            }
            if (action.payload > 2) {
                state.dogBreeds = state.totalDogBreeds;
            }
        },
        loadLessDogs: (state, action: PayloadAction<number>) => {
            if (action.payload === 3) {
                state.dogBreeds = state.totalDogBreeds.slice(0, 100);
            }
            if (action.payload === 4) {
                state.dogBreeds = state.totalDogBreeds.slice(0, 150);
            }
            if (action.payload === 2) {
                state.dogBreeds = state.totalDogBreeds.slice(0, 50);
            }
        },
        getByName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { getDogBreeds, loadMoreDogs, loadLessDogs, getByName, setError } =
    dogBreedsSlice.actions;
export default dogBreedsSlice.reducer;
