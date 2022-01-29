import axios from 'axios';

const Axios = axios.create({
  headers: {
    Accept: '*/*',
    'Accept-Encoding': '*',
    Connection: 'keep-alive',
    'User-Agent': 'Axios- console app',
  },
});

export default Axios;
