const cheerio = require('cheerio');
import fetch from 'node-fetch';
import MainLayout from '../layout/main';
import CitationTable from '../modules/citation/CitationTable';
import { Spinner, Center, VStack, Text } from '@chakra-ui/react';

import Axios from '../lib/Axios';

async function extractCitationsElements(htmlData) {
  const $ = cheerio.load(htmlData);
  const trArray = $('tr').toArray();
  let elements = [];
  trArray.forEach((tr) => {
    if (tr.children.length == 6) {
      tr.children.forEach((td) => {
        let child =
          td.children?.children?.children?.children ||
          td.children?.children?.children ||
          td.children?.children ||
          td.children;
        if ($(child).text().length > 0) {
          elements.push($(child).text());
        }
      });
    }
  });
  elements.splice(0, 3);
  return elements;
}

async function makeCitationsJson() {
  const citations = [];
  // generating university data from each page from htmlData arguments
  for (var i = 0; i < arguments.length; i++) {
    let elements = await extractCitationsElements(arguments[i]);
    for (let index = 0; index < elements.length; index += 3) {
      citations.push({
        university: elements[index],
        country: elements[index + 1],
        citation: elements[index + 2],
      });
    }
  }
  return citations;
}

export const getStaticProps = async (ctx) => {
  const htmlData = await fetch('https://www.webometrics.info/en/transparent', {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then((res) => res.text())
    .catch((err) => {
      console.log(err);
    });

  if (!htmlData) {
    return {
      loading: true,
    };
  }
  const $ = cheerio.load(htmlData);
  let version = $('strong:contains("version")').text();
  let citationsData = await makeCitationsJson(htmlData);
  return {
    props: {
      version,
      data: citationsData,
    },
    revalidate: 21600, //revalidate after 6 hours
  };
};

export default function citation({ version, data, loading }) {
  return (
    <MainLayout title={'Citations Ranking'}>
      {loading ? (
        <Center h='90vh'>
          <VStack>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='teal.500'
              size='xl'
            />
            <Text>Data is loading ... Refresh the page!</Text>
          </VStack>
        </Center>
      ) : (
        <CitationTable data={data} />
      )}
    </MainLayout>
  );
}
