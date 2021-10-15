import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Typography, Card } from 'antd';
import { DogBreedsDetail } from '../../../store/dogs-reducer';
const { Text } = Typography;
const { Meta } = Card;

const SingleDog: FC<{ dogBreeds: DogBreedsDetail[] }> = ({ dogBreeds }) => {
    const history = useHistory();

    return (
        <div>
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
        </div>
    );
};

export default SingleDog;
