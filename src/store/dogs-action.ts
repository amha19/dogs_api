import axios from 'axios';
import { AppDispatch } from './index';
import { breedsAction } from './dogs-reducer';

export const fetchDogsBreed = () => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(
            'https://api.thedogapi.com/v1/breeds?limit=5',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-ppi-key': `${process.env.API_KEY}`,
                },
            }
        );

        dispatch(breedsAction.getDogBreeds(res.data as any[]));
    } catch (err) {
        console.log(err);
        return err;
    }
};
