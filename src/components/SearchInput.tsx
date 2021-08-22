import React, { ChangeEvent, useCallback, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ClearIcon from '@material-ui/icons/Clear';

interface SearchInputProps {
  onSearch: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('');
  const onChange = useCallback((e: ChangeEvent) => {
    const val = (e.target as HTMLInputElement).value.trim();
    setSearch(val);
    onSearch(val);
  }, [onSearch]);
  const onClearClick = useCallback(() => {
    setSearch('');
    onSearch('');
  }, []);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="search-term">Search</InputLabel>
      <OutlinedInput
        id="search-term"
        value={search}
        onChange={onChange}
        placeholder="type city name here"
        endAdornment={search.length ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="clear search input"
              onClick={onClearClick}
              edge="end"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ) : null}
        labelWidth={70}
      />
    </FormControl>
  );
};

export default SearchInput;
