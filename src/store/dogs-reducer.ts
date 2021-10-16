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
    page: number;
}

const initialState: DogBreedsState = {
    totalDogBreeds: [],
    dogBreeds: [],
    name: '',
    isLoading: true,
    error: '',
    page: 0,
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
            state.page++;
        },
        loadMoreDogs: (state) => {
            if (state.page === 1) {
                state.dogBreeds = state.totalDogBreeds.slice(0, 100);
                state.page++;
            }
            if (state.page === 2) {
                state.dogBreeds = state.totalDogBreeds.slice(0, 150);
                state.page++;
            }
            if (state.page === 3) {
                state.dogBreeds = state.totalDogBreeds;
                state.page++;
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

export const breedsAction = dogBreedsSlice.actions;
export default dogBreedsSlice.reducer;
