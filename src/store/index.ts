import { configureStore } from '@reduxjs/toolkit';
import dogBreedsSlice from './dogs-reducer';

const store = configureStore({
    reducer: { breed: dogBreedsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
