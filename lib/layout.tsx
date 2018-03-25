import { ComponentClass, SFC } from 'react';

import Layout from '../components/Layout';

export const withLayout = (LayoutComponent: ComponentClass | SFC = Layout) => {
    return (WrappedComponent: ComponentClass | SFC) => {
        return () => (
            <LayoutComponent>
                <WrappedComponent />
            </LayoutComponent>
        );
    };
}