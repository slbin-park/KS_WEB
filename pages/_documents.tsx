
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import '../styles/globals.tsx';

// styled-components running code for next js
class CustomDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
    render() {
        return (
            <Html>
            <Head>
            </Head>
            <body>
                <Main/>
                <NextScript/>
                <div id = "portal"/>
            </body>
            </Html>
        );
    }
}

export default CustomDocument;