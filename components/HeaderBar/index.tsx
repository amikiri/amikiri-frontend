import { Layout, Menu } from 'antd';
import Link from 'next/link';
const { Header } = Layout;

const HeaderBar: React.SFC = () => (
    <Header className="header">
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="1">
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link href='/support'>
                    <a>Support</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </Menu.Item>
        </Menu>
    </Header>
);

export default HeaderBar;