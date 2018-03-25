import { ComponentClass, SFC } from 'react';

import Layout, { Props } from '../components/Layout';

export const withLayout = (props?: Props) => {
    return (WrappedComponent: ComponentClass | SFC) => {
        return () => (
            <Layout {...props}>
                <WrappedComponent />
            </Layout>
        );
    };
}