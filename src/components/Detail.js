import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCountryDetail } from '../redux/country/countryDetails.js';
import DetailItem from './DetailItem.js';
import '../App.css';
import Header from './Header.js';

const Detail = () => {
  const countryCovid = [];
  const dispatch = useDispatch();
  const covied = useSelector((data) => data.countryDetailReducer);
  Object.entries(covied).forEach((element) => {
    const [key, value] = element;
    Object.entries(value.countries).forEach((element) => {
      const [key, value] = element;
      countryCovid.push(
        <div>
      <DetailItem data = {{ name: 'today confirmed', value: value.today_confirmed, DetailCard: 'DetailCard' }}/>
      <DetailItem data = {{ name: 'today deaths', value: value.today_deaths, DetailCard: 'DetailCardSecound' }}/>
      <DetailItem data = {{ name: 'today new open cases', value: value.today_new_open_cases, DetailCard: 'DetailCard' }}/>
      <DetailItem data = {{ name: 'today new recovered', value: value.today_new_recovered, DetailCard: 'DetailCardSecound' }}/>
      <DetailItem data = {{ name: 'today open case', value: value.today_open_case, DetailCard: 'DetailCard' }}/>
      <DetailItem data = {{ name: 'today recovered', value: value.today_recovered, DetailCard: 'DetailCardSecound' }}/>
      </div>,
      );
    });
  });
  const data = useLocation();
  useEffect(() => {
    dispatch(getCountryDetail(data.state.country));
  }, []);
  return (
        <div>
          <Header/>
    <div className="detailHeader">{data.state.country}</div>
    <div>{countryCovid}</div>
    </div>
  );
};

export default Detail;