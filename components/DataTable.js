import React from 'react';
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
} from '@chakra-ui/react';
import {
  ExternalLinkIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';

function DataTable({ title, headers, tableData }) {
  const data = React.useMemo(() => tableData, [tableData]);
  const columns = React.useMemo(() => headers, [headers]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table variant='simple' size='sm' {...getTableProps()}>
      <TableCaption placement='top'>{title}</TableCaption>
      <Thead>
        {headerGroups.map((headerGroup, index) => (
          <Tr key={index} {...headerGroup.getHeaderGroupProps()}>
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
            <Tr key={rowIndex} {...row.getRowProps()}>
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
