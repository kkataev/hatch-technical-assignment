import React, { useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table, { Column } from 'react-virtualized/dist/es/Table';
import { City } from '../types';
import TableRow from './TableRow';

interface DataTableProps {
  data: City[];
  height: number;
  width: number;
  scrollTop: number;
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  height,
  width,
  scrollTop,
}) => {
  const rowGetter = useCallback((index) => data[index], [data]);
  const headerRenderer = useCallback(({ label }) => (
    <Box>
      <Typography variant="h6">
        {label}
      </Typography>
    </Box>
  ), []);
  const rowRenderer = useCallback(({ key, style, index }) => (
    <TableRow
      key={key}
      adminName={data[index].adminName}
      city={data[index].city}
      population={data[index].population}
      style={style}
    />
  ), [data]);
  const cellDataGetter = useCallback(({ rowData }) => rowData, []);

  return (
    <Table
      autoHeight
      headerHeight={50}
      height={height}
      rowHeight={51}
      rowCount={data.length}
      rowRenderer={rowRenderer}
      rowGetter={rowGetter}
      rowStyle={{ display: 'flex' }}
      scrollTop={scrollTop}
      width={width}
    >
      <Column
        cellDataGetter={cellDataGetter}
        dataKey="city"
        headerRenderer={headerRenderer}
        headerStyle={{ display: 'inline-flex' }}
        label="City"
        minWidth={300}
        width={(width - 15) * (7 / 12)}
      />
      <Column
        cellDataGetter={cellDataGetter}
        dataKey="adminName"
        headerRenderer={headerRenderer}
        headerStyle={{ display: 'inline-flex' }}
        label="Admin Name"
        minWidth={100}
        width={(width - 15) * (3 / 12)}
      />
      <Column
        cellDataGetter={cellDataGetter}
        dataKey="population"
        headerRenderer={headerRenderer}
        headerStyle={{ display: 'inline-flex' }}
        label="Population"
        minWidth={100}
        width={(width - 15) * (2 / 12)}
      />
    </Table>
  );
};

DataTable.defaultProps = {
  width: 500,
};

export default DataTable;
