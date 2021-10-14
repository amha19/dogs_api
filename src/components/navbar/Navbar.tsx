import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Typography, Row, Col } from 'antd';
import './Navbar.less';

const { Title } = Typography;

const Navbar = () => {
    return (
        <Row align="middle" justify="space-between">
            <Col span={4}></Col>
            <Col span={16}>
                <Row
                    align="middle"
                    justify="space-between"
                    style={{ padding: 0 }}
                >
                    <Col>
                        <Link to="/">
                            <Title level={3} className="header-title">
                                The Dog Breeds
                            </Title>
                        </Link>
                    </Col>
                    <Col>
                        <Menu mode="horizontal" className="menu">
                            <Menu.Item key="home">
                                <NavLink to="/" style={{ color: 'inherit' }}>
                                    Home
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <NavLink
                                    to="/about"
                                    style={{ color: 'inherit' }}
                                >
                                    About
                                </NavLink>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Col>
            <Col span={4}></Col>
        </Row>
    );
};

export default Navbar;
