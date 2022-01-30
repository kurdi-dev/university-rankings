import React, { useState, useCallback } from 'react';
import {
  chakra,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Link,
  Text,
  Stack,
} from '@chakra-ui/react';

import {
  ExternalLinkIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';

const ROWS_PER_PAGE = 10;

function DataTable({ title, headers, tableData }) {
  const data = React.useMemo(() => tableData, [tableData]);
  const columns = React.useMemo(() => headers, [headers]);

  const [search, setSearch] = useState();
  const [pagination, setPagination] = useState({
    page: 0,
    rowsPerPage: ROWS_PER_PAGE,
  });

  const handlePagination = useCallback(({ pageSize, pageIndex }) => {
    setPagination({ page: pageIndex, rowsPerPage: pageSize });
  }, []);

  const handleSearch = (searchText) => {
    console.log('search', searchText);
    setSearch(searchText);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table variant='simple' size='sm' {...getTableProps()}>
      <TableCaption placement='top'>
        <Text fontSize='md' fontWeight='bold'>
          {title}
        </Text>
      </TableCaption>
      <Thead>
        {headerGroups.map((headerGroup, index) => (
          <Tr
            key={index}
            {...headerGroup.getHeaderGroupProps()}
            borderBottom='4px'
            borderColor='teal.700'
          >
            {headerGroup.headers.map((column, index) => (
              <Th
                key={index}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render('Header')}
                <chakra.span pl='4'>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label='sorted descending' />
                    ) : (
                      <TriangleUpIcon aria-label='sorted ascending' />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <Tr
              key={rowIndex}
              {...row.getRowProps()}
              borderBottom='2px'
              borderColor='teal.700'
            >
              {row.cells.map((cell, tdIndex) => (
                <Td
                  key={tdIndex}
                  {...cell.getCellProps()}
                  isNumeric={cell.column.isNumeric}
                >
                  {cell.column.isUrl ? (
                    <Link href={cell.value} isExternal>
                      <ExternalLinkIcon color={'teal.600'} />
                    </Link>
                  ) : (
                    cell.render('Cell')
                  )}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default DataTable;
