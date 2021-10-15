import React from 'react';
import { useParams } from 'react-router-dom';

const SingleDog = () => {
    const { id } = useParams<{ id: string }>();

    console.log('id ', id, typeof id);

    return <div></div>;
};

export default SingleDog;
