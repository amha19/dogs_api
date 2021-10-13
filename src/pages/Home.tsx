import { FC, useEffect } from 'react';
import axios from 'axios';

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
    }
};

const Home: FC = () => {
    useEffect(() => {
        // fetchDogsBreed().then((data) => console.log('breeds list: ', data));
    }, []);
    return <div>Home page</div>;
};

export default Home;
