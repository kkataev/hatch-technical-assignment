import citiesData from './nl-filtered.json';
import { City } from '../types';

(citiesData as City[]).sort((a, b) => {
  if (a.city > b.city) {
    return 1;
  }
  if (a.city < b.city) {
    return -1;
  }

  return 0;
});

const searchCities = (searchTerm = ''): City[] => {
  const term = searchTerm.trim().toLowerCase();

  if (!term) {
    return (citiesData as City[]);
  }

  return (citiesData as City[])
    .filter((c) => c.city.toLowerCase().includes(term));
};

export default searchCities;
