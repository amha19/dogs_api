import { useEffect } from 'react';
import { Row, Spin, Alert, Typography, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-custom-hooks';
import { fetchDogsBreed } from '../../store/dogs-action';
import './DogsList.less';
import SingleDog from './single-dog/SingleDog';

const { Title } = Typography;

const DogsList = () => {
    const dispatch = useAppDispatch();
    const dogBreeds = useAppSelector((state) => state.breed.dogBreeds);
    const isLoading = useAppSelector((state) => state.breed.isLoading);
    const error = useAppSelector((state) => state.breed.error);
    // const dogs = useSelector((state: RootState) => state.breed);

    useEffect(() => {
        dispatch(fetchDogsBreed());
    }, [dispatch]);

    if (isLoading) {
        return (
            <Row justify="center" align="middle" style={{ margin: '150px 0' }}>
                <Spin size="large" />
            </Row>
        );
    }

    if (error) {
        return (
            <Alert
                message={error}
                type="error"
                banner
                style={{ marginTop: 50, marginBottom: 'calc(100vh - 435px)' }}
            />
        );
    }

    return (
        <>
            <Row justify="center">
                <Title level={3} className="title">
                    Dogs
                </Title>
            </Row>
            <SingleDog dogBreeds={dogBreeds} />
            <Row justify="center">
                <Button type="default">Load more dogs</Button>
            </Row>
        </>
    );
};

export default DogsList;
