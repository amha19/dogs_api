import { FC } from 'react';
import { Col, Row } from 'antd';
import SearchForm from '../components/search/SearchForm';
import DogsList from '../components/dogs/DogsList';

const Home: FC = () => {
    return (
        <Row align="middle" justify="center">
            <Col xs={0} md={2} lg={5}></Col>
            <Col xs={24} md={20} lg={14}>
                <SearchForm />
                <DogsList />
            </Col>
            <Col xs={0} md={2} lg={5}></Col>
        </Row>
    );
};

export default Home;
