import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCountry } from '../redux/country/country.js';
import CountryItem from './CountryItem.js';
import Header from './Header.js';

const Country = () => {
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState('');
  const countrylist = useSelector((data) => data.countryReducer);

  useEffect(() => {
    if (countrylist.length === 0) {
      dispatch(getCountry());
    }
  }, []);

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const handleChange = (e) => {
    setSearchField(capitalizeFirstLetter(e.target.value));
  };

  const countryItemFilter = countrylist.filter((item) => item.name === searchField);
  const countryItemSearch = countryItemFilter.map((item) => (
    <CountryItem key = {item.id} country = {item.name} flag = {item.flag}/>
  ));

  const countryItem = countrylist.slice(1, 21).map((item) => (
    <CountryItem key = {item.id} country = {item.name} flag = {item.flag}/>
  ));
  return (
    <div>
      <Header back = "d-none"/>
    <div className ="container">
       <input className="form-control mb-3" onChange = {handleChange} placeholder ="Search for a country"/>
      <div className="row row-cols-2 row-cols-md-4">
        { countryItemFilter.length > 0 ? countryItemSearch : countryItem}
      </div>
      </div>
      </div>
  );
};

export default Country;
