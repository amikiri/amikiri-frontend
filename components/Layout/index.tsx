import Head from 'next/head'

import "../../styles.scss"
import Header from '../Header';


export interface Props {
  title: string;
}

const Layout: React.SFC<Props> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>

    <main>
      <Header />
      {children}
    </main>
  </div>
);

export default Layout;