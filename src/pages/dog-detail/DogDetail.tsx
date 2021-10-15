import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Space, Image, Typography } from 'antd';
import { useAppSelector } from '../../hooks/redux-custom-hooks';
import { DogBreedsDetail } from '../../store/dogs-reducer';
import './DogDetail.less';

const { Text } = Typography;

const DogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const dogs = useAppSelector((state) => state.breed.dogBreeds);

    const dog = dogs.find((d) => d.id === Number(id)) as DogBreedsDetail;

    return (
        <Row align="middle" justify="center" className="detail-container">
            <Col xs={0} md={2} lg={5}></Col>
            <Col xs={24} md={20} lg={14}>
                <Row>
                    <Col>
                        <Space size={12}>
                            <Image
                                src={dog.image.url}
                                width={400}
                                height="auto"
                            />
                            <Col className="dog-detail-col">
                                <Space>
                                    <Text>Name: </Text>
                                    <Text>{dog.name}</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text>Bred for: </Text>
                                    <Text>{dog.bredFor}</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text>Breed group: </Text>
                                    <Text>
                                        {dog.breedGroup
                                            ? dog.breedGroup
                                            : 'Unavailable'}
                                    </Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text>Life span: </Text>
                                    <Text>{dog.lifeSpan}</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text>Temperament: </Text>
                                    <Text>{dog.temperament}</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text>Weight: </Text>
                                    <Text>{dog.weight.imperial} lb</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text>Height: </Text>
                                    <Text>{dog.height.imperial} feet</Text>
                                </Space>
                            </Col>
                        </Space>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} md={2} lg={5}></Col>
        </Row>
    );
};

export default DogDetail;
