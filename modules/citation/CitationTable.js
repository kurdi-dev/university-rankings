import { useState, useEffect } from 'react';
import DataTable from '../../components/DataTable';
import { Box } from '@chakra-ui/react';
import Card from '../../components/Card';
import { krgUniversities } from '../../shared/krg-universities';

function CitationTable({ data }) {
  let rank = 1;
  let iqRank = 1;
  let krgRank = 1;
  const tableData = data.filter((uni, index) => {
    if (uni.country == 'Iraq') {
      uni.index = rank++;
      if (krgUniversities.includes(uni.university)) {
        uni.krgRank = krgRank++;
      } else {
        uni.iqRank = iqRank++;
      }
      return true;
    } else {
      return false;
    }
  });

  const headers = [
    { Header: 'Rank', accessor: 'index' },
    { Header: 'KRG Rank', accessor: 'krgRank' },
    { Header: 'IQ Rank', accessor: 'iqRank' },
    { Header: 'University', accessor: 'university', isNumeric: false },
    { Header: 'Country', accessor: 'country', isNumeric: false },
    { Header: 'Citations', accessor: 'citation', isNumeric: false },
  ];
  return (
    <Box overflowX='auto' mb={8}>
      <Card flexDirection='column' width='full'>
        <DataTable
          title={'Top Universities by Citations'}
          headers={headers}
          tableData={tableData}
        />
      </Card>
    </Box>
  );
}

export default CitationTable;
