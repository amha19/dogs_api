import axios from 'axios';
import { AppDispatch } from './index';
import { getDogBreeds, setError, DogBreedsDetail } from './dogs-reducer';

export const fetchDogsBreed = () => async (dispatch: AppDispatch) => {
    const breeds: DogBreedsDetail[] = [];

    try {
        const res = await axios.get('https://api.thedogapi.com/v1/breeds', {
            headers: {
                'Content-Type': 'application/json',
                'x-ppi-key': `${process.env.API_KEY}`,
            },
        });

        for (let breed of res.data as any[]) {
            const {
                bred_for,
                breed_group,
                id,
                image: { id: imgId, url },
                life_span,
                name,
                origin,
                temperament,
                height,
                weight,
            } = breed;

            breeds.push({
                bredFor: bred_for,
                breedGroup: breed_group,
                id,
                image: {
                    imgId,
                    url,
                },
                lifeSpan: life_span,
                name,
                origin,
                temperament,
                height,
                weight,
            });
        }

        dispatch(getDogBreeds(breeds));
    } catch (err: any) {
        console.log(err);
        dispatch(setError(err.message));
    }
};
