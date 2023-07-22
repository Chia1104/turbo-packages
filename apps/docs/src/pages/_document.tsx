import Document, {
  type DocumentContext,
  type DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class WebDoc extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="acme-background">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WebDoc;
