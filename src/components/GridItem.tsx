import React, { CSSProperties, memo } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { City } from '../types';
import { formatNumber } from '../utils/formatter';

type GridItemProps = City & {
  style?: CSSProperties,
  columnWidth: number,
};

const GridItem: React.FC<GridItemProps> = ({
  adminName,
  city,
  columnWidth,
  style,
  population,
}) => (
  <Box paddingBottom={2} style={{ ...style, width: columnWidth }}>
    <Card>
      <CardContent>
        <Typography variant="h6">
          {city}
        </Typography>
        <Typography variant="body2">
          Admin Name:&nbsp;
          {adminName}
          <br />
          Population:&nbsp;
          {formatNumber(population)}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default memo(GridItem);
