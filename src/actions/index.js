export const SIDO_SELECTED = 'SIDO_SELECTED';
export function selectSido(sido) {
  return {
    type: 'SIDO_SELECTED',
    payload: sido
  };
}


// import axios from 'axios';

// export const FETCH_WEATHER = 'FETCH_WEATHER';
// export const SIDO_SELECTED = 'SIDO_SELECTED';

// export function selectSido(sido) {
//   return {
//     type: 'SIDO_SELECTED',
//     payload: sido
//   };
// }

// const APP_KEY = 'JnIX4OVjZ8gY9DD3h5mPDIaBNX5%2FVBuhJLizs3X5tErre9SYLZm3%2Bx8MgM8jDzhsyzsIaR41UpAfTrft%2BF4ubQ%3D%3D'
// const ROOT_URL = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst'
// const proxyurl = "https://cors-anywhere.herokuapp.com/"

// export function fetchWeather(city) {
//   const url = `${proxyurl}${ROOT_URL}?sidoName=${sido}&searchCondition=HOUR&pageNo=1&numOfRows=25&ServiceKey=${APP_KEY}&_returnType=json`;
//   const request = axios.get(url);

//   return {
//     type: FETCH_WEATHER,
//     payload: request
//   };
// }