import { ComponentClass, SFC } from 'react';

import SiteLayout, { Props } from '../components/Layout';

export const withLayout = (props?: Props) => {
    return (WrappedComponent: ComponentClass | SFC) => {
        return () => (
            <SiteLayout {...props}>
                <WrappedComponent />
            </SiteLayout>
        );
    };
}