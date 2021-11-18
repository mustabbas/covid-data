const GET_CITYDETAIL_SUCCESS = 'population/citys/GET_CITYDETAIL_SUCCESS';
const initialState = {};
export const getCountryDetail = (country) => (dispatch) => {
  const todayToday = new Date();
  const date = `${todayToday.getFullYear()}-${todayToday.getMonth() + 1}-${todayToday.getDate() - 1}`;
  fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${country}`)
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: GET_CITYDETAIL_SUCCESS,
      payload: resResponse.dates,
    }));
};

const countryDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITYDETAIL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default countryDetailReducer;
