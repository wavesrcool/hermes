/* eslint-disable @next/next/no-css-tags */

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const DESCRIPTION = ``;

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes document
 * @notes [ ]
 *
 */
class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link href={"https://hermes.art/"} rel={"canonical"} />
          <meta property={"title"} content={"Hermes"} />
          <meta name={"description"} content={DESCRIPTION} />
          <meta property={"author"} content={"Hermes"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
