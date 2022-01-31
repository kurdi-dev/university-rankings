import fetch from 'make-fetch-happen';
import { tmpdir } from 'os';

const fetcher = async (url) =>
  fetch(url, {
    cachePath: '../.next/cache',
  })
    .then((res) => res.text())
    .catch((err) => {
      console.log(err);
    });

export default fetcher;
