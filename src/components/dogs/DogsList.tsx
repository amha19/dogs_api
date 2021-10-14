import { useEffect } from 'react';
import { Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-custom-hooks';
import { fetchDogsBreed } from '../../store/dogs-action';

const DogsList = () => {
    const dispatch = useAppDispatch();
    const dogBreeds = useAppSelector((state) => state.breed);
    // const dogs = useSelector((state: RootState) => state.breed);
    console.log('dogs: ', dogBreeds);

    useEffect(() => {
        dispatch(fetchDogsBreed());
    }, [dispatch]);

    return (
        <div>
            <Typography.Title>Row 2</Typography.Title>
        </div>
    );
};

export default DogsList;
