import { useEffect } from 'react';
import { Row, Col, Card, Spin, Alert, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-custom-hooks';
import { fetchDogsBreed } from '../../store/dogs-action';

const { Meta } = Card;

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
                style={{ marginTop: 50 }}
            />
        );
    }

    return (
        <>
            <Row justify="center">
                <Typography.Title level={3} style={{ margin: '56px 0 32px 0' }}>
                    Dogs
                </Typography.Title>
            </Row>
            <Row gutter={[16, 32]} style={{ margin: '32px 0', minWidth: 450 }}>
                {dogBreeds.map((dogBreed) => {
                    return (
                        <Col key={dogBreed.id} xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                cover={
                                    <div
                                        style={{
                                            height: '275px',
                                            width: 'auto',
                                        }}
                                    >
                                        <img
                                            alt={dogBreed.name}
                                            src={dogBreed.image.url}
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>
                                }
                            >
                                <Meta
                                    title={dogBreed.name}
                                    description={
                                        dogBreed.breedGroup
                                            ? dogBreed.breedGroup
                                            : 'Not Available'
                                    }
                                />
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default DogsList;
