import React from 'react';
import { Typography, Input } from 'antd';

const { Text } = Typography;

const SearchForm = () => {
    return (
        <div
            style={{
                minWidth: '500px',
                padding: 28,
                border: '1px solid #ccc',
                borderRadius: 4,
                boxShadow: '2px 3px 11px rgba(0,0,0,0.2)',
            }}
        >
            <Text strong>Search Your Favorite Dog Breed</Text>
            <Input placeholder="e.g. Afghan Hound" style={{ marginTop: 6 }} />
        </div>
    );
};

export default SearchForm;
