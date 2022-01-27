// src/components/rtl-provider.js

import { useRouter } from 'next/router';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtl from 'stylis-plugin-rtl';

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: 'css-rtl', stylisPlugins: [rtl] },
  ltr: { key: 'css-ltr' },
};

export default function RtlProvider({ children }) {
  const { locale } = useRouter();
  const dir = locale == 'en' ? 'ltr' : 'rtl';
  const cache = createCache(options[dir]);
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
