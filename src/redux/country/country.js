const GET_COUNTRY_SUCCESS = 'population/citys/GET_COUNTRY_SUCCESS';

const initialState = [];
// https://documenter.getpostman.com/view/1134062/T1LJjU52#d83b0a69-5256-48e7-9f0a-988233c39aa7
export const getCountry = () => (dispatch) => {
  fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: GET_COUNTRY_SUCCESS,
      payload: resResponse,
    }));
};

const citysReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_SUCCESS:
      return [
        ...state,
        ...action.payload.data,
      ];
    default:
      return state;
  }
};

export default citysReducer;
