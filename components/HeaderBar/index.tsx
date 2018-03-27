import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import Link from 'next/link';
const { Header } = Layout;

import Profile from './Profile';

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
                    <a><Icon type="home" />Home</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link href='/support'>
                    <a><Icon type="solution" />Support</a>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link href='/contact'>
                    <a><Icon type="customer-service" />Contact</a>
                </Link>
            </Menu.Item>

            <div style={{ float: "right" }}>
                <Dropdown overlay={<Profile />} trigger={['click']}>
                    <span>
                        <Avatar size="small" />
                        <span>John Smith</span>
                    </span>
                </Dropdown>
            </div>
        </Menu>
    </Header >
);

export default HeaderBar;