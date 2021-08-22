import React, { useCallback } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import GridOnIcon from '@material-ui/icons/GridOn';
import { ViewMode } from '../types';

interface ViewModesProps {
  mode: ViewMode;
  onChange: (newMode: ViewMode) => void;
}

const ViewModes: React.FC<ViewModesProps> = ({ mode, onChange }) => {
  const onListClick = useCallback(() => {
    onChange(ViewMode.List);
  }, [onChange]);

  const onGridClick = useCallback(() => {
    onChange(ViewMode.Grid);
  }, [onChange]);

  return (
    <ButtonGroup size="large">
      <Button
        disabled={mode === ViewMode.List}
        onClick={onListClick}
        size="large"
      >
        <ListIcon />
      </Button>
      <Button
        disabled={mode === ViewMode.Grid}
        onClick={onGridClick}
        size="large"
      >
        <GridOnIcon />
      </Button>
    </ButtonGroup>
  );
};

ViewModes.defaultProps = {
  mode: ViewMode.List,
};

export default ViewModes;
