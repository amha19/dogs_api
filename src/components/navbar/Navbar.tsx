import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Typography, Row, Col } from 'antd';

const { Title } = Typography;

const Navbar = () => {
    return (
        <Row align="middle" justify="space-between">
            <Col>
                <Link to="/">
                    <Title level={3} style={{ color: '#fff', marginBottom: 0 }}>
                        The Dog Breeds
                    </Title>
                </Link>
            </Col>
            <Col>
                <Menu
                    mode="horizontal"
                    style={{
                        background: 'transparent',
                        color: '#fff',
                        border: 'none',
                    }}
                >
                    <Menu.Item key="home">
                        <NavLink to="/" style={{ color: 'inherit' }}>
                            Home
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <NavLink to="/about" style={{ color: 'inherit' }}>
                            About
                        </NavLink>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
};

export default Navbar;
