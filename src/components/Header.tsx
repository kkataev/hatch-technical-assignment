import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Header: React.FC = () => (
  <Box component="header" paddingBottom={3} paddingTop={2}>
    <Typography variant="h2">
      Dutch cities
    </Typography>
  </Box>
);

export default Header;
