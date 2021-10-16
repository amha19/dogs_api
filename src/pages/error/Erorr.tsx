import { FC } from 'react';
import { Row, Empty, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import './Error.less';

const Erorr: FC = () => {
    const history = useHistory();
    return (
        <Row justify="center" className="error">
            <Empty
                description="Ops it's a deadend!"
                imageStyle={{ height: 140 }}
                style={{ color: '#fff' }}
            >
                <Button type="primary" onClick={() => history.push('/')}>
                    Go Back
                </Button>
            </Empty>
        </Row>
    );
};

export default Erorr;
