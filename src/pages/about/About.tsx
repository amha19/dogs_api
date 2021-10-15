import { FC } from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const rowStyle = { height: 'calc(100vh - 204px)', width: 'auto' };

const About: FC = () => {
    return (
        <Row justify="center" style={rowStyle}>
            <Col span={14}>
                <Row justify="center">
                    <Title
                        level={2}
                        style={{
                            margin: '24px 0',
                        }}
                    >
                        About Us
                    </Title>
                </Row>
                <Paragraph style={{ textAlign: 'justify' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus in nulla ullamcorper, eleifend mi ut, lobortis
                    quam. Proin mollis iaculis diam eu aliquam. Morbi ut
                    tincidunt diam, ut ultricies nunc. Cras vitae arcu quam.
                    Integer fringilla laoreet ex ac varius. Suspendisse ut risus
                    finibus, pulvinar libero at, elementum massa. Nullam
                    interdum accumsan sem, eget varius orci bibendum vel.
                </Paragraph>
            </Col>
        </Row>
    );
};

export default About;
