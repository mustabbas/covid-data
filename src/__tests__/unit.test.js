import citysReducer from '../redux/country/country.js';
import countryDetailReducer from '../redux/country/countryDetails.js';
import { getCountry, getCovidData } from '../__mocks__/api.js';

test('should return the initial state', () => {
  expect(citysReducer(undefined, {})).toEqual([]);
});

test('should return the initial state', () => {
  expect(countryDetailReducer(undefined, {})).toEqual({});
});

test('should return dumy country data from mocks', () => {
  const previousState = [];
  expect(citysReducer(previousState, getCountry)).toEqual([
    {
      name: 'Afghanistan',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg',
    },
    {
      name: 'Albania',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
    },
    {
      name: 'Algeria',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
    },
    {
      name: 'Andorra',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg',
    },
  ]);
});

test('should return dumy covid data from mocks', () => {
  const previousState = {};
  expect(countryDetailReducer(previousState, getCovidData)).toEqual(
    {
      today_confirmed: 194472,
      today_deaths: 3014,
      today_new_confirmed: 616,
      today_new_deaths: 10,
      today_new_open_cases: 606,
      today_new_recovered: 0,
      today_open_cases: 61115,
      today_recovered: 130343,
    },
  );
});