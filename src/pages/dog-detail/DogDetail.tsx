import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col, Space, Image, Typography, Button, Spin } from 'antd';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-custom-hooks';
import { DogBreedsDetail } from '../../store/dogs-reducer';
import { fetchDogsBreed } from '../../store/dogs-action';
import './DogDetail.less';

const { Text } = Typography;

const DogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const dispatch = useAppDispatch();
    const dogs = useAppSelector((state) => state.breed.dogBreeds);

    useEffect(() => {
        if (dogs.length === 0) {
            dispatch(fetchDogsBreed());
        }
    }, [dogs, dispatch]);

    if (dogs.length === 0) {
        return (
            <Row justify="center" align="middle" style={{ margin: '150px 0' }}>
                <Spin size="large" />
            </Row>
        );
    }

    const dog = dogs.find((d) => d.id === Number(id)) as DogBreedsDetail;

    return (
        <Row justify="center" className="detail-container">
            <Col xs={0} md={2} lg={5}></Col>
            <Col xs={24} md={20} lg={14}>
                <Row justify="center" style={{ margin: '32px 0' }}>
                    <Button
                        type="primary"
                        onClick={() => history.push('/')}
                        className="back-btn"
                    >
                        Go Back
                    </Button>
                </Row>
                <Row>
                    <Col>
                        <Space size={24}>
                            <Image
                                src={dog.image.url}
                                width={400}
                                placeholder={
                                    <Image
                                        preview={false}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                        width={400}
                                    />
                                }
                                style={{
                                    borderRadius: 6,
                                }}
                            />
                            <Col className="dog-detail-col">
                                <Space>
                                    <Text strong>Name: </Text>
                                    <Text>{dog.name}</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text strong>Bred for: </Text>
                                    <Text>{dog.bredFor}</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text strong>Breed group: </Text>
                                    <Text>
                                        {dog.breedGroup
                                            ? dog.breedGroup
                                            : 'Unavailable'}
                                    </Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text strong>Life span: </Text>
                                    <Text>{dog.lifeSpan}</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text strong>Temperament: </Text>
                                    <Text>{dog.temperament}</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text strong>Weight: </Text>
                                    <Text>{dog.weight.imperial} lb</Text>
                                </Space>
                                <br />
                                <Space>
                                    <Text strong>Height: </Text>
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
