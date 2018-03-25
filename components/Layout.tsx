import Head from 'next/head'

export interface Props {
  title: string;
}

const Layout: React.SFC<Props> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>

    <main>
      {children}
    </main>
  </div>
)

export default Layout;