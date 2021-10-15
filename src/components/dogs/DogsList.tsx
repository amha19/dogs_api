import { useEffect } from 'react';
import { Row, Col, Card, Spin, Alert, Typography, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-custom-hooks';
import { fetchDogsBreed } from '../../store/dogs-action';
import './DogsList.less';

const { Title, Text } = Typography;
const { Meta } = Card;

const DogsList = () => {
    const history = useHistory();
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
                <Title level={3} className="title">
                    Dogs
                </Title>
            </Row>
            <Row gutter={[16, 32]} className="row">
                {dogBreeds.map((dogBreed) => {
                    const desc = (
                        <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ minHeight: 45 }}>
                                <Text>
                                    <b>Breed Group: </b>
                                    {dogBreed.bredFor
                                        ? dogBreed.bredFor
                                        : 'Unavailable'}
                                </Text>
                            </div>
                            <Button
                                type="primary"
                                style={{ borderRadius: 4, marginTop: 12 }}
                                onClick={() =>
                                    history.push(`/dog/${dogBreed.id}`)
                                }
                            >
                                I want to know more
                            </Button>
                        </div>
                    );
                    return (
                        <Col key={dogBreed.id} xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                cover={
                                    <div className="img-container">
                                        <img
                                            alt={dogBreed.name}
                                            src={dogBreed.image.url}
                                        />
                                    </div>
                                }
                            >
                                <Meta
                                    title={dogBreed.name}
                                    description={desc}
                                />
                            </Card>
                        </Col>
                    );
                })}
            </Row>
            <Row justify="center">
                <Button type="default">Load more dogs</Button>
            </Row>
        </>
    );
};

export default DogsList;
