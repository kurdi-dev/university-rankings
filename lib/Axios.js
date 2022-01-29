import axios from 'axios';

const Axios = axios.create({
  headers: {
    Accept: '*/*',
    'Accept-Encoding': '*',
    Connection: 'keep-alive',
    'User-Agent': 'axios/0.25.0',
  },
});

export default Axios;
