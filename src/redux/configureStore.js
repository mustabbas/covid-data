import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryReducer from './country/country.js';
import countryDetailReducer from './country/countryDetails.js';

const reducer = combineReducers({
  countryReducer,
  countryDetailReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
