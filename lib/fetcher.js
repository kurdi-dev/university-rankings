import fetch from 'node-fetch';
import URL from 'url';
import HttpsProxyAgent from 'https-proxy-agent';

function getProxy(url) {
  const parsedProxyURL = URL.parse(url);
  parsedProxyURL.secureProxy = parsedProxyURL.protocol === 'https:';
  return parsedProxyURL;
}

const fetcher = async (url) =>
  fetch(url, {
    headers: { host: URL.parse(url).host },
    withCredentials: false,
    // agent: new HttpsProxyAgent(getProxy(proxy)),
  })
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .catch((err) => {
      console.log(err);
    });

export default fetcher;
