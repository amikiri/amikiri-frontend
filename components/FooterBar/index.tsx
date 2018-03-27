import { Layout } from 'antd';
const { Footer } = Layout;

const FooterBar: React.SFC = () => (
    <Footer style={{ textAlign: 'center' }}>
        Copyright {new Date().getFullYear()}
    </Footer>
);

export default FooterBar;