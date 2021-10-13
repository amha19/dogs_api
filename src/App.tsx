import { FC } from 'react';
import { Layout, Typography } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Error from './pages/error/Erorr';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

const App: FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Header
                    style={{
                        color: '#fff',
                    }}
                >
                    <Navbar />
                </Header>
                <Content style={{ padding: '24px 0', backgroundColor: '#fff' }}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route path="*" component={Error} />
                    </Switch>
                </Content>
                <Footer>
                    <Text>
                        Want to know more about The Dog API:{' '}
                        <a
                            href="https://www.thedogapi.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Yep!
                        </a>
                    </Text>
                    <br />
                    <a
                        href="https://www.github.com/amha19"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source Code
                    </a>
                </Footer>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
