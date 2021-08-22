import React, {
  useRef,
  useCallback,
} from 'react';
import AutoSizer, { Size } from 'react-virtualized/dist/commonjs/AutoSizer';
import { WindowScroller } from 'react-virtualized/dist/commonjs/WindowScroller';
import DataGrid from './DataGrid';
import DataTable from './DataTable';
import { City, ViewMode } from '../types';

interface DataListProps {
  data: City[],
  viewMode: ViewMode,
}

const DataList: React.FC<DataListProps> = ({ viewMode, data }) => {
  const heightRef = useRef<number>(1);
  const scrollTopRef = useRef<number>(0);
  const renderList = useCallback(({ width }: Size) => (
    viewMode === ViewMode.Grid ? (
      <DataGrid
        data={data}
        height={heightRef.current}
        scrollTop={scrollTopRef.current}
        width={width}
      />
    ) : (
      <DataTable
        data={data}
        height={heightRef.current - 200}
        scrollTop={scrollTopRef.current}
        width={width}
      />
    )
  ), [data, viewMode]);

  return (
    <WindowScroller overscanByPixels={100}>
      {({ height, scrollTop }) => {
        heightRef.current = height;
        scrollTopRef.current = scrollTop;

        return (
          <AutoSizer scrollTop={scrollTopRef.current}>
            {renderList}
          </AutoSizer>
        );
      }}
    </WindowScroller>
  );
};

export default DataList;
