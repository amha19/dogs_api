import React from 'react';
import { Row, Typography, Input, Col } from 'antd';

const { Text } = Typography;

const SearchForm = () => {
    return (
        <Row justify="center">
            <Col
                style={{
                    width: '500px',
                    padding: 28,
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    boxShadow: '2px 3px 11px rgba(0,0,0,0.2)',
                }}
            >
                <Text strong>Search Your Favorite Dog Breed</Text>
                <Input
                    placeholder="e.g. Afghan Hound"
                    style={{ marginTop: 6 }}
                />
            </Col>
        </Row>
    );
};

export default SearchForm;
