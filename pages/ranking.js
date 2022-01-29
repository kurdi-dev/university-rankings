const cheerio = require('cheerio');
import MainLayout from '../layout/main';
import RankingTable from '../modules/ranking/RankingTable';

import { krgUniversities } from '../shared/krg-universities';
const webometric_url = 'https://www.webometrics.info';

async function extractElements(htmlData) {
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
    let elements = await extractElements(arguments[i]);
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
  const res = await fetch('https://www.webometrics.info/en/aw/Iraq');
  const htmlData = await res.text();
  // for page 2
  const res_p2 = await fetch('https://www.webometrics.info/en/aw/iraq?page=1');
  const htmlData_p2 = await res_p2.text();
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

export default function Ranking({ data }) {
  return (
    <MainLayout title={'University Rankings'}>
      <RankingTable data={data} />
    </MainLayout>
  );
}
