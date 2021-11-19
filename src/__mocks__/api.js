const countryData = {
  data: [
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
  ],
};

const covidData = {
  today_confirmed: 194472,
  today_deaths: 3014,
  today_new_confirmed: 616,
  today_new_deaths: 10,
  today_new_open_cases: 606,
  today_new_recovered: 0,
  today_open_cases: 61115,
  today_recovered: 130343,
};

const getCountry = {
  type: 'population/citys/GET_COUNTRY_SUCCESS',
  payload: countryData,
};

const getCovidData = {
  type: 'population/citys/GET_CITYDETAIL_SUCCESS',
  payload: covidData,
};

export { getCountry, getCovidData };