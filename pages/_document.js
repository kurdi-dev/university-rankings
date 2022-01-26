import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../shared/theme';

export default class Document extends NextDocument {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === 'en' ? 'ltr' : 'rtl';
    return (
      <Html dir={dir} lang={locale}>
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
