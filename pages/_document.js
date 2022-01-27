import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../shared/theme';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // locale is in ctx.locale
    return { ...initialProps, locale: ctx?.locale || 'en' };
  }
  render() {
    return (
      <Html
        dir={this.props.locale === 'en' ? 'ltr' : 'rtl'}
        lang={this.props.locale}
      >
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
