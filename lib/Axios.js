const axios = require('axios');
const axiosRetry = require('axios-retry');

const Axios = axios.create({
  headers: {
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'max-age=0',
    'sec-ch-ua':
      '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    cookie:
      '_ga=GA1.2.1582717810.1643303424; _referrer_og=https%3A%2F%2Fwww.google.com%2F; _jsuid=63633320; has_js=1; _gid=GA1.2.1083242853.1643490482; __cflb=0H28v41CmaTo6mL86R9GodJisLvFbRdjSr8QDzS3Bam; sc_is_visitor_unique=rx1575219.1643497349.06B23C9A8FED4F36ABDA36D37A03DA3B.3.3.2.2.2.2.2.2.2; _gat=1; _first_pageview=1; no_tracky_66633556=1',
    Connection: 'keep-alive',
  },
});

const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

axiosRetry(Axios, {
  retries: 2,
  retryDelay,
  // retry on Network Error & 5xx responses
  retryCondition: axiosRetry.isRetryableError,
});

export default Axios;
