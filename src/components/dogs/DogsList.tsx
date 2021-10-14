import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';

const fetchDogsBreed = async () => {
    try {
        const res = await axios.get(
            'https://api.thedogapi.com/v1/breeds?limit=5',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-ppi-key': '0e020774-9309-4b3f-9ac9-d036868570d3',
                },
            }
        );
        return res.data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

const DogsList = () => {
    const dogs = useSelector((state) => state);
    console.log('dogs: ', dogs);

    useEffect(() => {
        fetchDogsBreed()
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <Typography.Title>Row 2</Typography.Title>
        </div>
    );
};

export default DogsList;
