import fetch from 'node-fetch';
const fetcher = async (url) =>
  fetch(url, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      Host: 'www.webometrics.info',
      'Alt-Used': 'www.webometrics.info',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      DNT: 1,
      'Upgrade-Insecure-Requests': 1,
      ' Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      ' Sec-Fetch-Site': 'none',
      ' Sec-Fetch-User': '?1',
      Connection: 'keep-alive',
    },
  })
    .then((res) => res.text())
    .catch((err) => {
      console.log(err);
    });

export default fetcher;
