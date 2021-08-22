import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { City } from '../types';
import { formatNumber } from '../utils/formatter';

type TableRowProps = City & {
  style: {[key: string]: string|number },
};

const useStyles = makeStyles({
  cityItem: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    minWidth: '100%',
    width: 'content-fit',
  },
});

const TableRow: React.FC<TableRowProps> = ({
  style,
  city,
  population,
  adminName,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.cityItem} container style={style}>
      <Grid xs={12} sm={7} item>
        <Box paddingY={2}>
          {city}
        </Box>
      </Grid>
      <Grid sm={3} item>
        <Box paddingY={2}>
          {adminName}
        </Box>
      </Grid>
      <Grid sm={2} item>
        <Box paddingY={2}>
          {formatNumber(population)}
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(TableRow);
