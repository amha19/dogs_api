import { Row, Typography, Input, Col } from 'antd';
import './SearchForm.less';

const { Text } = Typography;

const SearchForm = () => {
    return (
        <Row justify="center" style={{ marginTop: 24 }}>
            <Col className="colStyle">
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
