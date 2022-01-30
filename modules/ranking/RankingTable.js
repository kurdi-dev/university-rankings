import { useState, useEffect, useCallback } from 'react';
import DataTable from '../../components/DataTable';
import { Box } from '@chakra-ui/react';
import Card from '../../components/Card';

function RankingTable({ data }) {
  const headers = [
    { Header: 'Ranking', accessor: 'rank', isNumeric: false },
    { Header: 'KRG Rank', accessor: 'krgRank', isNumeric: false },
    { Header: 'IQ Rank', accessor: 'iqRank', isNumeric: false },
    { Header: 'World Rank', accessor: 'world_rank', isNumeric: false },
    { Header: 'University', accessor: 'name', isNumeric: false },
    { Header: 'Website', accessor: 'website', isNumeric: false, isUrl: true },
    // {
    //   Header: 'Webometric URL',
    //   accessor: 'webometric_url',
    //   isNumeric: false,
    //   isUrl: true,
    // },
    { Header: 'Impact Rank', accessor: 'impact_rank', isNumeric: false },
    { Header: 'Openness Rank', accessor: 'openness_rank', isNumeric: false },
    {
      Header: 'Excellence Rank',
      accessor: 'excellence_rank',
      isNumeric: false,
    },
  ];
  return (
    <Box overflowX='auto' mb={8}>
      <Card>
        <DataTable
          title={'IRAQI University Rankings'}
          headers={headers}
          tableData={data}
        />
      </Card>
    </Box>
  );
}

export default RankingTable;
