import {withLayout} from '../lib/layout';

const Page = () => {
    return <p>Hello world</p>;
};

export default withLayout({ title: 'Index page' })(Page);