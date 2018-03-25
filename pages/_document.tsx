import Document, { Head, Main, NextScript } from 'next/document'

class SiteDocument extends Document {
    render() {
        const main = <Main />;
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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