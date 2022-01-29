module.exports = {
  locales: ['en', 'ckb', 'ar'],
  defaultLocale: 'en',
  localeDetection: true,
  pages: {
    '*': ['common'],
    '/': ['home'],

    // when other pages added, Add their locale json file here.
  },
  // rest of config here...
};
