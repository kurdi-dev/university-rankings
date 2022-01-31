const cheerio = require('cheerio');
import fetch from 'node-fetch';

import MainLayout from '../layout/main';
import RankingTable from '../modules/ranking/RankingTable';
import { Center, Spinner, Text, VStack } from '@chakra-ui/react';

import Axios from '../lib/Axios';

import { krgUniversities } from '../shared/krg-universities';
const webometric_url = 'https://www.webometrics.info';

async function extractRankingElements(htmlData) {
  const $ = cheerio.load(htmlData);
  const trArray = $('tr').toArray();
  let elements = [];
  trArray.forEach((tr) => {
    tr.children.forEach((td) => {
      let child =
        td.children?.children?.children?.children ||
        td.children?.children?.children ||
        td.children?.children ||
        td.children;
      if ($(child).text().length > 0) {
        elements.push($(child).text());
      }
      if ($(child).attr('href')) {
        elements.push($(child).attr('href'));
      }
    });
  });
  elements.splice(0, 13);
  return elements;
}

async function makeUniversitiesJson() {
  const universities = [];

  // generating university data from each page from htmlData arguments
  for (var i = 0; i < arguments.length; i++) {
    let elements = await extractRankingElements(arguments[i]);
    for (let index = 0; index < elements.length; index += 8) {
      universities.push({
        rank: elements[index],
        world_rank: elements[index + 1],
        name: elements[index + 2],
        website: elements[index + 3],
        webometric_url: webometric_url + elements[index + 4],
        impact_rank: elements[index + 5],
        openness_rank: elements[index + 6],
        excellence_rank: elements[index + 7],
      });
    }
  }
  return universities;
}

export const getStaticProps = async (ctx) => {
  const htmlData = await fetch('https://www.webometrics.info/en/aw/Iraq', {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'same-origin',
  })
    .then((res) => res.text())
    .catch((err) => {
      console.log(err);
    });

  // for page 2
  const htmlData_p2 = await fetch(
    'https://www.webometrics.info/en/aw/iraq?page=1',
    {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    }
  )
    .then((res) => res.text())
    .catch((err) => {
      console.log(err);
    });

  let universities = await makeUniversitiesJson(htmlData, htmlData_p2);
  let iqRank = 1;
  let krgRank = 1;
  const universitiesData = universities.map((uni) => {
    if (krgUniversities.includes(uni.name)) {
      uni.krgRank = krgRank++;
    } else {
      uni.iqRank = iqRank++;
    }
    return uni;
  });
  return {
    props: {
      data: universitiesData || null,
    },
    revalidate: 21600, //revalidate after 6 hours
  };
};

export default function Ranking({ data, loading }) {
  return (
    <MainLayout title={'University Rankings'}>
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
        <RankingTable data={data} />
      )}
    </MainLayout>
  );
}
