import Document, { Head, Main, NextScript } from 'next/document'

class SiteDocument extends Document {
    render() {
        const main = <Main />;
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <body>
                    {main}
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default SiteDocument;