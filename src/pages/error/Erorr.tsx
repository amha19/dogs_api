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
                image="data:image/png;base64,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"
                imageStyle={{ height: 140 }}
            >
                <Button type="primary" onClick={() => history.push('/')}>
                    Go Back
                </Button>
            </Empty>
        </Row>
    );
};

export default Erorr;
