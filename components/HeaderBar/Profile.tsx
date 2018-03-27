import { Menu, Icon } from 'antd';

export default () => (
    <Menu>
        <Menu.Item>
            <Icon type="user" />My account
        </Menu.Item>
        <Menu.Item>
            <Icon type="setting" />Settings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Icon type="logout" />Log out
        </Menu.Item>
    </Menu>
);