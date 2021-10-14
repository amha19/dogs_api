import { FC, useEffect } from 'react';
import axios from 'axios';
import { Col, Row, Typography } from 'antd';
import SearchForm from '../components/search/SearchForm';
import DogsList from '../components/dogs/DogsList';

const Home: FC = () => {
    return (
        <Row align="middle" justify="center">
            <Col xs={0} md={2} lg={5}></Col>
            <Col xs={24} md={20} lg={14}>
                <Row justify="center">
                    <Col>
                        <SearchForm />
                        <DogsList />
                    </Col>
                </Row>
            </Col>
            <Col xs={0} md={2} lg={5}></Col>
        </Row>
    );
};

export default Home;
