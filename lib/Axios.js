import axios from 'axios';

const Axios = axios.create({
  headers: {
    Accept: '*/*',
    'Accept-Encoding': '*',
    Connection: 'keep-alive',
  },
});

export default Axios;
