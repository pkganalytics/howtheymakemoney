
import MyMenu from './myMenu';

import Head from 'next/head';

const Layout = props => <div>
    <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
    </Head>
    <div>
        <div>
            <MyMenu />
        </div>
        <div className="contentLayout">{props.children}</div>
    </div>
</div>;

export default Layout;
