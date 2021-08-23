import React, {
  useCallback,
  useMemo,
  createRef,
  useEffect,
} from 'react';
import Masonry, { createCellPositioner, MasonryCellProps } from 'react-virtualized/dist/commonjs/Masonry';
import CellMeasurer, { CellMeasurerCache } from 'react-virtualized/dist/commonjs/CellMeasurer';
import GridItem from './GridItem';
import { City } from '../types';
import NothingFound from './NothingFound';

interface DataGridProps {
  data: City[],
  height: number,
  width: number,
  scrollTop: number,
}

const columnWidth = 240;
const spacer = 16;

const DataGrid: React.FC<DataGridProps> = ({
  data,
  width,
  height,
  scrollTop,
}) => {
  const masonryRef = createRef<Masonry>();
  const cache = useMemo(() => (
    new CellMeasurerCache({
      defaultHeight: 136,
      defaultWidth: 240,
      fixedWidth: true,
      fixedHeight: false,
    })
  ), []);
  const columnCount = Math.floor(width / (columnWidth + spacer));
  const cellPositioner = useMemo(() => createCellPositioner({
    cellMeasurerCache: cache,
    columnCount,
    columnWidth,
    spacer,
  }), [cache]);
  const cellRenderer = useCallback(({
    key,
    style,
    index,
    parent,
  }: MasonryCellProps) => (
    <CellMeasurer
      cache={cache}
      index={index}
      key={key}
      parent={parent}
    >
      <GridItem
        adminName={data[index]?.adminName}
        city={data[index]?.city}
        columnWidth={columnWidth}
        population={data[index]?.population}
        style={style}
      />
    </CellMeasurer>
  ), [data, cache]);

  useEffect(() => {
    cache.clearAll();
    cellPositioner.reset({
      columnCount,
      columnWidth,
      spacer,
    });
    masonryRef.current?.clearCellPositions();
  }, [data, data.length, columnCount]);

  if (!data.length) {
    return (
      <div style={{ minWidth: columnWidth }}>
        <NothingFound />
      </div>
    );
  }

  return (
    <Masonry
      autoHeight
      cellCount={data.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={height}
      scrollTop={scrollTop}
      ref={masonryRef}
      width={width}
    />
  );
};

export default DataGrid;
