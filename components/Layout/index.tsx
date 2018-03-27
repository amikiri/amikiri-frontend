import Head from 'next/head'
import { Layout, Breadcrumb } from 'antd';
const { Content } = Layout;

import "../../styles.scss"
import HeaderBar from '../HeaderBar';
import FooterBar from '../FooterBar';
import ProductFilter from '../ProductFilter';

export interface Props {
  title: string;
}

const SiteLayout: React.SFC<Props> = ({ children, title }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>

    <HeaderBar />
    <Layout hasSider>
      <ProductFilter />

      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <main>
            {children}
          </main>
        </Content>
      </Layout>
    </Layout>

    <FooterBar />
  </Layout>
);

export default SiteLayout;