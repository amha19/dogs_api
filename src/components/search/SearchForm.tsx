import { Row, Typography, Input, Col } from 'antd';
import { useAppDispatch } from '../../hooks/redux-custom-hooks';
import { getByName } from '../../store/dogs-reducer';
import './SearchForm.less';

const { Text } = Typography;

const SearchForm = () => {
    const dispatch = useAppDispatch();
    return (
        <Row justify="center" style={{ marginTop: 24 }}>
            <Col className="colStyle">
                <Text strong style={{ color: '#fff' }}>
                    Search Your Favorite Dog Breed
                </Text>
                <Input
                    placeholder="e.g. Afghan Hound"
                    style={{ marginTop: 6 }}
                    onChange={(event) =>
                        dispatch(getByName(event.target.value))
                    }
                />
            </Col>
        </Row>
    );
};

export default SearchForm;
