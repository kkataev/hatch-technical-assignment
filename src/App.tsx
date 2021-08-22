import React, { useState, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import ViewModes from './components/ViewModes';
import DataList from './components/DataList';
import { ViewMode, City } from './types';
import searchCities from './data';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.List);
  const [list, setList] = useState<City[]>(searchCities());
  const onSearch = useCallback((term: string) => {
    setList(searchCities(term));
  }, []);

  return (
    <Container>
      <Box paddingBottom={3}>
        <Header />
        <Grid
          alignItems="flex-end"
          container
          direction="row"
          spacing={2}
        >
          <Grid xs={12} sm item>
            <SearchInput onSearch={onSearch} />
          </Grid>
          <Grid xs={12} sm="auto" item>
            <ViewModes mode={viewMode} onChange={setViewMode} />
          </Grid>
        </Grid>
      </Box>
      <DataList
        data={list}
        viewMode={viewMode}
      />
    </Container>
  );
};

export default App;
