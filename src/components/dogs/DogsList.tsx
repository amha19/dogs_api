import { useEffect } from 'react';
import { Row, Col, Spin, Alert, Typography, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-custom-hooks';
import { fetchDogsBreed } from '../../store/dogs-action';
import { breedsAction } from '../../store/dogs-reducer';
import './DogsList.less';
import SingleDog from './single-dog/SingleDog';

const { Title } = Typography;

const DogsList = () => {
    const dispatch = useAppDispatch();
    const { dogBreeds, isLoading, error, name } = useAppSelector(
        (state) => state.breed
    );
    // const dogs = useSelector((state: RootState) => state.breed);

    useEffect(() => {
        dispatch(fetchDogsBreed());
    }, [dispatch]);

    const filteredDogs = [...dogBreeds].filter((dog) => {
        return dog.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });

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
            <Row gutter={[16, 32]} className="row">
                {filteredDogs.map((dog) => (
                    <Col key={dog.id} xs={24} sm={12} md={8}>
                        <SingleDog dogBreed={dog} />
                    </Col>
                ))}
            </Row>
            <Row justify="center">
                <Button
                    type="default"
                    onClick={() => dispatch(breedsAction.loadMoreDogs())}
                >
                    Load more dogs
                </Button>
            </Row>
        </>
    );
};

export default DogsList;
