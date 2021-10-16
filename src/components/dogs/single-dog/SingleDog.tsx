import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Card } from 'antd';
import { DogBreedsDetail } from '../../../store/dogs-reducer';
const { Text } = Typography;
const { Meta } = Card;

const SingleDog: FC<{ dogBreed: DogBreedsDetail }> = ({ dogBreed }) => {
    const history = useHistory();

    const {
        id,
        name,
        image: { url },
        bredFor,
    } = dogBreed;

    const desc = (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ minHeight: 45 }}>
                <Text>
                    <b>Breed Group: </b>
                    {bredFor ? bredFor : 'Unavailable'}
                </Text>
            </div>
            <Button
                type="primary"
                style={{ borderRadius: 4, marginTop: 12 }}
                onClick={() => history.push(`/dog/${id}`)}
            >
                I want to know more
            </Button>
        </div>
    );
    return (
        <div>
            <Card
                hoverable
                cover={
                    <div className="img-container">
                        <img alt={name} src={url} />
                    </div>
                }
            >
                <Meta title={name} description={desc} />
            </Card>
        </div>
    );
};

export default SingleDog;
