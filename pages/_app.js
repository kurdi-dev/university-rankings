import { ChakraProvider } from '@chakra-ui/react';
import theme from '../shared/theme';
import RtlProvider from '../shared/rtl-provider';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <RtlProvider>
        <Component {...pageProps} />
      </RtlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
